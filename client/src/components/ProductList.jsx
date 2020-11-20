import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import ProductImage from './ProductImage';

const ProductList = () => {
  const { search, products, setProducts } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/products', { withCredentials: true })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProducts = products?.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {filteredProducts.map((product) => (
        <li>
          <ProductImage image={product.image} verified={product.verified} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
        </li>
      ))}
    </div>
  );
};

export default ProductList;
