import React from 'react';

const ProductView = (props) => (
    <h2>This is Product Number {props.match.params.productId}</h2>
);
  
export default ProductView;