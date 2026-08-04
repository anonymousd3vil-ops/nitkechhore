import { FaFilePdf } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

function PDFCard({ title, subject, pdfUrl }) {

    const openPdf = () => {
        const viewerUrl = `/pdf-viewer?url=${encodeURIComponent(pdfUrl)}`;

        window.open(viewerUrl, "_blank");
    };

    return (
        <div
            onClick={openPdf}
            className="group w-full max-w-sm bg-base-200 border border-base-300 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50"
        >
            <div className="flex items-center gap-4">

                {/* PDF Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-500/10 shrink-0">
                    <FaFilePdf className="text-red-500 text-3xl" />
                </div>

                {/* Note Information */}
                <div className="flex-1 min-w-0">

                    <h2 className="font-semibold text-base text-base-content truncate">
                        {title}
                    </h2>

                    <p className="text-sm text-base-content/60 mt-1 truncate">
                        {subject}
                    </p>

                </div>

                {/* Open Icon */}
                <FiExternalLink className="text-xl text-base-content/40 group-hover:text-primary transition-colors shrink-0"/>

            </div>
        </div>
    );
}

export default PDFCard;