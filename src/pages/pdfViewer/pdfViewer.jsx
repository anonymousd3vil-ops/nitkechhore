/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = pdfWorker;

function PdfViewer() {
    const [searchParams] = useSearchParams();

    const pdfUrl = searchParams.get("url");

    const containerRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!pdfUrl) {
            setError("PDF URL not found.");
            setLoading(false);
            return;
        }

        let loadingTask;

        const renderPdf = async () => {
            try {
                setLoading(true);
                setError("");

                loadingTask = getDocument({
                    url: pdfUrl,
                });
                const pdf = await loadingTask.promise;
                const container = containerRef.current;

                if (!container) return;

                container.innerHTML = "";

                // Render every page
                for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                    const page = await pdf.getPage(pageNumber);
                    const viewport = page.getViewport({
                        scale: 1.5,
                    });
                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d");
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    canvas.className ="max-w-full h-auto bg-white shadow-xl rounded";
                    container.appendChild(canvas);
                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                    }).promise;
                }

            } catch (err) {
                setError(
                    err?.message || "Failed to load PDF."
                );

            } finally {
                setLoading(false);
            }
        };

        renderPdf();
        return () => {
            if (loadingTask) {
                loadingTask.destroy();
            }
        };
    }, [pdfUrl]);

    return (
        <div className="min-h-screen bg-base-200">
            <title>PDF Viewer | NITKeChhore</title>
            {/* Navbar */}
            <header className=" sticky top-0 z-50 bg-base-100 border-b border-base-300 shadow-sm">
                <div className="px-6 py-4">
                    <h1 className="text-xl font-bold">
                        PDF Viewer
                    </h1>
                    <p className="text-sm text-base-content/50">
                        NIT Ke Chhore Notes
                    </p>
                </div>
            </header>

            {/* Loading */}
            {loading && (
                <div className="h-[80vh] flex flex-col justify-center items-center gap-4">
                    <span className="loading loading-spinner loading-lg text-primary"/>
                    <p className="text-base-content/60">
                        Loading PDF...
                    </p>
                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <div className="h-[80vh] flex justify-center items-center px-5">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">
                            Unable to open PDF
                        </h2>
                        <p className="text-base-content/60 mt-2">
                            {error}
                        </p>
                    </div>
                </div>
            )}

            {/* PDF */}
            <main className={loading || error ? "hidden" : "block"}>
                <div ref={containerRef} className="flex flex-col items-center gap-6 py-8 px-3 md:px-6"/>
            </main>
        </div>
    );
}
export default PdfViewer;