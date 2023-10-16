import { Link, useLocation, useNavigate } from "react-router-dom";
// import Img1 from '../assets/images/more/13.jpg';
// import Img2 from '../assets/images/more/7.png';
// import Img3 from '../assets/images/more/17.jpg';
import Img4 from '../assets/images/more/10.png';

import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";


const SignIn = () => {
    const footerStyle1 = {
        backgroundImage: `url(${Img4})`, // Use "backgroundImage" instead of "backgroundImage1"

    };

    const { signInUser, googleSingIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signInUser(email, password)
            .then(res => {
                console.log(res);
                console.log("Loged in successfully");
                // navigate after login 
                navigate(location?.state ? location.state : '/')
                // swal("Signed in!", "You Signed in Successfully!", "success");
                Swal.fire({
                    title: 'Welcome Sir ❤️',
                    text: 'You signed in successfully  !!',
                    // imageUrl: 'https://i.postimg.cc/SKy9kx4b/21.png',
                    imageUrl: 'https://i.postimg.cc/tgXBwbmY/2.png',
                    // imageUrl: 'https://i.postimg.cc/9QXxNVkz/6.png',
                    imageWidth: 300,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                })
                const user = {
                    email,
                    lastLoggedAt: res.user?.metadata?.lastSignInTime
                }
                // Update data 
                fetch('https://coffee-store-server-gamma-amber.vercel.app/user', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log("Updated");
                    })
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please give valid username or password !!',
                })
            })

    }

    const handleGoogleLogin = () => {
        googleSingIn()
            .then(res => {
                console.log(res);
                // navigate after login 
                navigate(location?.state ? location.state : '/')
                // swal("Signed in!", "You Signed in Successfully!", "success");
                Swal.fire({
                    title: 'Welcome Sir ❤️',
                    text: 'You signed in successfully  !!',
                    // imageUrl: 'https://i.postimg.cc/SKy9kx4b/21.png',
                    imageUrl: 'https://i.postimg.cc/tgXBwbmY/2.png',
                    // imageUrl: 'https://i.postimg.cc/9QXxNVkz/6.png',
                    imageWidth: 300,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className=" mx-4">
            <div className="mb-6 mt-6">
                <Link to='/'><button className=' text-3xl'> Go to home</button></Link>
            </div>
            <div style={footerStyle1} className="card  flex-shrink-0 rounded-lg w-full max-w-xl  mx-auto  my-20">
                <h1 className="text-center text-4xl font-semibold mt-12  text-black mx-16 pb-10">SignIn your account </h1>
                <div className="card-body mx-8">
                    <form onSubmit={handleSignIn} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your password" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6 w-full">
                            <button className="btn border-none  bg-[#331A15] normal-case text-lg font-bold w-full text-white hover:text-black " type="submit">Sign In</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-outline normal-case text-lg font-bold bg-gray-200 w-full mt-2 mb-2 border-none text-black">
                        <FcGoogle className="text-xl"></FcGoogle>
                        Continue with google
                    </button>
                    <div>
                        <h1 className="font-semibold text-base text-black mt-2  text-center mb-8 ">Dont’t Have An Account ? Please <Link to='/signUp' className="text-[#562EFE]">Sign Up</Link></h1>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};


export default SignIn;