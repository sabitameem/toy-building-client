import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-blue-200">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <p className="text-2xl text-gray-700">Oops! Page not found.</p>
          <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
          <Link to='/'>
          <button className="mt-6 py-2 px-4 text-white bg-red-500 rounded hover:bg-red-600 transition duration-300">Go Back</button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;