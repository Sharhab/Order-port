import Image from 'next/image';
import BlurImage from '../components/blurImage';
import { useState } from 'react';

export default function ProductCard (props) {
    const [inputFocus, setInputFocus] = useState(false);
    
    const handleFocus = (e) => {
        setInputFocus(true);
    }

    const handleBlur = (e) => {
        setInputFocus(false);
    }

    return (
        <div className="my-6 mx-auto cursor-pointer">
            <div className="group">
                <div className="bg-default-900 rounded-t-md py-3 w-72 flex flex-col text-default-100 text-center">
                    <h3 className="text-xl font-bold">{props.text}</h3>    
                    <p className="italic">${props.price} per {(props.measured_per_text).toLowerCase()} </p>
                </div>
                {props.imgPath ? <BlurImage 
                    alt={props.text}
                    imgPath={props.imgPath}
                    /> : null}
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
                            ` + ' ' + (props.error ? 'border-red' : '')} 
                        type='number'
                        min='0'
                        max="999"
                        placeholder='How many?'
                        name={props.name} 
                        autoComplete="off"
                    />
                    <div className={`text-center absolute w-32 rounded-b-md shadow-xl text-lg font-bold animate-slideOut -z-10 ${inputFocus ? null : 'hidden'} `}>{props.measured_per_text}s</div>
                </div>
                <button 
                    className="bg-default-900 rounded-md px-5 p-1 flex hover:bg-zinc-700 active:bg-zinc-600" 
                    onClick={props.addToCart}
                    name={props.name}
                    data-price={props.price}
                >
                    <span className="text-default-100 text-xl font-bold">+</span>
                    <Image className="" src="/images/icons/shopping_cart.png" width="28" height="28" />
                </button>
            </div>
        </div>
    )
}