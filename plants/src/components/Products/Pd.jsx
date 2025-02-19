import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

 function Pd() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found!</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-60 mx-auto my-4" />
      <p className="text-xl text-gray-600">${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}
export default Pd;