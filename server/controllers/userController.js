import User from "../models/userSchema.js";
import AppError from "../utils/errorUtils.js";
import cloudinary from 'cloudinary';
import fs from 'fs';

const cookieOptions = {
    maxAge: 2*24*60*60*1000, //2 days
    httpOnly: true,
    secure: true
}

const register = async (req, res, next) => {
    try{
        const {fullName, email, password, enrolmentNo, branch} = req.body;

        if (!fullName || !email || !password || !enrolmentNo || !branch) {
            return next(new AppError("All fields are required!!", 400));
        }

        const userExists = await User.findOne({email});
        if(userExists){
            return next(new AppError('User Already Exists!!', 400))
        }

        const user = await User.create({
            fullName,
            email,
            password,
            branch,
            enrolmentNo,
            avatar: {
                public_id: email,
                secure_url: 'https://res.cloudinary.com/dkzwzw2it/image/upload/v1785249737/defaultavatar_tluska.webp'
            }
        }); 
        
        if(!user){
            return next(new AppError("User Registration Failed, Try Again.", 400))
        }

        //Avatar Uplad System
        // console.log(req.file);
        if(req.file){
            try{
                    const result = await cloudinary.v2.uploader.upload(req.file.path, {
                        folder: 'lms',
                        width: 250,
                        height: 250,
                        gravity: 'faces',
                        crop: 'fill'
                    })

                    if(result){
                        user.avatar.public_id = result.public_id;
                        user.avatar.secure_url = result.secure_url;

                        //remove file from server, because it is stored on the third party server
                        // fs.rm(`uploads/${req.file.filename}`);
                        await fs.promises.unlink(req.file.path);
                    }

            }catch(err){
                console.log("Error in Avatar Upload: ", err.message);
                return next(new AppError("Profile Picture Upload Unsuccessfull!!", 500));
            }
        }

        await user.save();

        user.password = undefined;

        const token = await user.generateJWToken();

        res.cookie('token', token, cookieOptions)

        res.status(201).json({
            success: true,
            message: "User registration Successfull!!",
            user
        });

    }catch(err){
        console.log("Error While Registration!!");
        return next(new AppError(err.message, 500));
    }
};

const login = async(req, res, next) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return next(new AppError("Email and Password is required to Login.", 400));
        }

        const user = await User.findOne({email}).select('+password');

        if(!user || !(await user.comaparePassword(password))){
            return next(new AppError("Incorrect Email or Password, Try Again!"));
        }

        const token = await user.generateJWToken();
        user.password = undefined;

        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            success: true,
            message: 'User Login Successfull.',
            user
        });

    }catch(err){
        console.log("Error While Logging In!!")
        return next(new AppError(err.message, 500));
    }
}

export {
    register,
    login
}