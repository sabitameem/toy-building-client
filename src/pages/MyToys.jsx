import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const MyToys = () => {
    const {user}=useContext(AuthContext)
    const [myToys,setMyToys]=useState([])
    const navigate =useNavigate()

   const url =`https://toy-building-server.vercel.app/addAToy?email=${user?.email}`
   useEffect(()=>{
           fetch(url)
           .then(res => res.json())
           .then(data => {
            if(!data.error){
                setMyToys(data)
            }
            else{
                // logout and then navigate
                navigate('/');
            }
        })

   },[url,navigate])


    return (
        <div>
            myToys {myToys.length}
        </div>
    );
};

export default MyToys;