import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaBookOpen } from "react-icons/fa6";

import MainLayout from "../../layout/mainLayout.jsx";
import { getSem1Notes } from "../../applicationStates/reduxSlices/notesSlice.js";
import PDFCard from "../../components/notesComponents.jsx/pdfCard.jsx";

function EMaths() {
    const dispatch = useDispatch();

    const { notes, loading } = useSelector((state) => state.notes);

    useEffect(() => {
        dispatch(getSem1Notes());
    }, [dispatch]);
    
    const mathNotes = notes.filter((note) => note.subject === "Mathematics");

    return (
        <MainLayout>
            <title>Engineering Mathematics - I | NITKeChhore</title>
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
                                    Engineering Mathematics
                                </h1>
                                <p className="text-sm text-base-content/60 mt-1 font-secondary">
                                    Semester 1 Notes
                                </p>
                            </div>
                        </div>
                        <div className="divider my-4" />
                        {!loading && (
                            <p className="text-sm text-base-content/60 font-secondary">
                                {mathNotes.length}{" "}
                                {mathNotes.length === 1 ? "note" : "notes"} available
                            </p>
                        )}
                    </section>

                    {/* Loading */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <span className="loading loading-spinner loading-lg text-primary"></span>

                            <p className="text-base-content/60 font-secondary">
                                Loading mathematics notes...
                            </p>
                        </div>
                    )}

                    {/* Notes */}
                    {!loading && mathNotes.length > 0 && (
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-primary"
                        >
                            {mathNotes.map((note) => (
                                <PDFCard
                                    key={note._id}
                                    subject={note.subject}
                                    title={note.title}
                                    pdfUrl={note.pdf?.secureUrl}
                                />
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && mathNotes.length === 0 && (
                        <div className="flex flex-col items-center justify-center text-center py-24">

                            <div className="bg-base-200 p-5 rounded-full mb-5">
                                <FaBookOpen className="text-4xl text-base-content/30" />
                            </div>

                            <h2 className="text-xl font-semibold font-secondary">
                                No Mathematics Notes Yet
                            </h2>
                            <p className="text-base-content/60 mt-2 max-w-md font-secondary">
                                Mathematics notes haven't been uploaded yet.
                                Check back later for new notes.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </MainLayout>
    );
}

export default EMaths;