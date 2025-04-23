import { use } from "react";
import dataStoreCloth from "../../data/dataStoreCloth";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItems, index }) => {
    const clothes = dataStoreCloth.find((item) => item.id === cartItems.clothID);
    const dispatch = useDispatch();
  console.log(cartItems);


  return (
        <div key={index}
        className="flex items-center gap-4 mb-4 border-b pb-4"
        >
        
        <img
            src={clothes.img}
            alt={clothes.name}
            className="w-16 h-16 object-cover rounded"
          />
            <div className="flex flex-col">
                <h3 className="text-sm font-semibold uppercase">{clothes.name}</h3>
                <p>Quantity: {cartItems.quantity}</p>
                <p>Price: ${clothes.price * cartItems.quantity}</p>
                <button
            onClick={() => dispatch(removeItemFromCart(cartItems.clothID))}
            className="flex text-sm text-red-500 hover:underline"
          >
            Remove
          </button>
            </div>

       
    </div>
  );
};
export default CartItem;
