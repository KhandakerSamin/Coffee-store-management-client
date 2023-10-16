import { Link } from 'react-router-dom';
import navImg from '../assets/images/more/15.jpg';
import logo from '../assets/images/more/logo1.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import img from '../assets/images/user.png'

const Navbar = () => {
    const divStyle = {
        backgroundImage: `url(${navImg})`,
    };

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
        // swal("Signed Out!", "Signed Out Successfully!", "success");
    }


    return (
        <div className="h-20 w-full relative">
            <div className="bg-cover bg-center pt-2  h-full" style={divStyle}>
                <div className='flex justify-between items-center'>
                    <div className='flex ml-10 gap-x-8 mb-2 justify-center items-center'>
                        <img className='h-14 w-16 mb-2' src={logo} alt="" />
                        <h1 className='text-5xl text-white'>Espresso Emporium</h1>
                    </div>
                    <div className='mr-10 flex justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            {user && (
                                <p className='font-semibold text-white hidden md:block mr-3'>
                                    {user.displayName || "User"} {/* Use "User" as a fallback */}
                                </p>
                            )}
                            {user ?
                                <img className='rounded-full w-[35px] md:w-[40px] h-[35px] md:h-[40px] mr-5' src={user.photoURL} alt={img} />
                                :
                                // <img className='w-10 h-10 rounded-full mr-4' src={img} alt="" />
                                <></>
                            }
                        </div>

                        <div>
                            {
                                user ? (
                                    <Link to='/'><button onClick={handleSignOut} className='text-2xl text-white'>Sign Out</button></Link>
                                ) : (
                                    <Link to='/signIn'><button className='text-2xl text-white'>SignIn</button></Link>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
