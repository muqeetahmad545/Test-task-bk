const express = require('express');
const { imageHandler } = require('../controller/upload');
const router = express.Router();

router.post('/img', async (req, res) => {
  try {
    const result = await imageHandler(req, res);

    // console.log('Cloudinary upload result:', result);

    const secureUrl = result.secure_url || result.secucarImagere_url;

    if (!secureUrl) {
      console.error('Secure URL is undefined in Cloudinary response:', result);
      return res
        .status(500)
        .json({ success: false, error: 'Image upload failed' });
    }

    const { public_id } = result;

    res.status(200).json({ success: true, carImage: secureUrl, public_id });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ success: false, error: 'Image upload failed' });
  }
});

module.exports = {
  uploadRouter: router,
};
