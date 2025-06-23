import React, { useRef, useEffect, useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonials } from '../data';
import 'swiper/css/navigation';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { Navigation } from 'swiper/modules';
import { PiStarFourFill } from 'react-icons/pi';

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        swiperRef.current.swiper.update();
      }, 100);
    }
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <section className="mx-auto container px-8 py-12">
        <div className="heading mx-auto container py-12">
          <SectionHeading
            text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
            heading="Testimonials"
          />
        </div>
        <div className="bg-[#191A23] text-white  py-12 my-12 rounded-3xl">
          <div className="overflow-hidden px-8">
            <Swiper
              ref={swiperRef}
              slidesPerView={1.5}
              centeredSlides={true}
              spaceBetween={30}
              loop={false}
              modules={[Navigation]}
              onSlideChange={handleSlideChange}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              className="testimonial-swiper"
              breakpoints={{
                0: { slidesPerView: 1, centeredSlides: false },
                576: { slidesPerView: 1, centeredSlides: false },
                768: { slidesPerView: 1.2, centeredSlides: true },
                1024: { slidesPerView: 1.5, centeredSlides: true },
              }}
            >
              {testimonials.map(({ id, review, author, position }) => (
                <SwiperSlide
                  key={id}
                  className="border border-[#B9FF66] p-5 rounded-3xl"
                >
                  <div className="testimonial-box text-white">
                    <p className="text-lg leading-relaxed mb-6">{review}</p>
                    <div>
                      <p className="text-[#B9FF66] font-bold">{author}</p>
                      <p className="text-sm">{position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center items-center gap-4 pt-20">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full flex items-center justify-center hover:text-[#B9FF66] transition-all duration-200 cursor-pointer">
              <FaArrowLeft />
            </button>
            {[...Array(testimonials.length)].map((_, i) => (
              <PiStarFourFill
                key={i}
                className={
                  i === activeIndex ? 'text-[#B9FF66]' : 'text-[#F3F3F3]'
                }
              />
            ))}
            <button className="swiper-button-next-custom w-12 h-12 rounded-full flex items-center justify-center hover:text-[#B9FF66] transition-all duration-200 cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
