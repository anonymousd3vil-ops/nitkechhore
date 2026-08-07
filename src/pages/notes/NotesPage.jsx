import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBookOpen } from "react-icons/fa6";

import MainLayout from "../../layout/mainLayout.jsx";
import { getSem1Notes } from "../../applicationStates/reduxSlices/notesSlice.js";
import PDFCard from "../../components/notesComponents.jsx/pdfCard.jsx";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotesPage({ pageTitle, heading, subject, loadingText, emptyTitle, emptyMessage, semester}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSem1Notes());
    }, [dispatch]);

    const { notes, loading } = useSelector((state) => state.notes);

    const filteredNotes = notes.filter(
        (note) => note.subject === subject && note.semester === semester
    );

    return (
        <MainLayout>
            <title>{pageTitle}</title>

            <main className="min-h-screen bg-base-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    {/* Header */}
                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-primary/10 text-primary p-3 rounded-xl">
                                <FaBookOpen className="text-2xl" />
                            </div>

                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-base-content font-primary">
                                    {heading}
                                </h1>

                                <p className="text-sm text-base-content/60 mt-1 font-secondary">
                                    Semester {semester} Notes
                                </p>
                            </div>
                        </div>

                        <div className="divider my-4" />

                        {!loading && (
                            <p className="text-sm text-base-content/60 font-secondary">
                                {filteredNotes.length}{" "}
                                {filteredNotes.length === 1
                                    ? "note"
                                    : "notes"}{" "}
                                available
                            </p>
                        )}
                    </section>

                    {/* Loading */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <span className="loading loading-spinner loading-lg text-primary"></span>

                            <p className="text-base-content/60 font-secondary">
                                {loadingText}
                            </p>
                        </div>
                    )}

                    {/* Notes */}
                    {!loading && filteredNotes.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-primary">
                            {filteredNotes.map((note) => (
                                <PDFCard
                                    key={note._id}
                                    subject={note.subject}
                                    title={note.title}
                                    pdfUrl={note.pdf?.secureUrl}
                                />
                            ))}
                        </div>
                    )}

                    {/* Empty */}
                    {!loading && filteredNotes.length === 0 && (
                        <div className="flex flex-col items-center justify-center text-center py-24">

                            <div className="bg-base-200 p-5 rounded-full mb-5">
                                <FaBookOpen className="text-4xl text-base-content/30" />
                            </div>

                            <h2 className="text-xl font-semibold font-secondary">
                                {emptyTitle}
                            </h2>

                            <p className="text-base-content/60 mt-2 max-w-md font-secondary">
                                {emptyMessage}
                            </p>
                        </div>
                    )}
                </div>
            </main>
            <div className="flex justify-center pb-10">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline rounded-xl px-8 font-primary"
                >
                    <ArrowLeft size={18} />
                    Go Back
                </button>
            </div>
        </MainLayout>
    );
}