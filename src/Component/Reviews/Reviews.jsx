import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useEffect, useState } from 'react';
const Reviews = () => {
    const [allReviews, setAllReviews] = useState()


    useEffect(() => {
        fetch('https://backend-server-seven.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])


    // console.log(allReviews);
    const half = Math.ceil(allReviews?.length / 2)
    const firstHalfReviews = allReviews?.slice(0, half)
    const secondHalfReviews = allReviews?.slice(half)
    // console.log(firstHalfReviews, secondHalfReviews);

    return (
        <div className='pt-5 mx-5 ' >
            <h1 className='text-4xl text-center mt-10 mb-6 font-extrabold'>Our Clints Reviews</h1>
            <Swiper
                
                spaceBetween={20}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper "

                
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1080: {
                        slidesPerView: 3
                    }
                }}
            >
                {
                    firstHalfReviews?.map((review, index) => <SwiperSlide key={index} >
                        <div className="card  bg-base-100 shadow border mb-6 ">
                            <div className="card-body">
                                <p>{review.opinion}</p>
                                <div className="card-actions flex items-center">
                                    <img src={review.customer_image} className='rounded-full w-14 h-14' />
                                    <div>
                                        <h2 className='font-medium'>{review.customer_name}</h2>
                                        <p className='text-xs'>{review.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
            <Swiper
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1080: {
                        slidesPerView: 3
                    }
                }}
                loop={true}
                speed={3300}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    secondHalfReviews?.map((review, index) => <SwiperSlide key={index} >
                        <div className="card  bg-base-100 shadow border mb-6">
                            <div className="card-body">
                                <p>{review.opinion}</p>
                                <div className="card-actions flex items-center">
                                    <img src={review.customer_image} className='rounded-full w-14 h-14' />
                                    <div>
                                        <h2 className='font-medium'>{review.customer_name}</h2>
                                        <p className='text-xs'>{review.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

Reviews.propTypes = {
    allReviews: PropTypes.array
}
export default Reviews;