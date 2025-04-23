import { useSelector } from "react-redux";
import dataStoreCloth from "../../data/dataStoreCloth";
import Cart from "../Cart/Cart";
import AllCategoris from "../Filter/AllCategories";
import ShopItems from "./ShopItems";
import { getSelectedCategory } from "../../redux/clothesSlice";

function Shop(){

    const selectedCategory = useSelector(getSelectedCategory);
    console.log("selectedCategory:", selectedCategory);


    return(
        <div className="min-h-screen bg-white p-8">

            <div className="flex justify-between items-center mb-6">
                <AllCategoris/>
                <Cart/>
            </div>
<h1 className="text-3xl font-semibold text-center mb-6">Shop Our Collection</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataStoreCloth
        .filter(item => {
            if( selectedCategory === "ALL") return true;
            return selectedCategory === item.category;
        })
        .map(item => <ShopItems key={item.id} item={item}/>)}
        
        </div>
        

        </div>
        
    )

}
console.log("dataStoreCloth:", dataStoreCloth);

export default Shop;

