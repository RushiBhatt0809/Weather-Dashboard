function HighlightCard({ title, value }) {

    return (
        <div className="flex flex-col bg-[#31425e] rounded-2xl p-4 m-2 hover:scale-105">
            <p>{title}</p>
            <p className="font-bold"> {value}</p>
        </div>
    );
}

export default HighlightCard;