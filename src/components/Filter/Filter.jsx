import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/clothesSlice";

const Filter = ({ category }) => {
  const selectedCategory = useSelector(getSelectedCategory);
  const dispatch = useDispatch();
  return (
    <div>
      <button
      onClick={() => {dispatch(filterCategory(category))}}
      className={`px-4 py-2 border border-black text-sm uppercase tracking-wider 
        transition-all duration-300 cursor-pointer 
        ${selectedCategory === category ? "bg-black text-white" : "text-black hover:bg-black hover:text-white"}`}

      
      >
        {category}
      </button>
    </div>
  );
};

export default Filter;
