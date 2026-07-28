/* eslint-disable no-undef */
import app from './App.js'
import connetToDb from './config/dbConnection.js';
import cloudinary from 'cloudinary';

const PORT = process.env.PORT || 5050;

//cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(PORT, ()=>{
    connetToDb();
    console.log(`Server is stated at http://localhost:${PORT}...`);
});