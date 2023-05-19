// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import SingleToy from "./SingleToy";


// const MyToys = () => {
//     const {user}=useContext(AuthContext)
//     const [myToys,setMyToys]=useState([])
//     const navigate =useNavigate()

//    const url =`https://toy-building-server.vercel.app/addAToy?email=${user?.email}`
//    //const url = `https://toy-building-server.vercel.app/addAToy?email=${user?.email}`;

//    useEffect(()=>{
//            fetch(url,{
//             methods: "GET",
//             headers:{
//                 'content-type': 'application/json',
//             }
//            })
//            .then(res => res.json())
//            .then(data => {
//             if(!data.error){
//                 setMyToys(data)
//                 console.log(data)
//             }
//             else{
//                 // logout and then navigate
//                 navigate('/');
//             }
//         })

//    },[url,navigate])


//     return (
//         <div>
//             myToys {myToys.length}
//             <div className="my-container grid grid-cols-1 lg:grid-cols-3">
//             {myToys?.map(myToy=> <SingleToy
//             key={myToy._id}
//             myToy={myToy}
//             ></SingleToy>)}
//             </div>
//         </div>
//     );
// };

// export default MyToys;



import React from 'react';

const MyToys = () => {
    return (
        <div>
            hello
        </div>
    );
};

export default MyToys;