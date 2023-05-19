import Swal from "sweetalert2";
//import Swal from 'sweetalert2';

const AddAToys = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const picture=form.picture.value;
    const name=form.name.value;
    const sellerName=form.sellerName.value;
    const sellerEmail=form.sellerEmail.value;
    const subCategory=form.subCategory.value;
    const price=form.price.value;
    const rating=form.rating.value;
    const availableQuantity=form.availableQuantity.value;
    const description=form.description.value;
    console.log(picture,name,sellerName,sellerEmail,subCategory,price,rating,availableQuantity,description);
    const addAToy={picture,name,sellerName,sellerEmail,subCategory,price,rating,availableQuantity,description};
    
    fetch('https://toy-building-server.vercel.app/addAToy',{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(addAToy)
    })
    .then((data) => data.json())
      .then((response) => {
        console.log(response);
        // if(response.insertedId){
        //     alert('added new toy successfully')
        //     // Swal.fire({
        //     //     icon: 'error',
        //     //     title: 'Oops...',
        //     //     text: 'Something went wrong!',
        //     //     footer: '<a href="">Why do I have this issue?</a>'
        //     //   });
        // }
      });

    
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold text-pink-400 mb-4">You can add Your <span className="text-blue-400">Favorite</span> Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Picture URL of the toy
          </label>
          <input
            type="text"
            name="picture"
            className="input input-bordered w-full"
           
           
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
           
            
          />
        </div>
        <div className="mb-4">
          <label  className="text-lg font-medium">
            Seller Name
          </label>
          <input
            type="text"
            name="sellerName"
            className="input input-bordered w-full"
           
            
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Seller Email
          </label>
          <input
            type="email"
            name="sellerEmail"
            className="input input-bordered w-full"
           
           
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Sub-category
          </label>
          <select
            name="subCategory"
            className="select select-bordered w-full"
            
          >
            <option value="">Select Sub-category</option>
            <option value="Bus Toys">Bus Toys</option>
            <option value="Truck Toys">Truck Toys</option>
            <option value="Car Toys">Car Toys</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Price
          </label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            
            
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Rating
          </label>
          <input
            type=""
            name="rating"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Available Quantity
          </label>
          <input
            type="number"
            name="availableQuantity"
            className="input input-bordered w-full"
          
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium">
            Detail Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows={4}
           
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToys;
