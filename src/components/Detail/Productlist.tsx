import { typeProduct } from 'Type/TypeInterface';
import React from 'react';
interface ProductProps {
  product: typeProduct | null;
}

const Productlist: React.FC<ProductProps> = ({ product }) => {
  return <div>Productlist</div>;
};

export default Productlist;
