import { model, Schema } from "mongoose";

const contactSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        lowercase: true,
        trim: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address."
        ]
    },

    subject: {
        type: String,
        required: [true, "Subject is required."],
        trim: true,
        minlength: [5, "Subject should be at least 5 characters."],
        maxlength: [100, "Subject should be less than 100 characters."]
    },

    message: {
        type: String,
        required: [true, "Message is required."],
        trim: true,
        minlength: [10, "Message should be at least 10 characters."],
        maxlength: [1000, "Message should be less than 1000 characters."]
    }
}, {
    timestamps: true
});

const ContactUs = model('contactMessage', contactSchema);
export default ContactUs;