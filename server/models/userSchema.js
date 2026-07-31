/* eslint-disable no-undef */
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import JWT from 'jsonwebtoken'
import crypto from 'crypto';


const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Full Name is Required.'],
        maxlength: [30, 'Full Name shuld be less than 30 Characters'],
        minlength: [5, 'Full Name shuld be greated than 5 Characters'],
        trim: true,
        match: [/^[A-Za-z ]+$/, 'Full Name can only contain alphabets and spaces']
    },

    email: {
        type: String,
        required: [true, 'Email is Required.'],
        lowercase: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please Enter a valid email address.']
    },

    password: {
        type: String,
        required: [true, 'Password is Required.'],
        minlength: [5, 'Password shuld be greater than 5 characters.'],
        select: false
    },

    avatar: {
        public_id: {
            type: String
        },
        secure_url: {
            type: String
        }
    },

    enrolmentNo: {
        type: String,
        required: true,
    },

    branch: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },

    forgotPasswordToken: String,

    forgotPasswordExpiry: Date,

}, {
    timestamps: true
});

userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return
    }

    this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods = {
    generateJWToken: async function(){
        return JWT.sign(
            {id: this._id, email: this.email, subscription: this.subscription, role: this.role}, //tokenizing id and email
            process.env.JWT_SECRET_KEY,  //by secret key
            {expiresIn: process.env.JWT_EXPIRY}  //this token will expire in 24hrs
        )
    },
    comaparePassword: async function (plainTextPass) {
        return await bcrypt.compare(plainTextPass, this.password);
    },
    generatePasswordResetToken: async function( ){
        const resetToken = crypto.randomBytes(20).toString('hex');

        this.forgotPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

        this.forgotPasswordExpiry = Date.now() + 15*60*1000  //15min from now

        return resetToken;
    }

}

const User = model('userinfo', userSchema);

export default User;