import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MySingleToy from './MySingleToy';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../hook/useTitle';

const MyToys = () => {
  
    const {user}=useContext(AuthContext)
    const [myToys,setMyToys]=useState([])
    const [loading,setLoading] = useState(false)

    useTitle('My toys')
    const url=`https://toy-building-server.vercel.app/addAToy?sellerEmail=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setMyToys(data)})
            
    },[])

    if(loading){
        return <p>loading</p>
    }

    const handleDelete = id => {
         const proceed = confirm('Are You sure you want to delete');
         if (proceed) {
             fetch(`https://toy-building-server.vercel.app/addAToy/${id}`, {
                 method: 'DELETE'
             })
                 .then(res => res.json())
                .then(data => {
                    setLoading(!loading)
                     console.log(data);
                    if (data.deletedCount > 0) {
                        // toast('🦄 Successfully deleted', {
                        //     position: "top-right",
                        //     autoClose: 5000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        //     theme: "light",
                        //     });
                         const remaining = myToys.filter(myToy => myToy._id !== id);
                         console.log(id)
                         console.log(remaining)
                         setLoading(false)
                         setMyToys(remaining);
                     }
                 })
         }
    }

    return (
        <div>
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
            
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                    <tr>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map(myToy=>
                            <MySingleToy
                            key={myToy._id}
                            myToy={myToy}
                            handleDelete={handleDelete}
                            loading={loading}
                            ></MySingleToy>
                            )
                    }
                </tbody>
              </table>

            </div>
        </div>
    );
};

export default MyToys;