import { Link, useLocation, useNavigate } from "react-router-dom";
// import Img1 from '../assets/images/more/13.jpg';
// import Img2 from '../assets/images/more/7.png';
// import Img3 from '../assets/images/more/17.jpg';
import Img4 from '../assets/images/more/10.png';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const SignUp = () => {
    const footerStyle1 = {
        backgroundImage: `url(${Img4})`,

    };

    const { createUser, googleSingIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = e => {

        e.preventDefault();
        // console.log(e.currentTarget);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // Password Validation  : 
        // // Check if the input has less than 6 characters
        // if (password.length < 6) {
        //     return swal("Oops!!", "Total length of password should be at least 6 characters", "error");
        // }

        // // Check if the input contains at least one capital letter
        // if (!/[A-Z]/.test(password)) {
        //     return swal("Oops!!", "Include at least one capital letter", "error");
        // }

        // // Check if the input contains any special characters
        // if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
        //     return swal("Oops!!", "Include at least one special character", "error");
        // }

        // create user
        createUser(email, password)
            .then(res => {
                console.log(res);
                const createdAt = res.user?.metadata?.creationTime;
                const lastLoggedAt = res.user?.metadata?.lastSignInTime;
                const user = { email , createdAt , lastLoggedAt };
                console.log(email, password);
                fetch('https://coffee-store-server-gamma-amber.vercel.app/user',{
                    method:'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    // if(data.insertedId){
                    //     console.log("User Added Successfully !!");
                    // }
                    console.log(data);
                    Swal.fire({
                        title: 'Congratulation Sir ❤️',
                        text: 'You Created Accunt Successfully  !!',
                        // imageUrl: 'https://i.postimg.cc/SKy9kx4b/21.png',
                        // imageUrl: 'https://i.postimg.cc/tgXBwbmY/2.png',
                        imageUrl: 'https://i.postimg.cc/9QXxNVkz/6.png',
                        imageWidth: 300,
                        imageHeight: 250,
                        imageAlt: 'Custom image',
                      })
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleGoogleLogin = () => {
        googleSingIn()
        .then(res => {
            console.log(res);
            const createdAt = res.user?.metadata?.creationTime;
            const lastLoggedAt = res.user?.metadata?.lastSignInTime;
            const email = res.user?.email;
            const user = {createdAt , lastLoggedAt ,email };
            fetch('https://coffee-store-server-gamma-amber.vercel.app/user',{
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                // if(data.insertedId){
                //     console.log("User Added Successfully !!");
                // }
                console.log(data);
                Swal.fire({
                    title: 'Congratulation Sir ❤️',
                    text: 'You Created Accunt Successfully  !!',
                    // imageUrl: 'https://i.postimg.cc/SKy9kx4b/21.png',
                    // imageUrl: 'https://i.postimg.cc/tgXBwbmY/2.png',
                    imageUrl: 'https://i.postimg.cc/9QXxNVkz/6.png',
                    imageWidth: 300,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                  })
            })
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div className=" mx-4">
            <div className="mb-6 mt-6">
                <Link to='/'><button className=' text-3xl'> Go to home</button></Link>
            </div>
            <div style={footerStyle1} className="card  flex-shrink-0 rounded-lg w-full max-w-xl  mx-auto  my-20">
                <h1 className="text-center text-4xl font-semibold mt-12  text-black mx-16 pb-10">Please SignUp </h1>
                <div className="card-body mx-8">
                    <form onSubmit={handleSignUp} >
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
                            <button className="btn border-none  bg-[#331A15] normal-case text-lg font-bold w-full text-white hover:text-black " type="submit">Sign Up</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-outline normal-case text-lg font-bold bg-gray-200 w-full mt-2 mb-2 border-none text-black">
                        <FcGoogle className="text-xl"></FcGoogle>
                        Continue with google
                    </button>
                    <div>
                        <h1 className="font-semibold text-base text-center mb-8 mt-2">Already Have An Account ? <Link to='/signIn' className="text-[#562EFE]">Sign In</Link></h1>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;