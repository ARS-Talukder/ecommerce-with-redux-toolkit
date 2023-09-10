import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleUpdateSuccess, updateProduct } from "../../features/products/productsSlice";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const UpdateProduct = () => {
    const location = useLocation();
    const { product } = location.state;

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { isLoading, updateSuccess, isError, error } = state.products;
    useEffect(() => {
        if (isLoading) {
            toast.loading('Updating...', { id: "updateProduct" });
        }
        if (!isLoading && updateSuccess) {
            toast.success('Updated Successfully', { id: "updateProduct" });
            dispatch(toggleUpdateSuccess());
        }
        if (!isLoading && isError) {
            toast.error(error, { id: "updateProduct" })
        }
    }, [isLoading, updateSuccess, isError, error, dispatch])

    const { _id, model, price, status } = product;
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let { model, price, status } = data;
        status = status === "available" ? true : false;
        const updateData = { _id, model, price, status };
        dispatch(updateProduct(updateData));
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="model">Model</label>
                <input type="text" className="input input-bordered input-success w-full my-1" name='model' defaultValue={model} id="model" {...register("model", { required: true })} />

                <label htmlFor="price">Price</label>
                <input type="number" className="input input-bordered input-success w-full my-1" name='price' defaultValue={price} id="price" {...register("price", { required: true })} />

                <label htmlFor="status">Status</label>
                <select name='status' className="input input-bordered input-success w-full my-1" defaultValue={status ? "available" : "stockout"} id="status" {...register("status", { required: true })}>
                    <option value="available">Available</option>
                    <option value="stockout">Stock out</option>
                </select>

                <input type="submit" className='btn btn-success w-full bg-red-300 text-xl my-1' value="UPDATE" />
            </form>
        </div>
    );
};

export default UpdateProduct;