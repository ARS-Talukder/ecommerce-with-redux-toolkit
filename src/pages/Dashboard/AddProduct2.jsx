import { useForm } from "react-hook-form";

const AddProduct2 = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        let { model, price, status } = data;
        status = event.target.status.value === "available" ? true : false;
        const product = { model, price, status };
        console.log(product);
        dispatch(addProduct(product));
        reset();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name='model' placeholder='Model' id="model" {...register("model", { required: true })} />

                <input type="number" name='price' placeholder='Price' id="price" {...register("price", { required: true })} />

                <select defaultValue={'Default'} name='status' id="status" {...register("status", { required: true })}>
                    <option value="Default" disabled>Availability</option>
                    <option value="available">Available</option>
                    <option value="stockout">Stock out</option>
                </select>

                <input type="submit" value="CONFIRM" />
            </form>
        </div >
    );
};

export default AddProduct2;