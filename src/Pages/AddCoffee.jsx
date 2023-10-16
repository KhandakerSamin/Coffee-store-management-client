import { Link } from 'react-router-dom';
import bgImg from '../assets/images/more/11.png'
import Swal from 'sweetalert2';
const AddCoffee = () => {
    const divStyle = {
        backgroundImage: `url(${bgImg})`,
    };

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const price = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, supplier, category, chef, price, details, photo }
        console.log(newCoffee);

        fetch('https://coffee-store-server-gamma-amber.vercel.app/coffee', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                }
                form.reset();
            })
    }

    return (
        <div className="relative mb-16">
            <div className="mb-12 ml-4 mt-6">
                <Link to='/'><button className=' text-3xl'> Go to home</button></Link>
            </div>
            <div className="bg-cover  flex justify-center items-center  h-full" style={divStyle}>

                <div className='w-2/3 h-5/6 rounded-md bg-[#F4F3F0]'>
                    <h1 className='text-4xl mt-12 mb-5 text-[#374151] text-center '>Add New Coffee</h1>
                    <p className='text-center mx-24 font-serif'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className='mx-14'>
                        <div className=''>
                            <form onSubmit={handleAddCoffee} className='my-8'>
                                <div className='flex gap-x-10'>
                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name='name' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Supplier</span>
                                        </label>
                                        <input type="text" placeholder="Supplier" name='supplier' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" placeholder="Category" name='category' className="input  w-full" required />
                                    </div>
                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Chef</span>
                                        </label>
                                        <input type="text" placeholder="Chef" name='chef' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price" name='taste' className="input  w-full" required />
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" placeholder="Details" name='details' className="input  w-full" required />
                                    </div>
                                </div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name='photo' className="input  w-full" required />
                                <div className='mb-10 mt-4'>
                                    <button type='submit' className='btn bg-[#D2B48C] text-[#331A15] text-base w-full  '>Add Coffee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;
