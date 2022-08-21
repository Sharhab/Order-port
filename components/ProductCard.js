import Image from "next/image";
import BlurImage from "./BlurImage";
import { useState } from "react";

export default function ProductCard(props) {
    const [inputFocus, setInputFocus] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [toggleAddedToCart, setToggleAddedToCart] = useState("hidden");

    const handleFocus = (e) => {
        setInputFocus(true);
    };

    const handleBlur = (e) => {
        setInputFocus(false);
    };

    const flipCard = (flipState) => {
        if (flipState === "toggle") {
            flipped === "flipped"
                ? setFlipped("unflipped")
                : setFlipped("flipped");
        } else if (flipState && flipped) {
            setFlipped(flipState);
            return;
        }
    };

    const addingToCart = (e) => {
        e.preventDefault();
        if (props.addToCart(e)) setToggleAddedToCart(!toggleAddedToCart);
    };

    return (
        <div id="productCard" className="my-6 mx-auto cursor-pointer">
            <div
                className="relative"
                onMouseLeave={() => flipCard("unflipped")}
                onClick={() => flipCard("toggle")}
            >
                <div
                    className={`group ${
                        flipped == "flipped"
                            ? "animate-frontTileFlip"
                            : flipped == "unflipped"
                            ? "animate-backTileFlip animation-delay-400"
                            : null
                    }`}
                >
                    <div className="bg-default-900 relative rounded-t-md py-3 w-72 flex flex-col text-default-100 text-center">
                        <h3 className="text-xl font-bold">{props.text}</h3>
                        <p className="italic">
                            ${props.price} per{" "}
                            {props.measured_per_text.toLowerCase()}{" "}
                        </p>
                    </div>
                    {props.imgPath ? (
                        <BlurImage alt={props.text} imgPath={props.imgPath} />
                    ) : null}
                    <div className="absolute bottom-0 right-0">
                        <div className="bg-default-900 relative rounded-br-md flex items-center gap-2 px-4 py-1">
                            <h4 className="text-default-100 text-xl z-10">
                                Description
                            </h4>
                            <div className="rotate-180 flex">
                                <Image
                                    src="/images/icons/back_arrow.svg"
                                    width="25"
                                    height="25"
                                />
                            </div>
                            <div className="absolute -left-[31.5px] bottom-0 w-0 h-0 border-l-[2rem] border-l-transparent border-r-[2rem] border-r-transparent border-b-[36.5px] border-b-default-900"></div>
                        </div>
                    </div>
                </div>
                <div
                    className={`group absolute top-0 ${
                        flipped == "flipped"
                            ? "animate-backTileFlip animation-delay-400"
                            : flipped == "unflipped"
                            ? "animate-frontTileFlip"
                            : "hidden"
                    }`}
                >
                    <div className="bg-default-900 rounded-t-md py-3 w-72 flex flex-col text-default-100 text-center">
                        <h3 className="text-xl font-bold">{props.text}</h3>
                        <p className="italic">
                            ${props.price} per{" "}
                            {props.measured_per_text.toLowerCase()}{" "}
                        </p>
                    </div>
                    <div className="rounded-b-md bg-default-100 relative w-72 h-72 shadow-2xl group-hover:opacity-75 duration-300 ease-in-out">
                        <div
                            className="px-6 py-3"
                            dangerouslySetInnerHTML={{
                                __html: props.product_description,
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4 justify-center w-72 relative">
                <div>
                    <input
                        onChange={props.handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={
                            `bg-default-900 rounded-md border-none text-default-100 text-xl py-1 text-center placeholder:italic w-32
                            focus:rounded-b-none transition-border duration-500 focus-visible:outline-none
                            ` +
                            " " +
                            (props.error ? "border-red" : "")
                        }
                        inputMode="numeric"
                        maxLength="3"
                        placeholder="How many?"
                        name={props.name}
                        autoComplete="off"
                    />
                    <div
                        className={`text-center absolute w-32 rounded-b-md shadow-xl text-lg font-bold animate-slideOut -z-10 ${
                            inputFocus ? null : "hidden"
                        } `}
                    >
                        {props.measured_per_text}s
                    </div>
                </div>
                <button
                    className="bg-default-900 rounded-md px-5 p-1 flex hover:bg-zinc-700 active:bg-zinc-600"
                    onClick={addingToCart}
                    name={props.name}
                    data-price={props.price}
                >
                    <span className="text-default-100 text-xl font-bold">
                        +
                    </span>
                    <Image
                        className=""
                        src="/images/icons/shopping_cart.png"
                        width="28"
                        height="28"
                    />
                </button>
            </div>
            <div className="text-lg font-bold text-center text-green-500 pt-2 h-2">
                {toggleAddedToCart !== "hidden" ? (
                    <div
                        key={toggleAddedToCart}
                        className="animate-fadeInOut -"
                    >
                        Added to cart!
                    </div>
                ) : null}
            </div>
        </div>
    );
}