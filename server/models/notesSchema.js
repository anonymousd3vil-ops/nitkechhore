import { model, Schema } from "mongoose";


const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    pdf:{
        path: String,   
        secureUrl: String
    },
},{
    timestamps: true
});

const Notes = model('note', noteSchema);

export default Notes;