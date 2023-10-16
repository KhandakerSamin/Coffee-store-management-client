import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import errorImg from '../assets/images/404/404.gif'

const ErrorPage = () => {
    return (
        <div className='max-w-[1440px] mx-auto ' >
            <Navbar></Navbar>
            <div >
            <Link className='text-center text-4xl flex justify-center mt-10 mb-6' to='/'><button>Back to home</button></Link>
            <div className='flex  justify-center'>
                <img src={errorImg} alt="" />
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;