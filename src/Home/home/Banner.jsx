import toy from '../../../public/24301-windmill-toy.json';
import Lottie from 'lottie-react'
const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-purple-400  to-red-400'>
            <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
            <div  className="lg:w-1/2 mb-10 lg:mb-0 lg:mr-10" >
            
            <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-red-300">Welcome</span> <br />
            to <span className="text-yellow-300">Toy Building</span>
          </h1>
                <p className="text-xl text-white">
            Experience the <span className="text-yellow-300">Ultimate</span> online toy shopping brought to you by <span className="text-yellow-300">Toy Building</span>. Let your imagination run wild and discover a world of fun and excitement!
          </p>
            </div>
            {/* lottie animation */}
            <div className='relative lg:w-1/2 '>
                 <div className='w-full lg:w-4/5 lg:ml-auto'>
                     <Lottie animationData={toy} loop={true}></Lottie>
                 </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;


//bg-gradient-to-r from-purple-400  to-red-400