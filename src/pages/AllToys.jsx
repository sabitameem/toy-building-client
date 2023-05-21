import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await fetch(
        "https://toy-building-server.vercel.app/addAToy"
      );
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              
              <th>Seller</th>
              <th>Name</th>
              <th>Sub-Catergory</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => <AllToysRow
            key={toy._id}
            toy={toy}
            ></AllToysRow> )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
