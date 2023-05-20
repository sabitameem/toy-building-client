import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toy}) => {
    const {_id,picture,name,sellerName,subCategory,price,rating,availableQuantity,description}=toy;
    return (
        <tr>
        
        <td>
            {sellerName}
        </td>
        <td>
        {name}
        </td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>${availableQuantity}</td>
        <th>
           <Link to={`/detailsToys/${_id}`}><button  className='btn btn-ghost'>View details</button></Link>
        </th>
    </tr>
    );
};

export default AllToysRow;