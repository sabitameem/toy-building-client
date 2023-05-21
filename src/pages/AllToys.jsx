import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../hook/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useTitle('All Toys')
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

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
      setFilteredToys(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const filteredData = toys.filter((toy) =>
        toy.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredToys(filteredData);
    } else {
      setFilteredToys(toys);
    }
  }, [toys, searchQuery]);

  return (
    <div className="">
      <div className="lg:flex justify-center">
      <h4 className="text-xl lg:text-4xl text-center font-semibold text-pink-400">All Of Toys are here</h4>
      <input
        type="text"
        placeholder="Search toys"
        value={searchQuery}
        className="input w-full input-sm lg:input-md input-bordered max-w-xs mb-3 mt-2 ms-12"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      

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
            {filteredToys.slice(0, 20).map((toy) => (
              <AllToysRow key={toy._id} toy={toy} />
            ))}

            {/* {toys.map((toy) => (
              <AllToysRow key={toy._id} toy={toy}></AllToysRow>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
