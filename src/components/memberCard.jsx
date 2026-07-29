function MemberCard({name, profilePic, memberTag}){
    return (
        <div
            className="flex items-center justify-between bg-base-100 rounded-xl p-3 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
        >
            <div className="flex items-center gap-3">
                <div className="avatar placeholder">
                    <div className="bg-secondary text-secondary-content rounded-full w-10">
                        <img src={profilePic} alt="PicNotFound" />
                    </div>
                </div>
                <span className="font-medium text-lg">
                    {name}
                </span>
            </div>
            <div className="badge badge-primary rounded-lg p-1">
                {memberTag}
            </div>
        </div>
    );
}

export default MemberCard;