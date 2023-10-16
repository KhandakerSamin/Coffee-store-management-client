
import { Link, useLoaderData } from 'react-router-dom';
import bgImg from '../assets/images/more/11.png'
import Swal from 'sweetalert2';
const UpdateCoffee = () => {
    const divStyle = {
        backgroundImage: `url(${bgImg})`,
    };

    const coffee = useLoaderData()
    const { _id, name, quantity, chef, supplier, price, category, details, photo } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, supplier, category, chef, price, details, photo }
        console.log(updatedCoffee);

        fetch(`https://coffee-store-server-gamma-amber.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                }
            })
    }

    return (
        <div className="relative mb-16">
            <div className="mb-12 ml-4 mt-6">
                <Link to='/'><button className=' text-3xl'> Go to home</button></Link>
            </div>

            <div className="bg-cover flex justify-center items-center  h-full" style={divStyle}>

                <div className='w-2/3 h-5/6 bg-[#F4F3F0] rounded-md'>
                    <h1 className='text-4xl mt-12 mb-5 text-[#374151] text-center '>Update Existing Coffee Details</h1>
                    <p className='text-center mx-24 font-serif'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className='mx-14'>
                        <div className=''>
                            <form onSubmit={handleUpdateCoffee} className='my-8'>
                                <div className='flex gap-x-10'>
                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name='name' defaultValue={name} className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Supplier</span>
                                        </label>
                                        <input type="text" placeholder="Supplier" defaultValue={supplier} name='supplier' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" placeholder="Category" defaultValue={category} name='category' className="input  w-full" required />
                                    </div>
                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Chef</span>
                                        </label>
                                        <input type="text" placeholder="Chef" name='chef' defaultValue={chef} className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price" name='price' defaultValue={price} className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" placeholder="Details" defaultValue={details} name='details' className="input  w-full" required />
                                    </div>
                                </div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name='photo' defaultValue={photo} className="input  w-full" required />
                                <div className='mb-10 mt-4'>
                                    <button type='submit' className='btn bg-[#D2B48C] text-[#331A15] text-base w-full  '>Update Coffee Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;