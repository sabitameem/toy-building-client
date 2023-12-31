import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../hook/useTitle";

const AddAToys = () => {
  const { user } = useContext(AuthContext);

  useTitle('Add a Toys')

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const picture = form.picture.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail=form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    console.log(
      picture,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description
    );
    const addAToy = {
      picture,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };

    fetch("https://toy-building-server.vercel.app/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addAToy),
    })
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        if (response.message === "Toy added successfully") {
          toast('🦄 Wow you added a new toy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      });
  };

  return (
    <div className="p-4">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <h1 className="text-3xl lg:text-5xl text-center font-semibold text-pink-400 mb-4">
        You can add Your <span className="text-blue-400">Favorite</span> Toy
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-lg font-medium">Picture URL of the toy</label>
          <input
            type="url"
            name="picture"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Seller Name</label>
          <input
            type="text"
            name="sellerName"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Seller Email</label>
          <input
            type="email"
            name="sellerEmail"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Sub-category</label>
          <select name="subCategory" className="select select-bordered w-full">
            <option value="">Select Sub-category</option>
            <option value="Bus Toys">Bus Toys</option>
            <option value="Truck Toys">Truck Toys</option>
            <option value="Car Toys">Car Toys</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Price</label>
          <input type="" name="price" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Rating</label>
          <input
            type=""
            name="rating"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Available Quantity</label>
          <input
            type="number"
            name="availableQuantity"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">Detail Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows={4}
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToys;
