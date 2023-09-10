import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getProducts } from "../../features/products/productsSlice";
import { toast } from "react-hot-toast";

const ProductList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const state = useSelector((state) => state);
    const { products, isLoading, deleteSuccess } = state.products;
    
    useEffect(() => {
        if (!isLoading && deleteSuccess) {
            toast.success("Deleted Successfully")
        }
    }, [deleteSuccess, isLoading])

    let content;
    if (isLoading) {
        return content = "LOADING..."
    }
    else if (products.length) {
        content = products?.map((product, index) => <Product key={product._id} index={index} product={product}></Product>)
    }


    // console.log(products);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>In Stock</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            content
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;