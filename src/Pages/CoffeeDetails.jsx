import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {

    const { id } = useParams();
    const [info, setInfo] = useState({});
    const details = useLoaderData()
    // console.log(details);

    useEffect(() => {
        const d = details?.find(item => item._id == id);
        setInfo(d);
    }, [details, id]);


    return (
        <section className="w-full p-4 md:p-8 lg:p-10">
            <div className="mb-6 mt-6">
                <Link to='/'><button className=' text-3xl'> Go to home</button></Link>
            </div>
            <div className="flex justify-between mb-20 min-h-[400px] items-center bg-gray-200 rounded-lg mx-[220px] ">
                <div className="ml-[150px]">
                    <img className="w-[250px] h-[300px]" src={info.photo} alt="" />
                </div>
                <div className="mr-[220px]">
                    <h1 className="text-4xl font-bold mb-4">Niceties</h1>
                    <h1 className="text-2xl">Name: {info.name} </h1>
                    <h1 className="text-2xl">Chef: {info.chef} </h1>
                    <h1 className="text-2xl">Supplier: {info.supplier} </h1>
                    <h1 className="text-2xl">Price: {info.price} </h1>
                    <h1 className="text-2xl">Category: {info.category} </h1>
                    <h1 className="text-2xl">Details: {info.details} </h1>
                </div>
            </div>
        </section>
    );
};
export default CoffeeDetails;