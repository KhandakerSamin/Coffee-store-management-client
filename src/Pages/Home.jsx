
import { useLoaderData } from "react-router-dom";
import AllCoffee from "../Components/AllCoffee";
import Banner from "../Components/Banner";
import Follow from "../Components/Follow";
import { useState } from "react";

const Home = () => {
    // Assuming you have fetched the "coffees" data
    const loadedcoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedcoffees)
    // console.log(coffees);

    return (
        <div>
            <Banner />
            <AllCoffee 
            coffees={coffees} 
            setCoffees={setCoffees}
            />
            <Follow />
        </div>
    );
};

export default Home;
