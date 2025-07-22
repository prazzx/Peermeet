const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserProfile = require('../Models/Users');
const { getInterestEmbedding } = require('../Utils/embedUtils'); // ✅ add this line

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// POST /api/profile/update
router.post('/update', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { fullName, email, location, bio, role, interests } = req.body;
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
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ success: true, data: profile });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
