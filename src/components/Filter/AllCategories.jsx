import Filter from "./Filter";

const AllCategoris = () => {
    return (
        <div className="flex justify-center gap-4 mb-8">


            {['SKIRT', 'SHOES', 'JEANS', 'JACKET', 'DRESS', 'ALL'].map( category =>  <Filter category={category}/>
            )}
            

        </div>

    )
}

export default AllCategoris;