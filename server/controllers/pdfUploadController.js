import supabase from "../config/supabase.js";
import Notes from "../models/notesSchema.js";
import AppError from "../utils/errorUtils.js"

export const uploadNote = async (req, res, next) =>{
    try{
        const {title, subject, semester} = req.body;
        if(!req.file){
            return next(new AppError("Please Upload PDF File",400));
        }

        if (req.file.mimetype !== "application/pdf") {
            return res.status(400).json({
                success: false,
                message: "Only PDF files are allowed"
            });
        }

        const fileName = `${Date.now()}-${req.file.originalname}`;

        const {data, error} = await supabase.storage
            .from('NITkeChhore-Storage')
            .upload(fileName, req.file.buffer, {
                contentType: "application/pdf",
                upsert: false
            });
        
        if(error){
            throw error;
        }

        const {data: urlData} = supabase.storage
            .from('NITkeChhore-Storage')
            .getPublicUrl(data.path);

        const note = await Notes.create({
            title,
            subject,
            semester,
            pdf : {
                path: data.path,
                secureUrl: urlData.publicUrl
            }
        });

        res.status(201).json({
            success: true,
            message: "Note uploaded successfully",
            note
        });

    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}