const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserProfile = require('../Models/Users');

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Create or update profile
router.post('/update', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { fullName, email, location, bio, role, interests } = req.body;

    const profilePhoto = req.file ? req.file.path : '';

    // Upsert user by email
   let parsedInterests = [];

if (interests) {
  if (typeof interests === 'string') {
    try {
      parsedInterests = JSON.parse(interests);
    } catch {
      // fallback if interests is comma-separated string
      parsedInterests = interests.split(',').map(i => i.trim());
    }
  } else if (Array.isArray(interests)) {
    parsedInterests = interests;
  }
}

const profile = await UserProfile.findOneAndUpdate(
  { email },
  {
    fullName,
    email,
    location,
    bio,
    role,
    interests: parsedInterests,
    profilePhoto
  },
  { upsert: true, new: true, setDefaultsOnInsert: true }
);


    res.status(200).json({ success: true, data: profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
