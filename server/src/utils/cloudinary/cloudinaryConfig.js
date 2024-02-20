// app.js (o donde configures tu aplicación)
const cloudinary = require('cloudinary').v2;

const CloudinaryProvider = () => {

    return cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
};


module.exports = CloudinaryProvider;