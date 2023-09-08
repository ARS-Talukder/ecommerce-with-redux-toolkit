import axios from '../../utils/axios.config';

export const fetchProducts = async () => {
    // const res = await fetch("http://localhost:5000/products");
    // const data = await res.json();
    const data = await axios.get("/products");
    return data.data;
}

// export const postProduct=async()=>{
//     await axios.post("/product",produc)
// }