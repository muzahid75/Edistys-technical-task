import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const SlideSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const swiper = new Swiper('#home-technology__carousel__container .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 50,
      centeredSlides: true,
      loop: false,
      on: {
        slideChange: (swiper) => setActiveIndex(swiper.activeIndex),
      },
    });

    setSwiperInstance(swiper);
    return () => swiper.destroy();
  }, []);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const buttons = [
    'Customer focused',
    'Agile and adaptable',
    'Compliance ready',
    'Secure and safe'
  ];

  return (
    <section>
      <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
        {buttons.map((text, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 text-blue-main ${activeIndex === index ? 'bg-blue-highlight' : 'hover:bg-[#F5FAFF]'
              }`}
          >
            {text}
          </button>
        ))}
      </div>

      {/* Keep the existing carousel container structure */}
      <div id="home-technology__carousel__container" className="relative">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events max-md:mt-[24px] swiper-backface-hidden"
          style={{ filter: "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)" }}>
          <div className="swiper-wrapper">
            {/* Your existing slide content */}
            <div className="swiper-slide">
              <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
                <section className="lg:space-y-md space-y-sm">
                  <header className="lg:space-y-md space-y-xs">
                    <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">Secure and safe</h6>
                    <h3 className="undefined text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">Highly secure and safe</h3>
                  </header>
                  <figure className="md:hidden h-[150px]">
                    <img
                      srcSet="
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=320&amp;auto=format     320w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&amp;auto=format     640w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=960&amp;auto=format     960w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=1280&amp;auto=format   1280w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=1600&amp;auto=format   1600w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=1920&amp;auto=format   1920w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=2240&amp;auto=format   2240w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=2560&amp;auto=format   2560w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=2880&amp;auto=format   2880w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=3200&amp;auto=format   3200w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=3520&amp;auto=format   3520w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=3840&amp;auto=format   3840w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=4160&amp;auto=format   4160w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=4480&amp;auto=format   4480w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=4800&amp;auto=format   4800w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=5120&amp;auto=format   5120w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=5440&amp;auto=format   5440w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=5760&amp;auto=format   5760w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=6080&amp;auto=format   6080w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=6400&amp;auto=format   6400w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=6720&amp;auto=format   6720w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=7040&amp;auto=format   7040w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=7360&amp;auto=format   7360w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=7680&amp;auto=format   7680w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8000&amp;auto=format   8000w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8320&amp;auto=format   8320w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8640&amp;auto=format   8640w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8960&amp;auto=format   8960w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=9280&amp;auto=format   9280w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=9600&amp;auto=format   9600w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=9920&amp;auto=format   9920w,
                                                https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=10000&amp;auto=format 10000w
                                            "
                      src="./Home Page _ AnyTech_files/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                      width="10000"
                      height="5000"
                      style={{}}
                      alt="Secure and Safe"
                      className="h-full w-full object-cover rounded-[8px]"
                      sizes="max-width(768px) 90vw, 0px"
                      loading="lazy"
                    />
                  </figure>
                  <div>
                    <div className="text-body-1">
                      <p>
                        Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on
                        20 years of technical expertise.
                      </p>
                    </div>
                    <div className="text-body-1">
                      <p>
                        <br />
                        Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.
                      </p>
                    </div>
                  </div>
                </section>
                <figure className="hidden md:block h-[425px]">
                  <img
                    srcSet="
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=320&amp;auto=format     320w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&amp;auto=format     640w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=960&amp;auto=format     960w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=1280&amp;auto=format   1280w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=1600&amp;auto=format   1600w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=1920&amp;auto=format   1920w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=2240&amp;auto=format   2240w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=2560&amp;auto=format   2560w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=2880&amp;auto=format   2880w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=3200&amp;auto=format   3200w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=3520&amp;auto=format   3520w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=3840&amp;auto=format   3840w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=4160&amp;auto=format   4160w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=4480&amp;auto=format   4480w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=4800&amp;auto=format   4800w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=5120&amp;auto=format   5120w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=5440&amp;auto=format   5440w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=5760&amp;auto=format   5760w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=6080&amp;auto=format   6080w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=6400&amp;auto=format   6400w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=6720&amp;auto=format   6720w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=7040&amp;auto=format   7040w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=7360&amp;auto=format   7360w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=7680&amp;auto=format   7680w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8000&amp;auto=format   8000w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8320&amp;auto=format   8320w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8640&amp;auto=format   8640w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=8960&amp;auto=format   8960w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=9280&amp;auto=format   9280w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=9600&amp;auto=format   9600w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=9920&amp;auto=format   9920w,
                                            https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=10000&amp;auto=format 10000w
                                        "
                    src="./Home Page _ AnyTech_files/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg"
                    width="10000"
                    height="5000"
                    style={{}}
                    alt="Secure and Safe"
                    className="h-full w-full object-cover rounded-[16px]"
                    sizes="35vw"
                    loading="lazy"
                  />
                </figure>
              </article>
            </div>
            <div className="swiper-slide"><article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
              <section className="lg:space-y-md space-y-sm">
                <header className="lg:space-y-md space-y-xs">
                  <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">Compliance ready</h6>
                  <h3 className="undefined text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">Manage compliance with ease</h3>
                </header>
                <figure className="md:hidden h-[150px]">
                  <img
                    srcSet="
                                                https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=320&amp;auto=format   320w,
                                                https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&amp;auto=format   640w,
                                                https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&amp;auto=format   960w,
                                                https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=1280&amp;auto=format 1280w,
                                                https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=1509&amp;auto=format 1509w
                                            "
                    src="./Home Page _ AnyTech_files/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png"
                    width="1509"
                    height="1284"
                    style={{}}
                    alt="Compliance Ready"
                    className="h-full w-full object-cover rounded-[8px]"
                    sizes="max-width(768px) 90vw, 0px"
                    loading="lazy"
                  />
                </figure>
                <div>
                  <div className="text-body-1">
                    <p>
                      <strong>
                        Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.
                      </strong>
                    </p>
                  </div>
                  <div className="text-body-1"><p style={{ paddingBottom: "1em" }}
                  ></p></div>
                  <div className="text-body-1">
                    <p>
                      Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment
                      systems.
                    </p>
                  </div>
                </div>
              </section>
              <figure className="hidden md:block h-[425px]">
                <img
                  srcSet="
                                            https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=320&amp;auto=format   320w,
                                            https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&amp;auto=format   640w,
                                            https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&amp;auto=format   960w,
                                            https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=1280&amp;auto=format 1280w,
                                            https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=1509&amp;auto=format 1509w
                                        "
                  src="./Home Page _ AnyTech_files/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png"
                  width="1509"
                  height="1284"
                  style={{}}
                  alt="Compliance Ready"
                  className="h-full w-full object-cover rounded-[16px]"
                  sizes="35vw"
                  loading="lazy"
                />
              </figure>
            </article></div>
            
            <div className="swiper-slide"><article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
              <section className="lg:space-y-md space-y-sm">
                <header className="lg:space-y-md space-y-xs">
                  <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">Agile and adaptable</h6>
                  <h3 className="undefined text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">Agile and adaptable for growth</h3>
                </header>
                <figure className="md:hidden h-[150px]">
                  <img
                    srcSet="
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=320&amp;auto=format   320w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&amp;auto=format   640w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&amp;auto=format   960w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=1280&amp;auto=format 1280w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=1600&amp;auto=format 1600w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=1920&amp;auto=format 1920w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=2240&amp;auto=format 2240w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=2560&amp;auto=format 2560w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=2880&amp;auto=format 2880w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=3200&amp;auto=format 3200w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=3520&amp;auto=format 3520w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=3840&amp;auto=format 3840w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=4160&amp;auto=format 4160w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=4480&amp;auto=format 4480w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=4800&amp;auto=format 4800w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=5120&amp;auto=format 5120w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=5440&amp;auto=format 5440w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=5760&amp;auto=format 5760w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=6080&amp;auto=format 6080w,
                                                https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=6400&amp;auto=format 6400w
                                            "
                    src="./Home Page _ AnyTech_files/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg"
                    width="6400"
                    height="4800"
                    style={{}}
                    alt="Agile and Adaptable"
                    className="h-full w-full object-cover rounded-[8px]"
                    sizes="max-width(768px) 90vw, 0px"
                    loading="lazy"
                  />
                </figure>
                <div>
                  <div className="text-body-1">
                    <p>
                      <strong>
                        Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security,
                        compliance and performance.
                      </strong>
                    </p>
                  </div>
                  <div className="text-body-1">
                    <p>
                      <br />
                      Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.
                    </p>
                  </div>
                </div>
              </section>
              <figure className="hidden md:block h-[425px]">
                <img
                  srcSet="
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=320&amp;auto=format   320w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&amp;auto=format   640w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&amp;auto=format   960w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=1280&amp;auto=format 1280w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=1600&amp;auto=format 1600w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=1920&amp;auto=format 1920w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=2240&amp;auto=format 2240w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=2560&amp;auto=format 2560w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=2880&amp;auto=format 2880w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=3200&amp;auto=format 3200w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=3520&amp;auto=format 3520w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=3840&amp;auto=format 3840w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=4160&amp;auto=format 4160w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=4480&amp;auto=format 4480w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=4800&amp;auto=format 4800w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=5120&amp;auto=format 5120w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=5440&amp;auto=format 5440w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=5760&amp;auto=format 5760w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=6080&amp;auto=format 6080w,
                                            https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=6400&amp;auto=format 6400w
                                        "
                  src="./Home Page _ AnyTech_files/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg"
                  width="6400"
                  height="4800"
                  style={{}}
                  alt="Agile and Adaptable"
                  className="h-full w-full object-cover rounded-[16px]"
                  sizes="35vw"
                  loading="lazy"
                />
              </figure>
            </article></div>
            
            <div className="swiper-slide"><article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
              <section className="lg:space-y-md space-y-sm">
                <header className="lg:space-y-md space-y-xs">
                  <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">Customer focused</h6>
                  <h3 className="undefined text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">Purpose-built financial services</h3>
                </header>
                <figure className="md:hidden h-[150px]">
                  <img
                    srcSet="
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&amp;auto=format   320w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&amp;auto=format   640w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&amp;auto=format   960w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=1280&amp;auto=format 1280w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=1600&amp;auto=format 1600w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=1920&amp;auto=format 1920w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=2240&amp;auto=format 2240w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=2560&amp;auto=format 2560w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=2880&amp;auto=format 2880w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=3200&amp;auto=format 3200w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=3520&amp;auto=format 3520w,
                                                https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=3672&amp;auto=format 3672w
                                            "
                    src="./Home Page _ AnyTech_files/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
                    width="3672"
                    height="2712"
                    style={{}}
                    alt="Customer Focused"
                    className="h-full w-full object-cover rounded-[8px]"
                    sizes="max-width(768px) 90vw, 0px"
                    loading="lazy"
                  />
                </figure>
                <div>
                  <div className="text-body-1">
                    <p>
                      <strong>
                        Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.
                      </strong>
                    </p>
                  </div>
                  <div className="text-body-1">
                    <p>
                      <br />
                      Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.
                    </p>
                  </div>
                </div>
              </section>
              <figure className="hidden md:block h-[425px]">
                <img
                  srcSet="
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&amp;auto=format   320w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&amp;auto=format   640w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&amp;auto=format   960w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=1280&amp;auto=format 1280w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=1600&amp;auto=format 1600w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=1920&amp;auto=format 1920w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=2240&amp;auto=format 2240w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=2560&amp;auto=format 2560w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=2880&amp;auto=format 2880w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=3200&amp;auto=format 3200w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=3520&amp;auto=format 3520w,
                                            https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=3672&amp;auto=format 3672w
                                        "
                  src="./Home Page _ AnyTech_files/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
                  width="3672"
                  height="2712"
                  style={{}}
                  alt="Customer Focused"
                  className="h-full w-full object-cover rounded-[16px]"
                  sizes="35vw"
                  loading="lazy"
                />
              </figure>
            </article></div>
            
          </div>
        </div>
        <div style={{ "--bullet-bg": "#d9ebff" }}
          className="swiper-pagination undefined svelte-17j2dom"></div>
      </div>
    </section>
  );
};

export default SlideSection;