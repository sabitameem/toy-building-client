
import useTitle from "../../hook/useTitle";
import Animation from "./Animation";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact/Contact";
import Extra from "./Extra";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial/Testimonial";


const HomePage = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Animation></Animation>
            <Gallery></Gallery>
           
             


             {/* testimonial section */}
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto overflow-hidden'>
                <div className='mb-12'>
                    <h2 className='text-center text-2xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom">What Our Customers Say</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                        Read what our valued customers have to say about their experience with our toys. From endless joy to cherished memories, their testimonials reflect the quality and delight our toys bring into their lives. Join our community of happy customers today!
                    </p>
                </div>
                {/* testimonia components */}
                <Testimonial></Testimonial>
                {/* <Testimonial /> */}
            </section>

             <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
                <div className='mb-12'>
                    <h2 className='text-center text-3xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom">Get in Touch</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                        Have any questions or feedback? We'd love to hear from you! Reach out to us through the contact form below or contact our friendly customer support team directly. We're here to assist you and provide the best toy shopping experience possible.
                    </p>
                </div>
                <Contact></Contact>
            </section>
            <Extra></Extra>
        </div>
    );
};

export default HomePage;