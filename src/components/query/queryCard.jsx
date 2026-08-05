function QueryCard({ subject, email, message }) {

    return (
        <div className="bg-base-200 border border-base-300 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest font-primary">
                        Query
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold mt-1 font-primary ">{subject}</h2>
                </div>
                <div className="badge badge-primary badge-outline font-secondary">New</div>

            </div>

            {/* Email */}
            <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-base-content/40 font-semibold font-secondary">
                    From
                </p>

                <a href={`mailto:${email}`} className="text-sm md:text-base font-medium text-primary hover:underline break-all font-primary">
                    {email}
                </a>
            </div>

            <div className="divider my-3"></div>

            {/* Message */}
            <div>
                <p className="text-xs uppercase tracking-wider text-base-content/40 font-semibold mb-2 font-secondary">
                    Message
                </p>

                <p className="text-base-content/80 leading-relaxed font-primary">{message}</p>
            </div>

            {/* Bottom */}
            <div className="mt-6 pt-4 border-t border-base-300 flex justify-end font-primary    ">
                <a href={`mailto:${email}?subject=Re: ${subject}`} className="btn btn-primary btn-sm rounded-lg">
                    Reply
                </a>
            </div>
        </div>
    );
}

export default QueryCard;
