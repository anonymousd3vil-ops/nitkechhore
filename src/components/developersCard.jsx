function DeveloperCard({name, profilePic, tag}){
    return (
        <div
            className="flex items-center justify-between bg-base-100 rounded-xl p-3 hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
        >
            <div className="flex items-center gap-3">
                <div className="avatar placeholder">
                    <div className="bg-primary text-primary-content rounded-full w-10">
                        <div className="bg-secondary text-secondary-content rounded-full w-10">
                            <img src={profilePic} alt="NotFound" />
                        </div>
                    </div>
                </div>
                <span className="font-medium text-lg">
                    {name}
                </span>
            </div>
            <div className="badge badge-secondary rounded-lg p-1">
                {tag}
            </div>
        </div>
    );
}

export default DeveloperCard;