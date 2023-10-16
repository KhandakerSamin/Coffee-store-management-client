import logo from '../assets/images/more/logo1.png'
import footerImg from '../assets/images/more/13.jpg';
import footerImg2 from '../assets/images/more/24.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerStyle1 = {
        backgroundImage: `url(${footerImg})`, // Use "backgroundImage" instead of "backgroundImage1"

    };

    const footerStyle2 = {
        backgroundImage: `url(${footerImg2})`, // Use "backgroundImage" instead of "backgroundImage1"
    };

    return (
        <div>
            <div style={footerStyle1} className='w-full h-96 flex justify-center items-center'>
                <div className='flex flex-col md:flex-row items-center gap-x-72  w-2/3 '>
                    <div className='justify-start text-left w-1/2'>
                        <img src={logo} className='h-10 w-12 mt-6 mb-3' alt="" />
                        <h1 className='text-4xl my-3'>Espresso Emporium</h1>
                        <p className='font-serif'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className="grid grid-flow-col mt-2 mb-3 gap-x-8 max-w-fit">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                        <h1 className='text-4xl'>Get in Touch</h1>
                        <div className='flex flex-col mt-2'>
                            <p>+88 01533 333 333</p>
                            <p>info@gmail.com</p>
                            <p>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                    <div className='w-1/2 justify-end'>
                        <h1 className='text-4xl my-3'>Connect with Us</h1>
                        <input type="text" placeholder="Type here" className="input input-bordered mb-2 w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered mb-2 w-full max-w-xs" />
                        <textarea className="textarea textarea-lg w-full max-w-xs textarea-bordered" placeholder="Bio"></textarea>
                        <div className='flex justify-between items-center'>
                            <button className='boreder-2 font-bold mt-3 bg-none border-4 border-orange-950  px-4 text-[#331A15] py-2 normal-case bg-transparent text-xl rounded-3xl'>Send Message</button>
                            <Link to='/users'><button className='boreder-2 font-bold border-4 border-orange-950  px-4 text-[#331A15] py-2  mt-3 bg-none normal-case bg-transparent text-xl mr-6 rounded-3xl'>See Users</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={footerStyle2} className='w-full flex justify-center items-center h-10'>
                <h1 className='text-white text-xl text-center'>Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </div>
    );
};

export default Footer;
