import { useDispatch, useSelector } from "react-redux";
import Products from "../Shared/Products";
import { useEffect } from "react";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";
import { getProducts } from "../../features/products/productsSlice";

const Home = () => {
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { stock, brands } = state.filter;
    const { products, isLoading } = state.products;
    // console.log(state.products);
    const activeClass = "btn-sm rounded-lg font-bold bg-blue-600 text-white";
    let content;
    if (isLoading) {
        return content = "LOADING..."
    }
    if (products.length) {
        content = products.map(product => <Products key={product._id} product={product}></Products>)
    }
    if (products.length && (stock || brands.length)) {
        content = products
            .filter((product) => {
                if (stock) {
                    return product.status === true
                }
                return product
            })
            .filter((product) => {
                if (brands.length) {
                    return brands.includes(product.brand)
                }
                return product
            })
            .map((product) => <Products key={product._id} product={product}></Products>)

    }

    return (
        <div>
            <div className="flex justify-end mb-2">
                <div className="mx-4">
                    <button className={stock ? `${activeClass}` : "btn-sm rounded-lg font-bold bg-gray-300"}
                        onClick={() => dispatch(toggle())}>
                        In Stock
                    </button>
                </div>
                <div className="mx-4">
                    <button className={brands.includes("amd") ? `${activeClass}` : "btn-sm rounded-lg font-bold bg-gray-300"}
                        onClick={() => dispatch(toggleBrands("amd"))}>
                        AMD
                    </button>
                </div>
                <div className="mx-4">
                    <button className={brands.includes("intel") ? `${activeClass}` : "btn-sm rounded-lg font-bold bg-gray-300"}
                        onClick={() => dispatch(toggleBrands("intel"))}>
                        Intel
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {
                    content
                }
            </div>
        </div>
    );
};

export default Home;