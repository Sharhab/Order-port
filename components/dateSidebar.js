export default function DateSidebar(props) {
    const dates = ["All", "1st", "8th", "15th", "22nd", "29th"];

    return (
        <div className="absolute top-0 left-0 h-full w-16 sm:w-20 md:w-28 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-around w-full h-full my-36 rounded-tr-md rounded-br-md  bg-default-100 shadow-3xl">
                {dates.map((date) => {
                    return (
                        <a
                            key={date}
                            className="cursor-pointer py-6 w-full flex flex-col items-center relative"
                            onClick={() => {props.changeDate(date)}}
                        >
                            <h3 className="text-default-900 font-bold text-xl sm:text-2xl md:text-3xl text-center pb-1">
                                {date}
                            </h3>
                            {props.activeDate == date ? (
                                <div className="bg-pink-200 w-20 h-1 absolute bottom-3 rounded-lg"></div>
                            ) : (
                                <div className="bg-slate-300 w-20 h-px absolute bottom-3"></div>
                            )}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
