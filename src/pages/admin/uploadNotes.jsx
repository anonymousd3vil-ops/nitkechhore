import {  Captions, CheckCircle2, FileText, Hash, NotebookPen, Upload } from "lucide-react";
import MainLayout from "../../layout/mainLayout.jsx";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadNotes } from "../../applicationStates/reduxSlices/notesSlice.js";

function UploadNotes() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [notesData, setNotesData] = useState({
		title: '',
		subject: '',
		semester: '',
		pdf: '',
	});

	function handelUserInput(e){
        const {name, value} = e.target

        setNotesData({
            ...notesData,
            [name]: value
        });
    }

	function getPdf(event){
		event.preventDefault();

		const uploadedPDF = event.target.files[0];

        if (!uploadedPDF) return;

        if (uploadedPDF.type !== "application/pdf") {
            toast.error("Please upload a PDF file.");
            event.target.value = "";
            return;
        }

		if(uploadedPDF){
            if (uploadedPDF.size > 20 * 1024 * 1024) {
                toast.error("Please upload the PDF of size having less than 20MB.");

                // Clear the selected file
                event.target.value = "";
                return;
            }
			setNotesData({
                ...notesData,
                pdf: uploadedPDF
            });
		}
	}

	async function handelUploadNotes(event){
		event.preventDefault();

		if(!notesData.title || !notesData.semester || !notesData.subject || !notesData.pdf){
			toast.error("Please provide all data.");
            return;
		}

		const formData = new FormData();

		formData.append('title', notesData.title);
		formData.append('subject', notesData.subject);
		formData.append('semester', notesData.semester);
		formData.append('pdf', notesData.pdf);

		const response = await dispatch(uploadNotes(formData));

		if(response?.payload?.success){
            navigate('/profile');
        }

		setNotesData({
			title: '',
			subject: '',
			semester: '',
			pdf: '',
		});
	}

    return (
        <MainLayout>
            <div className="min-h-screen bg-base-100 px-5 md:px-10 lg:px-20 py-10">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-primary font-semibold uppercase tracking-widest text-sm font-secondary">
                        Admin Panel
                    </p>
                    <h1 className="text-3xl md:text-4xl font-black mt-1 font-primary">
                        Upload Notes
                    </h1>
                    <p className="text-base-content/50 mt-2 font-secondary max-w-xl">
                        Upload academic notes carefully by following the instructions
                        provided below.
                    </p>
                </div>
                {/* Main Card */}
                <div className="card w-full max-w-6xl mx-auto bg-base-200 shadow-xl border border-base-300 lg:grid lg:grid-cols-[0.9fr_1.1fr] overflow-hidden">
                    {/* LEFT SIDE */}
                    <div className="lg:flex flex-col justify-between bg-primary text-primary-content p-10 xl:p-12">
                        <div>
                            <p className="uppercase tracking-[0.2em] text-xs font-semibold opacity-70 font-secondary">
                                Guidelines
                            </p>
                            <h2 className="text-3xl xl:text-4xl font-black mt-2 leading-tight font-primary">
                                Instructions To
                                <br />
                                Upload Notes
                            </h2>
                            <p className="mt-4 text-sm opacity-75 leading-6 font-secondary">
                                Please make sure all the information is correct before
                                submitting the notes.
                            </p>
                            {/* Instructions */}
                            <div className="mt-10 space-y-6 font-secondary">
                                <div className="flex gap-4">
                                    <CheckCircle2 size={21} className="shrink-0 mt-0.5"/>
                                    <div>
                                        <p className="font-semibold">
                                            Enter a proper title
                                        </p>

                                        <p className="text-sm opacity-70 mt-1">
                                            Use capitalized format for the note title.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 size={21} className="shrink-0 mt-0.5" />
                                    <div>
                                        <div className="flex items-center ">
                                            <p className="font-semibold">
                                                Enter subject name only
                                            </p>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="ml-2 btn rounded-full border-0 h-5 w-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>i</button>
                                            <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <h3 className="font-bold text-lg font-primary text-primary underline">Guidlines to Enter Subject Name</h3>
                                                {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Engineering Mathematics - I OR II → Mathematics
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Engineering Physics - I OR II → Physics
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Engineering Chemsitry - I OR II → Chemistry
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Basic Electronics → BE
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Profesional Comunication in English → English
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Basic Electrical Engineeting → BEE
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Introduction to Programming → IP
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Disaster Management → DSTM
                                                </p>
                                                <p className="text-sm opacity-70 mt-1 font-secondary text-secondary">
                                                    Engineering Mechanics → Mechanics
                                                </p>
                                            </div>
                                            </dialog>
                                        </div>
                                        <p className="text-sm opacity-70 mt-1">
                                            Example: Engineering Mathematics - I → Mathematics
                                        </p>
                                        <p className="text-sm opacity-70 mt-1">
                                            Example: Basic Electrical Engineeting → BEE
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 size={21} className="shrink-0 mt-0.5" />

                                    <div>
                                        <p className="font-semibold">
                                            Enter semester number
                                        </p>

                                        <p className="text-sm opacity-70 mt-1">
                                            Example: 1, 2, 3...
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 size={21} className="shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">
                                            Upload the correct PDF
                                        </p>
                                        <p className="text-sm opacity-70 mt-1">
                                            Verify the document before submitting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom message */}
                        <div className="mt-12 pt-6 border-t border-primary-content/20">
                            <p className="text-sm opacity-70 font-secondary">
                                Contribute with pure intentions ❤️
                            </p>
                        </div>
                    </div>

                    {/*  RIGHT SIDE  */}
                    <div className="p-6 sm:p-8 md:p-10 xl:p-12">

                        {/* Form Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <Upload size={22} />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-primary">
                                        Note Details
                                    </h2>
                                    <p className="text-base-content/50 text-sm font-secondary mt-1">
                                        Fill in the information below.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form noValidate onSubmit={handelUploadNotes} className="space-y-6">
                            {/* Title */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold font-secondary">
                                    Note Title
                                </label>

                                <label className="input input-bordered flex items-center gap-3 w-full focus-within:input-primary">
                                    <Captions size={18} className="text-base-content/50" />
                                    <input 
										type="text" 
										name="title" 
										className="grow font-secondary" 
										value={notesData.title}
										placeholder="e.g. Differential Calculus"
										onChange={handelUserInput} 
									/>
                                </label>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold font-secondary">
                                    Subject
                                </label>

                                <label className="input input-bordered flex items-center gap-3 w-full focus-within:input-primary">
                                    <NotebookPen size={18} className="text-base-content/50" />
                                    <input 
										type="text" 
										name="subject" 
										className="grow font-secondary" 
										placeholder="e.g. Mathematics" 
										value={notesData.subject}
										onChange={handelUserInput}
									/>
                                </label>
                            </div>

                            {/* Semester */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold font-secondary">
                                    Semester
                                </label>

                                <label className="input input-bordered flex items-center gap-3 w-full focus-within:input-primary">
                                    <Hash size={18} className="text-base-content/50" />
                                    <input
                                        type="number"
                                        name="semester"
                                        min="1"
                                        max="8"
                                        className="grow font-secondary"
                                        placeholder="e.g. 1"
										value={notesData.semester}
										onChange={handelUserInput}
                                    />
                                </label>
                            </div>

                            {/* PDF Upload */}
							<div>
								<label className="block mb-2 text-sm font-semibold font-secondary">
									Upload PDF
								</label>

								<label
									htmlFor="noteFile"
									className=" border-2 border-dashed border-base-300 hover:border-primary hover:bg-primary/5 rounded-2xl min-h-40 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 px-6 py-6 text-center " >
									<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<FileText size={28} className="text-primary" />
									</div>

									{notesData.pdf ? (
										<>
											<p className="font-semibold text-primary">
												{notesData.pdf.name}
											</p>

											<p className="text-xs text-base-content/50 mt-1">
												{(notesData.pdf.size / (1024 * 1024)).toFixed(2)} MB
											</p>

											<p className="text-xs text-base-content/40 mt-3">
												Click again to choose another file
											</p>
										</>
									) : (
										<>
											<p className="font-semibold">
												Click to upload your notes
											</p>

											<p className="text-sm text-base-content/50 mt-2">
												PDF files only • Maximum 20 MB
											</p>
										</>
									)}

									<input
										id="noteFile"
										type="file"
										accept=".pdf,application/pdf"
										className="hidden"
										onChange={getPdf}
									/>
								</label>
							</div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full text-base mt-2 gap-2"
                            >
                                <Upload size={19} />
                                Upload Notes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default UploadNotes;