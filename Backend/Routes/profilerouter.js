const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserProfile = require('../Models/Users');
const { getInterestEmbedding } = require('../Utils/embedUtils'); // ✅ add this line
const { cosineSimilarity } = require('../Utils/similarityUtils');


// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });


// GET /api/profile/get - Fetch user profile by email
router.get('/get', async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    const profile = await UserProfile.findOne({ email });
    
    if (!profile) {
      return res.status(404).json({ 
        success: false, 
        message: 'Profile not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      data: profile 
    });
    
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Server Error' 
    });
  }
});


// POST /api/profile/update
router.post('/update', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { fullName, email, location, bio, role, interests,phoneNumber,instagram,facebook} = req.body;
    const profilePhoto = req.file ? req.file.path : '';

    let parsedInterests = [];

    if (interests) {
      if (typeof interests === 'string') {
        try {
          parsedInterests = JSON.parse(interests);
        } catch {
          parsedInterests = interests.split(',').map(i => i.trim());
        }
      } else if (Array.isArray(interests)) {
        parsedInterests = interests;
      }
    }

    // ✅ Generate interest embedding from Python server
    const interestEmbedding = await getInterestEmbedding(parsedInterests);
    console.log(interestEmbedding);
    if (!interestEmbedding) {
      return res.status(500).json({ success: false, message: 'Failed to generate embedding' });
    }

    // ✅ Upsert profile
    const profile = await UserProfile.findOneAndUpdate(
      { email },
      {
        fullName,
        email,
        location,
        bio,
        role,
        interests: parsedInterests,
        interestEmbedding, // ✅ Store embedding
        profilePhoto,
        phoneNumber,
        instagram,
        facebook
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ success: true, data: profile });
  } catch (err) {
    console.error('Error updating profile:', err);
    console.error('Error updating profile:', err.stack || err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});


router.post('/similar', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const currentUser = await UserProfile.findOne({ email });
    if (!currentUser || !currentUser.interestEmbedding?.length) {
      return res.status(404).json({ message: 'User not found or embedding missing' });
    }

    const otherUsers = await UserProfile.find({
      email: { $ne: email },
      interestEmbedding: { $exists: true, $not: { $size: 0 } }
    });

    const similarities = otherUsers.map(user => {
      return {
        fullName: user.fullName,
        email: user.email,
        profilePhoto: user.profilePhoto,
        phoneNumber: user.phoneNumber || '',
        interests: user.interests,
        instagram: user.instagram,
        facebook: user.facebook,
        similarity: cosineSimilarity(currentUser.interestEmbedding, user.interestEmbedding),
      };
    });

    // Sort by similarity descending
    const sorted = similarities.sort((a, b) => b.similarity - a.similarity);
    res.json(sorted); // return top 5 similar users
  } catch (err) {
    console.error('Error fetching similar users:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/search', async (req, res) => {
  const query = req.query.query?.toLowerCase();

  if (!query) return res.status(400).json({ success: false, message: 'Query is required' });

  try {
    const regex = new RegExp(query, 'i'); // case-insensitive search

    const users = await UserProfile.find({
      $or: [
        { fullName: regex },
        { interests: { $in: [regex] } },
        { location: regex },
        { bio: regex },
        { role: regex }
      ]
    }).limit(10);

    res.json({ success: true, data: users });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
