const ChangeQuantity = ({ quantity, setQuantity }) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

  return(
    <div className="flex items-center justify-center gap-4 mt-4">
        <button
        className="w-8 h-8 border border-black text-black text-lg 
                   hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                   onClick={removeQuantity}
        >-</button>
        <p className="text-sm font-medium">{quantity}</p>
        <button
        className="w-8 h-8 border border-black text-black text-lg 
                   hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                   onClick={addQuantity}
        
        >+</button>

    </div>

  );
};

export default ChangeQuantity;
