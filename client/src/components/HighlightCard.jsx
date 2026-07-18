function HighlightCard({ title, value, icon }) {

    return (
        <div className="flex flex-col bg-[#31425e] rounded-2xl p-4 m-2 hover:scale-105 text-xl">
            <div className="flex gap-2" >
                <p>{icon}</p>
                <p>{title}</p>
            </div>

            <p className="font-bold"> {value}</p>
        </div>
    );
}

export default HighlightCard;