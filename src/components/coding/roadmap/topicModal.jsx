export function TopicModal({title, level, closeModal, description}) {
	
    const getBadgeColor = (level) => {
		switch (level) {
			case "Beginner":
				return "badge-success";

			case "Intermediate":
				return "badge-warning";

			case "Advanced":
				return "badge-error";

			default:
				return "badge-info";
		}
  	};

	return (
		<dialog open className="modal modal-open modal-bottom sm:modal-middle">
			<div className=" modal-box bg-base-100 text-base-content border border-base-300 shadow-2xl max-w-lg">

				<div className="flex items-start justify-between gap-4 mb-4">
					<div>
						<p className="text-xs uppercase tracking-[0.2em] text-secondary mb-1">
						Roadmap Topic
						</p>

						<h3 className="font-bold text-xl sm:text-2xl text-primary">
						{title}
						</h3>
					</div>

					<span className={`badge badge-sm font-semibold ${getBadgeColor(level)}`}>
						{level}
					</span>
				</div>

				<p className="text-sm sm:text-base leading-7 text-secondary">
					{description}
				</p>

				<div className="divider my-3" />
				<div className="modal-action">
					<button
						type="button"
						className="btn btn-sm btn-ghost"
						onClick={closeModal}
					>
						Close
					</button>

					<button
						type="button"
						className="btn btn-sm btn-primary"
						onClick={closeModal}
					>
						Mark as Learned
					</button>
				</div>
			</div>

			<div className="modal-backdrop" onClick={closeModal} />
		</dialog>
	);
}
