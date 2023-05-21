import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateMyToy = () => {
  const updateMyToy = useLoaderData();
  const { _id, price, availableQuantity, description } = updateMyToy;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const updatedMyToy = { price, availableQuantity, description };
    console.log(updatedMyToy);

    fetch(`https://toy-building-server.vercel.app/addAToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMyToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("🦄 Wow you updated a new toy!", {
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
    <div className="py-4 mx-4">
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

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-lg font-medium">Price</label>
          <input type="" name="price" className="input input-bordered w-full" />
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
        <div className="mt-6 mb-6">
          <button type="submit" className="btn btn-block">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyToy;
