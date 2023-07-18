'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Transition } from '@headlessui/react';

const coaches = [
  {
    id: 0,
    name: 'Sandy Golder',
    position: 'Coach',
  },
  {
    id: 1,
    name: 'Tara Thompson',
    position: 'Coach',
  },
  {
    id: 2,
    name: 'Steph Wicks',
    position: 'Coach',
  },
  {
    id: 3,
    name: "Liz O'Connell",
    position: 'Coach',
  },
];

const CoachSlider = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 50);
  }, []);

  return (
    <>
      <div className="relative !h-[278px]">
        {loading && (
          <Swiper
            modules={[Autoplay, Pagination]}
            initialSlide={1}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            allowTouchMove={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            slideToClickedSlide={true}
            onSlideChange={(swiper) => setActiveIndex(swiper?.realIndex)}
            breakpoints={{
              0: {
                centeredSlides: true,
                slidesPerView: 2,
                slidesOffsetBefore: 0,
                loop: true,
              },
              768: {
                centeredSlides: true,
                slidesPerView: 3.75,
                spaceBetween: 16,
              },
            }}
            className="coaches-slider !overflow-visible !-mx-10"
          >
            {coaches.map((item) => (
              <SwiperSlide
                key={item.id}
                className="relative !flex center items-center"
              >
                <div className="relative !shrink-0 w-full object-contain">
                  <video
                    className="w-full h-full rounded-3xl !overflow-hidden"
                    loop
                    autoPlay
                    muted
                    playsInline
                  >
                    <source
                      src={`/assets/coaches/${item.id + 1}.mp4`}
                      type="video/mp4"
                    />
                    {/* <source src='movie.ogg' type='video/ogg' /> */}
                    Your browser does not support the video tag.
                  </video>
                  {activeIndex === item.id && (
                    <Transition
                      show={activeIndex === item.id}
                      enter="transition duration-500"
                      enterFrom="-translate-y-10 opacity-0"
                      enterTo="translate-y-0 opacity-100"
                      leave="transition duration-500"
                      leaveFrom="translate-y-0 opacity-100"
                      leaveTo="translate-y-4 opacity-0"
                      className="absolute bottom-0 left-0 w-full text-white before:absolute before:inset-0 before:bg-coach-shadow before:rounded-3xl whitespace-nowrap pt-8 p-5 pr-14 "
                    >
                      <h3 className="relative text-xl tracking-tight font-bold leading-6 z-10">
                        {item.name}
                      </h3>
                      <p className="relative opacity-70 z-10">Coach</p>
                    </Transition>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default CoachSlider;
