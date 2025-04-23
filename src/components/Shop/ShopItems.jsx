import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from 'react';

function ShopItems({ item }) {

    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col gap-2">
            <div className="w-full h-[450px] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="text-center">
            <h2 className="text-lg font-medium uppercase">{item.name}</h2>
            <p className="text-gray-700 text-sm">${item.price}</p>

            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />


            <button
            onClick={() => dispatch(addItemToCart({ cloth: item, quantity }))}
            className="mt-3 w-full px-4 py-2 bg-black text-white uppercase text-sm tracking-wider 
                    hover:bg-gray-800 transition-all duration-300 border border-black hover:border-gray-800 cursor-pointer"
            >Add to Cart</button>
            </div>


        </div>
    );
}

export default ShopItems;