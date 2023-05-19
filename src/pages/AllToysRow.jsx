import React from 'react';

const AllToysRow = ({toy}) => {
    const {picture,name,sellerName,subCategory,price,rating,availableQuantity,description}=toy;
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
           <button className='btn btn-ghost'>View details</button>
        </th>
    </tr>
    );
};

export default AllToysRow;