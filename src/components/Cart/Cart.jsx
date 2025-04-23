import { ShoppingCart } from "lucide-react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import { useState } from "react";
import { getTotalPrice } from "../../redux/cartSlice";

function Cart() {
  const cartItems = useSelector(getCartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div>
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="relative flex items-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
      >
        <ShoppingCart size={20} className="mr-2" />
        Cart
      </button>

      {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 border-l border-gray-200 z-50">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Cart is empty.</p>
          ) : (
            cartItems.map((cartItem, index) => (
              <div>
                  <CartItem key={index} cartItems={cartItem} />

              </div>

            ))
          )}

          <h3 className="text-sm font-semibold uppercase">Total: ${totalPrice}</h3>

          <button
            onClick={() => setIsCartOpen(false)}
            className="absolute top-4 right-4 text-sm text-gray-500 hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
