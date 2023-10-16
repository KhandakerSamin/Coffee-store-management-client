import bannerImg from '../assets/images/more/33.png'
import img1 from '../assets/images/icons/1.png'
import img2 from '../assets/images/icons/2.png'
import img3 from '../assets/images/icons/3.png'
import img4 from '../assets/images/icons/4.png'
const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`
    }
    return (
        <div>
            <div className='h-[600px] opacity-90 px-[230px] w-full text-center ' style={bannerStyle}>
                    <h1 className='text-7xl mb-8 pt-52 text-white text-center'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className=' mb-5 px-10 font-serif text-xl text-white text-center '>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#E3B577] text-white text-xl rounded-sm hover:bg-transparent hover:border py-2 px-4'>Learn More</button>
            </div>
            <div className='bg-[#ECEAE3] h-52 w-full px-[230px] flex justify-between items-center gap-x-8'>
                <div className=''>
                    <img src={img1} alt="" />
                    <p className='text-3xl text-left'>Awesome Aroma</p>
                    <p className='text-left'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className=''>
                    <img src={img2} alt="" />
                    <p className='text-3xl text-left'>High Quality</p>
                    <p className='text-left'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className=''>
                    <img src={img3} alt="" />
                    <p className='text-3xl text-left'>Pure Grades</p>
                    <p className='text-left'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className=''>
                    <img src={img4} alt="" />
                    <p className='text-3xl text-left'>Proper Roasting</p>
                    <p className='text-left'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;