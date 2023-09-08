
const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const model = event.target.model.value;
        const image = event.target.image.value;
        const price = event.target.price.value;
        const brand = event.target.brand.value;
        let status;
        if (event.target.status.value == "available") {
            status = true;
        }
        else if (event.target.status.value == "stockout") {
            status = false;
        }
        const keyFeature = [event.target.key1.value, event.target.key2.value, event.target.key3.value, event.target.key4.value];
        const product = { model, image, price, brand, status, keyFeature }
        console.log(product);

    }
    return (
        <div>
            <form name='review-form' onSubmit={handleAddProduct} action="" className='grid grid-cols-1 gap-4 justify-items-center my-8 px-5'>

                <input type="text" name='model' placeholder='Model' className="input input-bordered input-success w-full " required />

                <input type="text" name='image' placeholder='Img link' className="input input-bordered input-success w-full my-0" required />

                <input type="number" name='price' placeholder='Price' className="input input-bordered input-success w-full" required />

                <select defaultValue={'Default'} name='brand' className="select select-success w-full">
                    <option value="Default" disabled>Select Brand</option>
                    <option value="amd">amd</option>
                    <option value="intel">intel</option>
                </select>

                <select defaultValue={'Default'} name='status' className="select select-success w-full">
                    <option value="Default" disabled>Availability</option>
                    <option value="available">Available</option>
                    <option value="stockout">Stock out</option>
                </select>

                <input type="text" name='key1' placeholder='Key Feature 1' className="input input-bordered input-success w-full my-0" required />

                <input type="text" name='key2' placeholder='Key Feature 2' className="input input-bordered input-success w-full my-0" required />

                <input type="text" name='key3' placeholder='Key Feature 3' className="input input-bordered input-success w-full my-0" required />

                <input type="text" name='key4' placeholder='Key Feature 4' className="input input-bordered input-success w-full my-0" required />





                <input type="submit" value="CONFIRM" className='btn btn-success w-full bg-red-300 text-xl' />


            </form>
        </div>
    );
};

export default AddProduct;