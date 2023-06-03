
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import mz from '../assets/mz.mp4'

// import required modules
import { Autoplay } from 'swiper';

export default function Video() {
    return (
        <div className='lg:my-0 my-40'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='main'>


                        <div className="text-center">
                            <h1 className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 z-50 font-serif text-[#ebeff3] text-xl md:text-2xl border-2 p-2">Purchase a Course</h1>
                            <h4 className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 z-50 font-serif text-[#ebeff3] text-xl md:text-2xl border-2 p-2 hidden md:block">Learn More</h4>

                        </div>



                        <video autoPlay loop muted className="relative" src={mz} />


                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}