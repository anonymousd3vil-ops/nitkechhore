import AppError from "../utils/errorUtils.js";
import ContactUs from "../models/contactSchema.js";

const contactUs = async (req, res, next) => {
    try{
        const {email, subject, message} = req.body;
        if(!email || !subject || !message){
            return next(new AppError("All Fields are mandetory.", 400));
        }

        const queryExists = await ContactUs.findOne({email});
        if(queryExists){
            return next(new AppError('Your Query Already Exists, Try With another Email.', 400))
        }
        // console.log("helloo!!");
        const query = await ContactUs.create({
            email,
            subject,
            message
        });

        if(!query){
            return next(new AppError('Query Submission Failed, Try Again.', 400))
        }

        await query.save();

        res.status(201).json({
            success: true,
            message: "Query Registered Succesfully.",
        });
    }catch(err){
        console.log(`Error in Sending Request: ${err.message}`);
        return next(new AppError("There is some problem in Sending Request."));
    }
}

const getQueries = async (req, res, next) => {
    try{
        const queries = await ContactUs.find();
        res.status(201).json({
            success: true,
            message: 'All Queries Fetched Successfully.',
            queries
        });
    }catch(err){
        console.log(err.message);
        return next(new AppError('Failed to Get Queries', 400));
    }
}

export  {
    contactUs,
    getQueries,
}