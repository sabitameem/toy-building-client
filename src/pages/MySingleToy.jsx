import { faTrashCan ,faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaBeer, FaDumpster } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MySingleToy = ({myToy,handleDelete,loading}) => {
    const {
        _id,
        picture,
        name,
        sellerName,
        sellerEmail,
        subCategory,
        price,
        rating,
        availableQuantity,
        description,
      }=myToy
 


    return (
        
            <tr>
                <td><div className="avatar">
                    <div className="rounded w-16 h-16">
                        {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div></td>
                <th>{name}</th>
                <th>{price}</th>
                <th>{rating}</th>
                <th>{availableQuantity}</th>
                <th>{subCategory}</th>
                <th>{description.slice(0,10)}...</th>
                
                
                <th>
               <Link to={`updateMyToy/${_id}`}>
               <FontAwesomeIcon  icon={faUpload} />
               </Link>
                
                </th>
                <th>
                    
                    <FontAwesomeIcon  onClick={() => handleDelete(_id)}  icon={faTrashCan} />
                </th>
            </tr>
            
            
       
    );
};

export default MySingleToy;