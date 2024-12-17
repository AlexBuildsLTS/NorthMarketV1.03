import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import Listing from '../models/Listing.js';
import auth from '../middleware/auth.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create listing
router.post('/', auth, upload.array('images', 5), async (req, res) => {
  try {
    const { title, description, price, category, condition, location } = req.body;
    
    // Upload images to Cloudinary
    const imageUrls = [];
    if (req.files) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.buffer.toString('base64'), {
          folder: 'northmarket',
        });
        imageUrls.push(result.secure_url);
      }
    }

    const listing = new Listing({
      title,
      description,
      price,
      images: imageUrls,
      category,
      condition,
      location,
      seller: req.user.userId,
    });

    await listing.save();
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error creating listing', error: error.message });
  }
});

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find()
      .populate('seller', 'username profile')
      .sort({ createdAt: -1 });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listings', error: error.message });
  }
});

// Get seller's listings
router.get('/my-listings', auth, async (req, res) => {
  try {
    const listings = await Listing.find({ seller: req.user.userId })
      .sort({ createdAt: -1 });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listings', error: error.message });
  }
});

// Update listing
router.put('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findOneAndUpdate(
      { _id: req.params.id, seller: req.user.userId },
      req.body,
      { new: true }
    );
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error updating listing', error: error.message });
  }
});

// Delete listing
router.delete('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findOneAndDelete({
      _id: req.params.id,
      seller: req.user.userId,
    });
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting listing', error: error.message });
  }
});

export default router;