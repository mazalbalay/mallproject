import React from 'react';
import data from './Data';
import EditProduct from './EditProduct';

export const EditProductScreen = () => {
    const productId = data.fint((product) => product._id === match.params.id)
  return (
    <div>
        <EditProduct productId={productId}/>
    </div>
  )
}
