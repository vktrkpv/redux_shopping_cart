import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Store</h1>
        <p className="mt-2 text-gray-600">Find your perfect style!</p>
        <Link to="/shop">
          <button className="mt-6 px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition cursor-pointer">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
