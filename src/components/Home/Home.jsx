import SlideSection from "../Swiper/Swiper";

const Home = () => {
    return (
        <>
            {/* hero  */}

            <div className=" ">
                <section
                    id="home-hero"
                    className=" lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]"
                >
                    <div className="max-w-[1200px] mx-auto container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
                        <div className="h-fit lg:flex-[65] xl:flex-[75]">
                            <header className="max-w-2xl lg:space-y-4 space-y-4 mb-8">
                                <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-6xl font-bold text-4xl font-montserrat text-white">
                                    Embrace the future of finance
                                </h1>
                                <h2 className="text-white max-w-[37rem] lg:mr-5 text-lg lg:text-xl font-montserrat opacity-90">
                                    Reimagine financial services with AnyTech&apos;s open
                                    platform, distributed banking solution that powers
                                    transformation
                                </h2>
                            </header>
                            <div className="flex lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0 w-full max-w-xl">
                                <a
                                    className="py-3 px-10 rounded-lg shadow-lg text-white flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
                                    href="#"
                                    aria-label="Contact AnyTech"
                                >
                                    <span>Reach Out to Us</span>
                                    <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M5.25 4.9L2.06 8.09c-.235.235-.586.235-.797 0L.726 7.57c-.21-.234-.21-.586 0-.797L3 4.52.726 2.25c-.21-.21-.21-.562 0-.797L1.266.914c.21-.21.562-.21.797 0L5.25 4.1c.21.234.21.586 0 .797z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="lg:flex-[35] xl:flex-[25] hidden lg:block"></div>
                    </div>

                    <div className="max-w-[1200px] mx-auto hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full pointer-events-none">
                        <figure className="h-[115%] w-[115%] object-cover transform -translate-x-[12%] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                            <img
                                srcSet="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=320&auto=format 320w,
                https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=640&auto=format 640w,
                https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=960&auto=format 960w,
                https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1280&auto=format 1280w,
                https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1600&auto=format 1600w"
                                src="./hero-image.jpg"
                                width="7952"
                                height="5304"
                                loading="eager"
                                decoding="async"
                                className="h-full w-full object-cover"
                                alt="Modern financial technology platform illustration"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, #87CEEB, transparent), url('data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYIB//EACIQAAEDBAICAwAAAAAAAAAAAAECAwQABQYREiEHURUiYf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8AfPDd6iybe04t9KVbU4tKj2BTLl9/huuw0Rll0LJHJA2En9qRsXyW5Wnk3Ce4B0aV71WhC+zl463MLy/qSVN76Vr3TOG+GLPSi4U+KmK2HH20q12CaKm9PlqeEgfGRDoa2SSaKm9PlqeEgfGRDoa2SSaKVlP/9k') 0% 0%/cover no-repeat",
                                }}
                            />
                        </figure>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-transparent"></div>
                    </div>

                    <svg
                        className="hidden lg:block absolute inset-0 h-full w-full"
                        viewBox="0 0 1920 929"
                        fill="none"
                        aria-hidden="true"
                    >
                        <g id="hero-background">
                            <g
                                style={{
                                    transform: "translate3d(0.54%, -1.25%, 0)",
                                    transition:
                                        "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                }}
                            >
                                <path
                                    d="M668 23.5V-382L-643 929H-237.5L668 23.5Z"
                                    fill="url(#paint0_linear)"
                                />
                                <path
                                    d="M1195-226V-592L13 590H378.6L1195-226Z"
                                    fill="url(#paint1_linear)"
                                />
                                <path
                                    d="M1011-629V-995L-171 187H194.6L1011-629Z"
                                    fill="url(#paint2_linear)"
                                />
                                <path
                                    d="M313-161V-357L-320 276H-124.2L313-161Z"
                                    fill="url(#paint3_linear)"
                                />
                                <path
                                    d="M396.6-357L-76 115.6H-42.2L396.6-323.2V-357Z"
                                    fill="url(#paint4_linear)"
                                />
                                <g filter="url(#filter0_f)">
                                    <path
                                        d="M52 428.7V347L-212 611H-130.3L52 428.7Z"
                                        fill="url(#paint5_linear)"
                                    />
                                </g>
                                <g filter="url(#filter1_f)">
                                    <path
                                        d="M146 50L-189 385H-165.1L146 73.9V50Z"
                                        fill="url(#paint6_linear)"
                                    />
                                </g>
                            </g>

                            <g
                                style={{
                                    transform: "translate3d(-0.32%, 0.75%, 0)",
                                    opacity: 1,
                                    transition:
                                        "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                }}
                            >
                                <path
                                    d="M1563 30.7V-85L1189 289h115.7L1563 30.7Z"
                                    fill="url(#paint7_linear)"
                                />
                                <path
                                    d="M2042 259.7V144L1668 518h115.7L2042 259.7Z"
                                    fill="url(#paint8_linear)"
                                />
                                <g filter="url(#filter2_f)">
                                    <path
                                        d="M761.1 577L540 798.1h15.8L761.1 560.2V577Z"
                                        fill="url(#paint9_linear)"
                                    />
                                </g>
                            </g>

                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="323"
                                    y1="439.8"
                                    x2="-1080.5"
                                    y2="-29.8"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3B82F6" /> {/* Blue 500 */}
                                    <stop offset="1" stopColor="#1D4ED8" /> {/* Blue 700 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint1_linear"
                                    x1="1110"
                                    y1="1152.9"
                                    x2="-290.8"
                                    y2="-132"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#60A5FA" /> {/* Blue 400 */}
                                    <stop offset="1" stopColor="#2563EB" /> {/* Blue 600 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint2_linear"
                                    x1="860"
                                    y1="915.5"
                                    x2="-580.5"
                                    y2="-72"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#93C5FD" /> {/* Blue 300 */}
                                    <stop offset="1" stopColor="#3B82F6" /> {/* Blue 500 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint3_linear"
                                    x1="717"
                                    y1="437.9"
                                    x2="-500"
                                    y2="179"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#BFDBFE" /> {/* Blue 200 */}
                                    <stop offset="1" stopColor="#60A5FA" /> {/* Blue 400 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint4_linear"
                                    x1="1607"
                                    y1="415"
                                    x2="-283.3"
                                    y2="264.6"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#DBEAFE" /> {/* Blue 100 */}
                                    <stop offset="1" stopColor="#93C5FD" /> {/* Blue 300 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint5_linear"
                                    x1="-3.3"
                                    y1="536.6"
                                    x2="-400.5"
                                    y2="204.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1D4ED8" /> {/* Blue 700 */}
                                    <stop offset="1" stopColor="#3B82F6" /> {/* Blue 500 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint6_linear"
                                    x1="146.5"
                                    y1="65.9"
                                    x2="-147.8"
                                    y2="93.6"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2563EB" /> {/* Blue 600 */}
                                    <stop offset="1" stopColor="#1D4ED8" /> {/* Blue 700 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint7_linear"
                                    x1="2484"
                                    y1="293.6"
                                    x2="1210.7"
                                    y2="297.6"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#60A5FA" /> {/* Blue 400 */}
                                    <stop offset="1" stopColor="#93C5FD" /> {/* Blue 300 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint8_linear"
                                    x1="1934"
                                    y1="376.4"
                                    x2="1477.3"
                                    y2="347.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3B82F6" /> {/* Blue 500 */}
                                    <stop offset="1" stopColor="#60A5FA" /> {/* Blue 400 */}
                                </linearGradient>

                                <linearGradient
                                    id="paint9_linear"
                                    x1="679.7"
                                    y1="788.5"
                                    x2="447.3"
                                    y2="456.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1D4ED8" /> {/* Blue 700 */}
                                    <stop offset="1" stopColor="#2563EB" /> {/* Blue 600 */}
                                </linearGradient>

                                <filter
                                    id="filter0_f"
                                    x="-479.1"
                                    y="-72.6"
                                    width="1210.2"
                                    height="772.2"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="69"
                                        result="effect1_foregroundBlur"
                                    />
                                </filter>
                                <filter
                                    id="filter1_f"
                                    x="-518.8"
                                    y="-232.7"
                                    width="1246.1"
                                    height="865.8"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="69"
                                        result="effect1_foregroundBlur"
                                    />
                                </filter>
                                <filter
                                    id="filter2_f"
                                    x="208.2"
                                    y="345.6"
                                    width="290.6"
                                    height="324.6"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="37"
                                        result="effect1_foregroundBlur"
                                    />
                                </filter>
                            </defs>
                        </g>
                    </svg>
                </section>
            </div>

            {/* powering  */}
            <div className="  mt-20">
                <section className="max-w-[1200px] mx-auto undefined grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
                    <div className="md:space-y-sm space-y-10">
                        <h6 className="undefined lg:text-head-6 text-2xl text-res-head-6 uppercase text-blue-500 font-Montserrat">
                            POWERING THE FUTURE OF FINANCE
                        </h6>
                        <h2 className="undefined whitespace-pre-line text-7xl font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
                            Uncovering new ways to delight customers
                        </h2>
                        <div className="!my-[60px] md:hidden block relative h-fit lg:text-clip">
                            <figure
                                className="w-[76%] mx-auto"
                                style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
                            >
                                <img
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=320&amp;auto=format   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&amp;auto=format   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&amp;auto=format   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&amp;auto=format 1124w
                    "
                                    src="./Home Page _ AnyTech_files/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png"
                                    width="1124"
                                    height="1364"
                                    style={{
                                        background:
                                            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAACE4AAAhOAFFljFgAAAGu0l...') 0% 0% / cover no-repeat",
                                    }}
                                    alt="POWERING THE FUTURE OF FINANCE"
                                    className="object-cover w-full h-full"
                                    sizes="(min-width: 1024px) 45vw, 95vw"
                                    loading="lazy"
                                />
                            </figure>
                            <div>
                                <figure
                                    className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
                                    style={{
                                        transform:
                                            "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                                        "--motion-translateX": "50%",
                                    }}
                                >
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&amp;auto=format 116w"
                                        src="./Home Page _ AnyTech_files/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg"
                                        width="116"
                                        height="115"
                                        style={{}}
                                        alt="anybass"
                                        sizes="115px"
                                        className="object-contain w-full h-full"
                                        loading="lazy"
                                    />
                                </figure>
                                <figure
                                    className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
                                    style={{
                                        transform: "translateY(var(--motion-translateY))",
                                    }}
                                >
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&amp;auto=format 89w"
                                        src="./Home Page _ AnyTech_files/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg"
                                        width="89"
                                        height="88"
                                        style={{}}
                                        alt="anypass"
                                        sizes="87px"
                                        className="object-contain w-full h-full"
                                        loading="lazy"
                                    />
                                </figure>
                                <figure
                                    className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
                                    style={{
                                        transform:
                                            "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                                        "--motion-translateX": "-50%",
                                    }}
                                >
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&amp;auto=format 74w"
                                        src="./Home Page _ AnyTech_files/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg"
                                        width="74"
                                        height="75"
                                        style={{}}
                                        className="object-contain w-full h-full"
                                        alt="anycaas"
                                        sizes="73px"
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                            <figure
                                className="absolute inset-0 w-full h-full -z-10"
                                style={{
                                    transform: "translate3d(0%, -5%, 0px)",
                                    transition:
                                        "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    animationFillMode: "forwards",
                                }}
                            ></figure>
                            <figure
                                className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                                style={{
                                    transform: "translate3d(0%, 2%, 0px)",
                                    transition:
                                        "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    animationFillMode: "forwards",
                                }}
                            >
                                <img
                                    className="object-cover w-full h-full overflow-visible"
                                    loading="lazy"
                                    src="./Home Page _ AnyTech_files/foreground.png"
                                    alt="foreground frame"
                                />
                            </figure>
                        </div>
                        <div className="lg:pt-2">
                            <div>
                                <div className="text-body-1">
                                    <p>
                                        <strong>
                                            AnyTech is revolutionising financial technology by
                                            introducing innovative and real-time transaction account
                                            processing capabilities, specifically designed for retail
                                            financial services.
                                        </strong>
                                    </p>
                                </div>
                                <div className="text-body-1">
                                    <p>
                                        <br />
                                        Our modern approach surpasses traditional banking and card
                                        processing systems, empowering you with the most advanced
                                        technology for lasting success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block relative h-fit lg:text-clip">
                        <figure
                            className="w-[76%] mx-auto"
                            style={{
                                boxShadow: "0px 23px 30px 0px #16437763",
                            }}
                        >
                            <img
                                srcSet="
                    https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=320&amp;auto=format   320w,
                    https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=640&amp;auto=format   640w,
                    https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&amp;auto=format   960w,
                    https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&amp;auto=format 1124w
                "
                                src="./Home Page _ AnyTech_files/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png"
                                width="1124"
                                height="1364"
                                style={{
                                    background:
                                        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAACE4AAAhOAFFljFgAAAGu0lEQVQ4jR2RZ1QTCAKE89+TYsFVyoamNGmiIIiyNgRUUA5QinV3ldVFEBFEZAEhoAtIUwm9SEdUQDQUqSGUQIiGgCKwnq737u5//iXfPf0xb+bHvHkzbwRNg5N8Q22vlJpeKY1D07SPK+maVtOreM/Y/DLTi6soFleZVX9EPr/EtHoZ6bsleuVqOsaV1A9OU9kno6JPhuDlzAI9s4t0Tql4MamiW77Aq7kl+lWrDKr/Ymh+hZfSGaqaOygsrab8SRsvBsbomZjj6egMTYPT1PRPIpaMU9o7geCpfIGOaTUtUiUNQzM8GZyhaVRJu0xNm0xNpWSchJxifINO4elzhIDgCKJv/kFWaS251S3klDeRUdrA7ceNJJe3I+iYWaR1ap764VkqJTLKXo4h7hqhvEdKhWSC9Mo2/E9dwNbOCc+d7gQfPUZIWAQxyRnki2spEteSmS/mWmYRv2QUIZAoP/Bt9jOZko7RWZ6PzNA2IKOlX0br4BQ54nqCTobh5+1Fys/hVKTFk54Qx728IrpeDTDwZpRnXRJK6trJFDcg6J9+x8D0O/qm3jIkVyFTLjKhXPjOYwo1je2d3ElI4M6vUTTejWOgLJvW8hJedL9GrlSjnH/PlELFgGyWl8OTCLqGp5CMz9I/qWR0dh65+iNz71eY+/Dt2RWGZXJa6+uoF92mOz+Z0YYSRvteMaFQffcpFpeZUn1AOrfA8IwKwYsROd3SWV5NKBlVLqL8+In51S+8XfmM/MMqYzNKOlsaaBAl0f0gFWlnExPyGaYXV5j7+C8UHz9912PvPtD3LXBSvczw3CI9MiVDikXUn/7N0pf/MK5aovn1MKXVdRRk3qE4MZo6UTI1FeWIW7tpeTOFVL3C27++8u7TVxTLnxlRLSFQLn1Gplqmc1RB17gS2fwKknEFosdPCL2cxOGTUQQGniQqLJRzUecIiriE75k4LqQUUNMzyszy3yz8/T/UX/6LYvUrgo7BGdrfyKnrGaepf5ImiZT4rGLc/SMxcznIZntvTLfvxcJ1P+Y7DmHqchjjHf44+50nIbeKfsUiitUvTC0sMaxQIShq7kPcMUhV5wh1L0fILKnB+1gkRtvcWW+1i3XWHqzb5sUPjgcQehzDyjsY632hOB45x9mkXBp7pfSPT9DU3EB+wQMEdR2vae6U8EwyRNPz11y9cYetznswNLVjndCJDVZu/OhyAI8TPxP4ezohCff5581cQhLzuSQqp6Chk/KqalJvxBARHITgSXUZleICGuorqaio5FTkRYwtHNDbZM5GUxu2OXmyP/AM52/d5+aDKlKLa0gVN5NY2sble5Uk5VdS9LiCP5ISCTl+HEFhehxZib+SkxZPSsptfvI9zkZjKww3mWG9dTt+RwK5GJtCbGYht+5kkJV8i/xsEXdz8rgYn8ZNUTFtXb3U1jcTcz0RQW78RdKuRHDr9/Nci73G0eBwHBzdcHJw5PBeb0KCwwiLTiDs6i1OR5zlcugJsqMjeZR8jfzMDCrrWhgYnaLnjZSHtW0IHqVe5/6NS6TfiOZeThZZmSIunYnkXJA/pwIO47XHB3tPX2y9/LBx24ury04ifX0ojL3IU3ERnd2v6e4fQzIqp3NIjuBx3p+kJcSSHHeFh4V5VD0qISPuKtERoRz02Y+JpcP3gwyFThgKnVkvdMTJ2Z2YM5GUPcijrK6V2g4JnYNTtPbKEFy4HMehgGAOHDnK9fh4/hSJiLn8G34BJ9nq5ImhiS36JnYYCJ0xsHDDwMoDoetBws5f5W5uCamFVeRWd1DxtJfssmYE5g4ebBQ6YGbjSlBoOJeuxHLkRBR2u4+wxdbjezt9U3sMzF0xtHZnnY03pjsDOP5LEqkP60kvbSK7oo3Mx41cSc1DsHaDqW7NBjPdJnN7nbuPr273gWM6SxcfnZnzfp2x/R6doZm9Tt/ETmcgdNYZWu7UGW710v3gfFi373SMLrGgWne/7rkup+qp7kb2I92Z2DSd4B+Gm1m78UeMzB2xcPLC1HYnRtY7MHH0YbOdJwYmdugZ26Bvth19oQsGlu6st92Hi99ZojOKSSttIlb0iNNXUwi6cB3BGn0jrf5mK+0W291aoZO31tTOXWvu+pPWwu2Q1sjKTatnbKPV22Kj1TOx1+qZOWr1zXdoDaw9tTY+odrImzna3+4Wa/2iYrQ7DoVod/tHagVrDIw0hqZ2Gku3Qxon7wCN4x4/za6AcI3DviDNBgtnzdot2zR6xraatcZ2Gj3T7Ro9oYvGwMpdY+l1QhN4JVUTniDS7PIP15g57tVY7/LV/B+eBawjKhIPNgAAAABJRU5ErkJggg==') 0% 0% / cover no-repeat;",
                                }}
                                alt="POWERING THE FUTURE OF FINANCE"
                                className="object-cover w-full h-full"
                                sizes="(min-width: 1024px) 45vw, 95vw"
                                loading="lazy"
                            />
                        </figure>
                        <div>
                            <figure
                                className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
                                style={{
                                    transform:
                                        "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                                    "--motion-translateX": "50%",
                                }}
                            >
                                <img
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&amp;auto=format 116w"
                                    src="./Home Page _ AnyTech_files/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg"
                                    width="116"
                                    height="115"
                                    style={{}}
                                    alt="anybass"
                                    sizes="115px"
                                    className="object-contain w-full h-full"
                                    loading="lazy"
                                />
                            </figure>
                            <figure
                                className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
                                style={{
                                    transform: "translateY(var(--motion-translateY))",
                                }}
                            >
                                <img
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&amp;auto=format 89w"
                                    src="./Home Page _ AnyTech_files/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg"
                                    width="89"
                                    height="88"
                                    style={{}}
                                    alt="anypass"
                                    sizes="87px"
                                    className="object-contain w-full h-full"
                                    loading="lazy"
                                />
                            </figure>
                            <figure
                                className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
                                style={{
                                    transform:
                                        "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                                    "--motion-translateX": "-50%",
                                }}
                            >
                                <img
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&amp;auto=format 74w"
                                    src="./Home Page _ AnyTech_files/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg"
                                    width="74"
                                    height="75"
                                    style={{}}
                                    className="object-contain w-full h-full"
                                    alt="anycaas"
                                    sizes="73px"
                                    loading="lazy"
                                />
                            </figure>
                        </div>
                        <figure
                            className="absolute inset-0 w-full h-full -z-10"
                            style={{
                                transform: "translate3d(0%, -5%, 0px)",
                                transition:
                                    "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                animationFillMode: "forwards",
                            }}
                        ></figure>
                        <figure
                            className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                            style={{
                                transform: "translate3d(0%, 2%, 0px)",
                                transition:
                                    "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                animationFillMode: "forwards",
                            }}
                        >
                            <img
                                className="object-cover w-full h-full overflow-visible"
                                loading="lazy"
                                src="./Home Page _ AnyTech_files/foreground.png"
                                alt="foreground frame"
                            />
                        </figure>
                    </div>
                </section>
            </div>
            {/* our    */}
            <div className="  mt-20">
                <section className="max-w-[1200px] mx-auto container md:mb-[128px]">
                    <header className="undefined md:space-y-sm space-y-xs text-center">
                        <h6 className="undefined lg:text-head-6 text-xl text-res-head-6 uppercase text-blue-500 font-Montserrat">
                            OUR PHILOSOPHY
                        </h6>
                        <h2 className="undefined text-6xl whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
                            Human-centred innovation
                        </h2>
                    </header>
                    <astro-island
                        uid="ZBEQyk"
                        component-url="/_astro/Image.5b715528.js"
                        component-export="default"
                        renderer-url="/_astro/client.c4e17359.js"
                        props='{"className":[0,"py-[32px]"],"images":[0,{"desktopImage":[0,{"alt":[0,"Image"],"asset":[0,{"assetId":[0,"2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1"],"url":[0,"https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"],"size":[0,753926],"_id":[0,"image-2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727-png"],"sha1hash":[0,"2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1"],"extension":[0,"png"],"_rev":[0,"3zk32H2FEFo9WaQWgHpNkM"],"_updatedAt":[0,"2023-06-28T08:27:08Z"],"path":[0,"images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"],"originalFilename":[0,"chart-ABCD.png"],"metadata":[0,{"lqip":[0,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABOElEQVQYlR2QS47VQAxFs/8dILGKHrEFJAb0CAkkYPDUpPslqVTqY5c/16gyuAPL8tE9Xh4V9lYDawt89MBOESeHXyO+N41PZPGVLJQsghQgtTtFFHkormFI7Ng6fCPIsjbgScB+x3EyogpQBb+q4KUrfpDCWD1YFDwG2mCkznhWxkmK1A17dxwELBsB1wBSE6yp4ygcJI4ulgvb3zI8VVaURlEbobOgDkUiwdYHMhvK8Jsxs8xmmQzvqeHPvxNve43CijbsKmyPTJb3wnhPNZ65I8+dONqYYEYTu+c6fFphORjYu2HNjMfRsWaKqVHFfzfBlzL859HEPy6OrQkS692wEaH2hsqCixQXTTCw5AGc7PcfUtfZNupw74pX0vjcFd+auDXxmAdVHNPgaIytEM4+gYbChq7w/zgkzr5TEySQAAAAAElFTkSuQmCC"],"dimensions":[0,{"_type":[0,"sanity.imageDimensions"],"width":[0,2206],"aspectRatio":[0,3.0343878954607977],"height":[0,727]}]}],"_createdAt":[0,"2023-06-28T08:27:08Z"],"_type":[0,"sanity.imageAsset"],"uploadId":[0,"jJWMEv3oxb0mWdBlxpAyO2Cfby3mF7UQ"],"mimeType":[0,"image/png"]}],"_type":[0,"image"]}],"mobileImage":[0,{"_type":[0,"image"],"alt":[0,"Image"],"asset":[0,{"metadata":[0,{"lqip":[0,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAACE4AAAhOAFFljFgAAADtElEQVQ4jV1Uy24cNxDUF+cP8h+55G5dghyCAEE+IAcjB+kQWAfHsCxpVzs7L766q2eWFTRn9HAWqCWHaBbZ7Oq6AnAHs2xmXJal7uB72I7/r3usOcwI2ATgrysAGbDVbOG6XurlcqnLutK/1RZmXRjKhqIvxKvH0mPXda3YCA3A4IT+QdhSL5fK9XJhzMpuiDyeA5/Okd+6yK/HmQ+nmc994DBnZgH3+OoHbzygE1YFaoFVWdZasNTznOu301S/Hsd6/zzV+9PML4eRnx/7+uVpqA/dXIdYarG1ivkeaxwG1CszUAFGAfuk7KLweS48TJlPY2rjccr1MKb6OCQ6fM1jPHbIyiTb7ZzryswEwJJF1yGWtZvz2oW8dnO6dCFfujnVbgo8O0Ku55Av5/ASk9ueLHrB9oizp/w7gI8K3GbRm1TkNuZyG1L+FHM5pZyXOE2M88SUC2Iuh5jyP7GUW48toje+1ysM4NoJfzSzn81wbWYfzPAB0A8i8puqfFJRTSExxURVzSJyIyK/AmixtuEawE8AfnDCPwHcAHZnZndNl8Cdqv7rMlBgnZMyJPW3dml0qvrZY8wc5jr2PX8D+MUJ1cz8DWhm9UVGu9C5mFGLVC1afd6E3nT3Glfb3GwFEL0oW4WaFo0CMAHMMOaiDFNg6Ifq8NRdEYAQmgloq2wjftHhfkJ9GYNqPavWQVC7KdVvh3O9fzjx/rHj0/NY55SrSKgofYXGpj2YbaPr0P92Qj+hzio8l8I+K09z4WMf+dDHNj4NiedYGHOk5jNRJhq0td5GaI1wF+WWepTCMflGF2/m0bGJm8cptbUxJpY4EGV2wvZUr623vcEbYcmRMc4MOXPOhXPaMO3wtZgyJQxE3gh9r7+hj+2GbcEb3EApkeIpbZV7Pfl9JgbhkkcuZeJi2Oxtj91SdmksK+OycBDhUAqDguLrKBRNTFqYnGxduSyFkDOhI9cVdLvDe0LdCWcYH6fE+35mFzMzlKITY+nZS2QPpa4ri2R2w4nD3LeslvXSOF7tS2BuW5wK6lMfeX+aeJoyoyizuPdFRi2c1DW6cEzCx27iYQgM4ta30C3sVTZZUcck9RQKD2OublteVbenubSWawhlsze3r4fNyupxLuyT1CRvOqQoWvV2e/KxoY+ZschrQVJR9iHzOLomQ8NxinWMhUW16fjKPcz9UL0IqnWHzxu2Vtvg8yLKmAtDKgy51FSkxWP7PfsNP5rZtEnHWgvu8+/QuuFl/nbI+/gTgD/+A7f8654kRbYDAAAAAElFTkSuQmCC"],"dimensions":[0,{"width":[0,1710],"aspectRatio":[0,0.8702290076335878],"height":[0,1965],"_type":[0,"sanity.imageDimensions"]}]}],"_updatedAt":[0,"2023-07-13T04:34:22Z"],"path":[0,"images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png"],"extension":[0,"png"],"_id":[0,"image-50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965-png"],"sha1hash":[0,"50bc481601f8adb912da12788f7d0143eb5b5eb3"],"_rev":[0,"pqq6FJRN5kObbPNqHaSMVa"],"assetId":[0,"50bc481601f8adb912da12788f7d0143eb5b5eb3"],"mimeType":[0,"image/png"],"_type":[0,"sanity.imageAsset"],"originalFilename":[0,"Group 1261152609.png"],"url":[0,"https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png"],"size":[0,340445],"uploadId":[0,"tWbPnvWhX771ReHDrdOMBLaT49lUlfHR"],"_createdAt":[0,"2023-07-13T04:34:22Z"]}]}]}]}'
                        client="idle"
                        opts='{"name":"Image","value":true}'
                        await-children=""
                    >
                        <figure className="py-[32px]">
                            <img
                                srcSet="
                    https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=320&amp;auto=format   320w,
                    https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=640&amp;auto=format   640w,
                    https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=960&amp;auto=format   960w,
                    https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1280&amp;auto=format 1280w,
                    https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&amp;auto=format 1600w,
                    https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1920&amp;auto=format 1920w,
                    https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=2206&amp;auto=format 2206w
                "
                                src="./Home Page _ AnyTech_files/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"
                                width="2206"
                                height="727"
                                sizes="95vw"
                                className="h-full w-full hidden md:block"
                                alt="Image"
                                loading="lazy"
                                style={{}}
                            />
                        </figure>
                    </astro-island>
                    <astro-island
                        uid="2kUfQy"
                        component-url="/_astro/Philosophies.00c0f550.js"
                        component-export="default"
                        renderer-url="/_astro/client.c4e17359.js"
                        props='{"philosophies":[1,"[[0,{\"name\":[0,\"Full-suite solutions\"],\"description\":[0,\"Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.\"],\"_key\":[0,\"25f28d658bba\"],\"_type\":[0,\"common.card\"],\"icon\":[0,{\"_type\":[0,\"image\"],\"alt\":[0,\"Full suite solutions\"],\"asset\":[0,{\"_rev\":[0,\"7WHcfefMqRQleGYm1tcKAW\"],\"_type\":[0,\"sanity.imageAsset\"],\"metadata\":[0,{\"lqip\":[0,\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADOUlEQVQ4jYVVS2tTURC+XdQfUBfixm10pQtd6cIUN4obQVcKiigYQaldKAoimurCikV8USpYUfDZVqoIShufLYhV8IE0rVilsZmTYqNzm6TVZj6Zc8+9TargYsjNmW++O3Nm5rueYfGMD88U4ZEvNcSoI0acGEliSREjQywlYpTcs541EaOefMzP+qgxkxoLjxieZ3zx8mX7p5YYMWIkiNFBLEPEyBNjmhjlwGTanamvk3zsDmKk1iiHD8+jUkS2zL35LTEKxAD5gJlj9jywgsMed7HzskUl9FHj3qJkw8QyQywgFvmPKWbGxShpTLk0uzpi0dTfKsD4ELXcpDXNKiJx51BfiKOAVGN3E0udEsaJpZNYCkFJIt/yM/JlfApfxqdk7EdZCazps56pTzHuJdDY4N4RV8KmoAFisxmd+C0v3o3iUle/tHX2off1CNLffGup1yNo6+rDpbv9FqNYE2SppNqopBKmiOWHHmopQ2OTaLnaI6s2H8GKTYeQONaO8zef4tyNJ9h19DKWbzwI9bVc67HY3GREqN1PeW62pkPCwQxLsvUeYmsbsGDlDtRva8L+07dw+FwXNuxpwaJ4AovXNkAxis3NEipHRglLxFIOSx4Zn5KO1Hs0nryOjQ1nsOXARZy98QT3Xwzi4u3n2HviGhqbr6Pj8Xt7n2a2ZJ3V4l+E2Z9l+UQFvBkeR/ezjzhy4a4lOHXlEa4+eIWegc/W94mKUKz5m1Ayug1hh9042K5qNy93v8Sa7cexZN0+bD3YahszO+RS0Wm7UZmwKfkww4qhxtjPMu73DWJ9ohkLV+20vw/605pZhDF+VVN6lTAZ7GbkrCIdSBtbbiLZjub2hxgYyoWVRBVRgE+HYxN3YuAGu5p0dOIXPnzN41Xa2F83e3PLLVQMtqhcJYhFF33GcLRSFly5iuH9VvhFY5xIqErVVYiDVZphS+pXlf9Ps8SRONjYmGqj970Ez7CofC2tli+BsTJlS59j0f4qVmNUvmqzVg99eBNWYC2pZrqLWO4El2w7VyGw9nlWYBkJw4gZJZsOBZYlkO8ivCzb8vVOV7vuh5+Aog6tm9le56t32Jqcfj44+AT8AW6FZ/LV7wmZAAAAAElFTkSuQmCC\"],\"dimensions\":[0,{\"aspectRatio\":[0,1],\"height\":[0,50],\"_type\":[0,\"sanity.imageDimensions\"],\"width\":[0,50]}]}],\"mimeType\":[0,\"image/svg+xml\"],\"_createdAt\":[0,\"2023-06-28T07:56:20Z\"],\"uploadId\":[0,\"MPUhovfgaojEm4BevZHo2d7osa2iMjXg\"],\"originalFilename\":[0,\"Frame 1261152660.svg\"],\"url\":[0,\"https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg\"],\"path\":[0,\"images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg\"],\"size\":[0,829],\"assetId\":[0,\"28029da89383a59e47420ee46b7e4c364051b45f\"],\"_updatedAt\":[0,\"2023-06-28T07:56:20Z\"],\"extension\":[0,\"svg\"],\"sha1hash\":[0,\"28029da89383a59e47420ee46b7e4c364051b45f\"],\"_id\":[0,\"image-28029da89383a59e47420ee46b7e4c364051b45f-50x50-svg\"]}]}]}],[0,{\"description\":[0,\"Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.\"],\"_key\":[0,\"8e88f2efd740\"],\"_type\":[0,\"common.card\"],\"icon\":[0,{\"asset\":[0,{\"originalFilename\":[0,\"Frame 1261152660.png\"],\"sha1hash\":[0,\"36c4da4283252fda5dce13c46ea3e06a5312218c\"],\"uploadId\":[0,\"1b6OoZKd5EQjhbL9f2Aanbi9pbQZqjmk\"],\"_createdAt\":[0,\"2023-06-28T07:56:32Z\"],\"_type\":[0,\"sanity.imageAsset\"],\"size\":[0,1277],\"assetId\":[0,\"36c4da4283252fda5dce13c46ea3e06a5312218c\"],\"_updatedAt\":[0,\"2023-06-28T07:56:32Z\"],\"_rev\":[0,\"3zk32H2FEFo9WaQWgHgv4C\"],\"path\":[0,\"images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png\"],\"extension\":[0,\"png\"],\"metadata\":[0,{\"lqip\":[0,\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADj0lEQVQ4jX2UTWxVVRDHTysJC0XdoOAO3RgNUojBqJGNCSYuDNbgRhJQQQxxYylSNMaFRCsaCEY+EiBRNKjUxIWIgQpaBS39wAJ9M0+JFNogD5Tia187/7m1d8ycvldvX4iLyf2Y+f/O3HP+dwJrEggaI4ekhqA3E/QBgjYQtIWgPSToI+AcQ39haAtDXybo/QydwdAaRhIYGvLQEG/OpubXaQSdQ9DlBP2EoKcJeoWgIyRQAsDQEYZeYegphu5l6HKGzmHBtLNjFlgcqGPBXzBwN0M3EPQEQYcImrKokaAq1GIOOsTQEyx4lcW1zkhihzUMvZOhrzG0l6EJC4yBlOT64blYI/Da3rL2LhatCSS4laHPM7TTYRMCLQtjJ2lekxiV56qahKFdkSF6iwMXkeBzgpYYaplCy40i7bpaTNv6L1lbf8G6B4upv/NcZkFj6DCLfkqChxz4Bgnyvj8sWZikbQMF29nabk27vrS121vsg4PH7YeBgmWhFCPqiASvO7CVBIOZgthl519/2/ZDP9uKjXts8Zp3bN5T6+3R1W/Z1gM/WtfVYuVLrNKAM5zlwAG3RXbFvCZ2tO+iNe74whavaba6pU0288Hn7I5FL9jqTXvtu/N/WF6ndGgMZ2DADS0EHfdT+w+odqTvor20ZZ/NrV9ntz280m6se8ZmPbLKVr79YcxNBcI7HmeoBEI07RSgd9vx5zVr3t9qC57eYDMWLLOb5i+z+UubrHn/tzFXtYfGzoD/coLL5H6aUgA/FDtA52xV80d2zxNr7d4ljfbiux/bQe6Lucn9k0lgwkDBgcdIUMweSqXL7sGibfvmJ3uycavVr3vfdhxut5PXhrLdGbnJo3WcgWMO3ESC3yun6wWV+9OlEdvXfsZWvLnbnt24xz7r6LUzpdHJE856luPwwHsOfIwEX5FAsp9d8eL3Fy7ZriMdtvtop7Vd34PGUYuvGXg85AQzSdDg5mbBeNmkk3vZOyJpT3E47SmWUl+gatHUNSxgFjSw4PaQG0UtCe4jwWYSnCcvqBZlIvvLeS1NaDazYC6J1IY4YAXTSbCQBFtI8BsJULbR/wVI8GtZs5AF03NjaZiY1klagdaRYD0JDpHgAgmG3VIE/accCQElEvST4DAJXiHBPNeeGjf3dAgkbm4NuWTMoTewYDYJlpBgGwm6SFAoD9whAi4T0E3AThLUEzCbgFqf1LExkfAvjkNSarehSDcAAAAASUVORK5CYII=\"],\"dimensions\":[0,{\"height\":[0,51],\"_type\":[0,\"sanity.imageDimensions\"],\"width\":[0,50],\"aspectRatio\":[0,0.9803921568627451]}]}],\"mimeType\":[0,\"image/png\"],\"url\":[0,\"https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png\"],\"_id\":[0,\"image-36c4da4283252fda5dce13c46ea3e06a5312218c-50x51-png\"]}],\"_type\":[0,\"image\"],\"alt\":[0,\"Simplify the complex\"]}],\"name\":[0,\"Simplify the complex\"]}],[0,{\"icon\":[0,{\"_type\":[0,\"image\"],\"alt\":[0,\"Cutting-edge tech\"],\"asset\":[0,{\"_id\":[0,\"image-1966d94a29ffe1673fd510327ba0eb409f82b680-50x50-svg\"],\"url\":[0,\"https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg\"],\"originalFilename\":[0,\"Frame 1261152660.svg\"],\"_createdAt\":[0,\"2023-06-28T07:56:54Z\"],\"_updatedAt\":[0,\"2023-06-28T07:56:54Z\"],\"extension\":[0,\"svg\"],\"size\":[0,1714],\"assetId\":[0,\"1966d94a29ffe1673fd510327ba0eb409f82b680\"],\"_type\":[0,\"sanity.imageAsset\"],\"mimeType\":[0,\"image/svg+xml\"],\"path\":[0,\"images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg\"],\"uploadId\":[0,\"6gClBd3kGojDlQljDV3aama8WfQN6nB8\"],\"metadata\":[0,{\"lqip\":[0,\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVQ4jZ1VTUuUURR+XdgPsB9hu+ofZNAmWoSbgkrICj+ShNxIkCUzSe5SaiMaiRI05EAfVhvtC5FS0XHOmDOD2h0HKgINbDRLzxPPfe87zEzmwsUD5z33nOe999xznuupEQ8W854aKYORChipgpGQGhmFkawa2YCPrPOFYeQojOyHzUl4yPg8JPGwmOJHOYxUwkgDjAypkRSMrMLIJoxsE+rb9HEtCiONzFHmfpmxpB6W82SH+Gc1EoORnBrBbnAxMRi55XL3IRv3PHy2x6x0x0irkS1kEkzS3eBittRI2pFWIiNlnqsZtx7zyYoSgUxCC+F2GJCqzfF32qhGKkhYpUaiaiRXsjP8WYrrz9Q01pI+aNNXQgqba2SIXJ6rG4tcFPRrIaap8Xd4FX2Cp5GoBW36NhdmAyK18X5NyREi4aga+VHwV/xenNVPY2/R3X0fdS2duHT1tkV9S6f1cY0xhTnwb3+UhFm2RrDIuqwkJvFoIILzzR04VdeO6gttFrRrmzsQGYyAMa6G6gjJkSXhhvo9lif8NvsRfT2DONcURvXFNhw+ccWCNn1cY0wJ4TaMrFtClBB+jX1Ab88AaprCOFl7HQeONVjQpq+XhLH/EOoOR/4en0B/30O7m9P17Thec82CNn1cY0zpkeGOzEtZLSxwLj2j71+8ROuNLpxpDOHsZR+0W292gWuMKcxR/1JGSBjilRf2Fu2VuUl9/WwY9+4+wJ2uPgvab54PY3VuqqgX1beTQdtUuabMqeutYCLWktO6PDWOpYkxC9r0BRNkyTIJO9f5xua4UGE46G6Oi0Zvhzn+Z/TUHz2qFEcvnhcH3bs4hH1xSJR5yFhhpXwd3KN8kYzyVY6lec8pbZ6UO61XI49ZZHdzeYF1dqHA8pjMKUeauppwik3SjJXx4Ak44m4/eALW2bSuZ0fcGp+ACl9Pk+4ZEe8vs20qkxDUyxEAAAAASUVORK5CYII=\"],\"dimensions\":[0,{\"_type\":[0,\"sanity.imageDimensions\"],\"width\":[0,50],\"aspectRatio\":[0,1],\"height\":[0,50]}]}],\"_rev\":[0,\"ZYStxD78aMqWPWExuRzLAl\"],\"sha1hash\":[0,\"1966d94a29ffe1673fd510327ba0eb409f82b680\"]}]}],\"name\":[0,\"Cutting-edge tech\"],\"description\":[0,\"We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.\"],\"_key\":[0,\"02f2a9e4ae17\"],\"_type\":[0,\"common.card\"]}]]"]}'
                        client="idle"
                        opts='{"name":"Philosophies","value":true}'
                        await-children=""
                    >
                        <ul
                            id="home-philosophies__card__container"
                            className="grid lg:grid-cols-3 grid-cols-2 gap-[30px]"
                        >
                            <li className="translate-y-[20%] z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm">
                                <figure className="w-fit rounded-full">
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&amp;auto=format 50w"
                                        src="./Home Page _ AnyTech_files/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg"
                                        width="50"
                                        height="50"
                                        sizes="50px"
                                        alt="Full suite solutions"
                                        className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                                        loading="lazy"
                                        style={{}}
                                    />
                                </figure>
                                <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
                                    Full-suite solutions
                                </h4>
                                <p className="text-body-1">
                                    Experience the ease of integration across various banking and
                                    payment functions with our comprehensive suite of solutions.
                                </p>
                            </li>
                            <li className="translate-y-[20%] z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm">
                                <figure className="w-fit rounded-full">
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&amp;auto=format 50w"
                                        src="./Home Page _ AnyTech_files/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png"
                                        width="50"
                                        height="51"
                                        sizes="50px"
                                        alt="Simplify the complex"
                                        className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                                        loading="lazy"
                                        style={{}}
                                    />
                                </figure>
                                <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
                                    Simplify the complex
                                </h4>
                                <p className="text-body-1">
                                    Simplify complex processes and optimise your financial
                                    operations by leveraging the power of AI, Blockchain, Cloud
                                    Computing, and Big Data.
                                </p>
                            </li>
                            <li className="translate-y-[20%]  z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm">
                                <figure className="w-fit rounded-full">
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&amp;auto=format 50w"
                                        src="./Home Page _ AnyTech_files/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg"
                                        width="50"
                                        height="50"
                                        sizes="50px"
                                        alt="Cutting-edge tech"
                                        className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                                        loading="lazy"
                                        style={{}}
                                    />
                                </figure>
                                <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
                                    Cutting-edge tech
                                </h4>
                                <p className="text-body-1">
                                    We seamlessly combine cutting-edge technologies, resulting in
                                    an unparalleled fintech experience for financial institutions.
                                </p>
                            </li>
                        </ul>
                    </astro-island>
                </section>
            </div>

            {/* techonology  */}
            <div className="  mt-20">
                <section className="container max-w-[1200px] mx-auto">
                    <header className="undefined md:space-y-sm space-y-xs text-center">
                        <h6 className="undefined text-xl lg:text-head-6 text-res-head-6 uppercase text-blue-500 font-Montserrat">
                            TECHNOLOGY BUILT FOR YOU
                        </h6>
                        <h2 className="undefined whitespace-pre-line text-6xl font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
                            The future of finance
                        </h2>
                    </header>

                    <SlideSection></SlideSection>
                </section>
            </div>

            {/* trust  */}

            <div className="  mt-20">
                <section className="max-w-[1200px] mx-auto mb-sm">
                    <div className="container">
                        <h6 className="pb-lg text-center lg:pb-md lg:text-head-6 text-res-head-6 text-xl uppercase text-blue-500 font-Montserrat">
                            TRUSTED BY THE BEST
                        </h6>
                        <astro-island
                            uid="1IxQct"
                            component-url="/_astro/Details.3145619f.js"
                            component-export="default"
                            renderer-url="/_astro/client.c4e17359.js"
                            props='{"details":[1,"[[0,{\"number\":[0,20],\"frontSymbol\":[0,\"&gt;\"],\"_type\":[0,\"detail\"],\"description\":[0,\"Years of Experience\"],\"_key\":[0,\"682d6eb84606\"]}],[0,{\"backSymbol\":[0,\"+\"],\"_type\":[0,\"detail\"],\"description\":[0,\"Financial Institutions\"],\"_key\":[0,\"7002b631cc6c\"],\"number\":[0,40]}],[0,{\"_type\":[0,\"detail\"],\"description\":[0,\"Customers Each\"],\"_key\":[0,\"c7fbfcc5144d\"],\"number\":[0,200],\"frontSymbol\":[0,\"&gt;\"],\"backSymbol\":[0,\"m\"]}]]"]}'
                            ssr=""
                            client="visible"
                            opts='{"name":"Details","value":true}'
                            await-children=""
                        >
                            <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
                                <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
                                    <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
                                        &gt;<span>0</span>
                                    </h2>
                                    <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
                                        Years of Experience
                                    </p>
                                </div>
                                <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
                                    <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
                                        <span>0</span>+
                                    </h2>
                                    <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
                                        Financial Institutions
                                    </p>
                                </div>
                                <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
                                    <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
                                        &gt;<span>0</span>m
                                    </h2>
                                    <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
                                        Customers Each
                                    </p>
                                </div>
                            </div>
                        </astro-island>
                        <div className="mt-20 grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5">
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=603&amp;fm=webp 603w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=603 603w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png"
                                    width="603"
                                    height="414"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="BANK OF CHENGDE"
                                    title="BANK OF CHENGDE"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&amp;fm=webp   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=640&amp;fm=webp   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=960&amp;fm=webp   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1280&amp;fm=webp 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1600&amp;fm=webp 1600w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1920&amp;fm=webp 1920w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2240&amp;fm=webp 2240w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2560&amp;fm=webp 2560w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=640   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=960   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1280 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1600 1600w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1920 1920w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2240 2240w,
                        https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2560 2560w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png"
                                    width="2560"
                                    height="768"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="BANK OF CHINA"
                                    title="BANK OF CHINA"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=640&amp;fm=webp 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=778&amp;fm=webp 778w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=640 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=778 778w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png"
                                    width="778"
                                    height="258"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="Bank of Shanghai logo"
                                    title="Bank of Shanghai"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&amp;fm=webp   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=640&amp;fm=webp   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=960&amp;fm=webp   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=1000&amp;fm=webp 1000w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=640   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=960   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=1000 1000w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png"
                                    width="1000"
                                    height="182"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="CGB"
                                    title="CGB"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=640&amp;fm=webp 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=960&amp;fm=webp 960w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=640 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=960 960w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png"
                                    width="960"
                                    height="540"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="CHINA CITIC BANK"
                                    title="CHINA CITIC BANK"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=640&amp;fm=webp 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=855&amp;fm=webp 855w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=640 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=855 855w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png"
                                    width="855"
                                    height="292"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="OneBank"
                                    title="OneBank"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&amp;fm=webp   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=640&amp;fm=webp   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=960&amp;fm=webp   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1280&amp;fm=webp 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1599&amp;fm=webp 1599w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=640   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=960   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1280 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1599 1599w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png"
                                    width="1599"
                                    height="628"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="PING AN BANK"
                                    title="PING AN BANK"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&amp;fm=webp   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=640&amp;fm=webp   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=960&amp;fm=webp   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1280&amp;fm=webp 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1600&amp;fm=webp 1600w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1626&amp;fm=webp 1626w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=640   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=960   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1280 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1600 1600w,
                        https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1626 1626w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png"
                                    width="1626"
                                    height="250"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="POSTAL SAVINGS BANK OF CHINA"
                                    title="POSTAL SAVINGS BANK OF CHINA"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&amp;fm=webp   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=640&amp;fm=webp   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=960&amp;fm=webp   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1280&amp;fm=webp 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1600&amp;fm=webp 1600w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1920&amp;fm=webp 1920w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2240&amp;fm=webp 2240w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2560&amp;fm=webp 2560w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2880&amp;fm=webp 2880w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3200&amp;fm=webp 3200w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3520&amp;fm=webp 3520w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3840&amp;fm=webp 3840w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4160&amp;fm=webp 4160w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4480&amp;fm=webp 4480w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4800&amp;fm=webp 4800w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=5000&amp;fm=webp 5000w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=640   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=960   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1280 1280w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1600 1600w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1920 1920w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2240 2240w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2560 2560w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2880 2880w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3200 3200w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3520 3520w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3840 3840w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4160 4160w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4480 4480w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4800 4800w,
                        https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=5000 5000w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png"
                                    width="5000"
                                    height="1970"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="sea"
                                    title="sea"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=500&amp;fm=webp 500w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=500 500w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/9764422d5b731f38edd216852c7c77e650647975-500x330.png"
                                    width="500"
                                    height="330"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="Shandong City Commercial Banks Alliance"
                                    title="Shandong City Commercial Banks Alliance"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&amp;fm=webp 318w"
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318 318w"
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg"
                                    width="318"
                                    height="61"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="VipFubon Consumer Finanace"
                                    title="VipFubon Consumer Finanace"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=640&amp;fm=webp 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=724&amp;fm=webp 724w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=640 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=724 724w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png"
                                    width="724"
                                    height="137"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="XIAMEN INTERNATIONAL BANK"
                                    title="XIAMEN INTERNATIONAL BANK"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=640&amp;fm=webp 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=800&amp;fm=webp 800w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=640 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=800 800w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png"
                                    width="800"
                                    height="527"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="XW"
                                    title="XW"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&amp;fm=webp   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=640&amp;fm=webp   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=960&amp;fm=webp   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=1200&amp;fm=webp 1200w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320   320w,
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=640   640w,
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=960   960w,
                        https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=1200 1200w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png"
                                    width="1200"
                                    height="337"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="SPD BANK"
                                    title="SPD BANK"
                                />
                            </picture>
                            <picture
                                style={{
                                    display: "flex",
                                    alignItems: "stretch",
                                    backgroundSize: "cover",
                                }}
                                className="object-contain"
                            >
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&amp;fm=webp 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=640&amp;fm=webp 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=862&amp;fm=webp 862w
                    "
                                    type="image/webp"
                                    sizes="170px"
                                />
                                <source
                                    srcSet="
                        https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320 320w,
                        https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=640 640w,
                        https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=862 862w
                    "
                                    sizes="170px"
                                />

                                <img
                                    src="./Home Page _ AnyTech_files/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png"
                                    width="862"
                                    height="289"
                                    data-x-lqip="false"
                                    data-x-lqip-transition-duration="0"
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                    alt="DCS"
                                    title="DCS"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="mt-lg overflow-x-hidden md:hidden">
                        <div
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                            aria-label="Company Logos"
                        >
                            <div
                                className="swiper-wrapper"
                                style={{
                                    cursor: "grab",
                                    transitionDuration: "0ms",
                                }}
                            >
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="0"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=603&amp;auto=format 603w
                            "
                                        src="./Home Page _ AnyTech_files/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414(1).png"
                                        width="603"
                                        height="414"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="1"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1920&amp;auto=format 1920w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2240&amp;auto=format 2240w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2560&amp;auto=format 2560w
                            "
                                        src="./Home Page _ AnyTech_files/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768(1).png"
                                        width="2560"
                                        height="768"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="2"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=778&amp;auto=format 778w
                            "
                                        src="./Home Page _ AnyTech_files/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258(1).png"
                                        width="778"
                                        height="258"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="3"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=1000&amp;auto=format 1000w
                            "
                                        src="./Home Page _ AnyTech_files/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182(1).png"
                                        width="1000"
                                        height="182"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="4"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=960&amp;auto=format 960w
                            "
                                        src="./Home Page _ AnyTech_files/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540(1).png"
                                        width="960"
                                        height="540"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="5"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=855&amp;auto=format 855w
                            "
                                        src="./Home Page _ AnyTech_files/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292(1).png"
                                        width="855"
                                        height="292"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="6"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1599&amp;auto=format 1599w
                            "
                                        src="./Home Page _ AnyTech_files/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628(1).png"
                                        width="1599"
                                        height="628"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="7"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1626&amp;auto=format 1626w
                            "
                                        src="./Home Page _ AnyTech_files/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250(1).png"
                                        width="1626"
                                        height="250"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="8"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1920&amp;auto=format 1920w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2240&amp;auto=format 2240w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2560&amp;auto=format 2560w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2880&amp;auto=format 2880w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3200&amp;auto=format 3200w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3520&amp;auto=format 3520w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3840&amp;auto=format 3840w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4160&amp;auto=format 4160w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4480&amp;auto=format 4480w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4800&amp;auto=format 4800w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=5000&amp;auto=format 5000w
                            "
                                        src="./Home Page _ AnyTech_files/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970(1).png"
                                        width="5000"
                                        height="1970"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="9"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=500&amp;auto=format 500w
                            "
                                        src="./Home Page _ AnyTech_files/9764422d5b731f38edd216852c7c77e650647975-500x330(1).png"
                                        width="500"
                                        height="330"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="10"
                                >
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&amp;auto=format 318w"
                                        src="./Home Page _ AnyTech_files/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61(1).svg"
                                        width="318"
                                        height="61"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="11"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=724&amp;auto=format 724w
                            "
                                        src="./Home Page _ AnyTech_files/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137(1).png"
                                        width="724"
                                        height="137"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="12"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=800&amp;auto=format 800w
                            "
                                        src="./Home Page _ AnyTech_files/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527(1).png"
                                        width="800"
                                        height="527"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="13"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=1200&amp;auto=format 1200w
                            "
                                        src="./Home Page _ AnyTech_files/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337(1).png"
                                        width="1200"
                                        height="337"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="14"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=862&amp;auto=format 862w
                            "
                                        src="./Home Page _ AnyTech_files/5f4683ef95594b29414088c82c00dddb4c61338b-862x289(1).png"
                                        width="862"
                                        height="289"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="0"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=603&amp;auto=format 603w
                            "
                                        src="./Home Page _ AnyTech_files/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414(1).png"
                                        width="603"
                                        height="414"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="1"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1920&amp;auto=format 1920w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2240&amp;auto=format 2240w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2560&amp;auto=format 2560w
                            "
                                        src="./Home Page _ AnyTech_files/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768(1).png"
                                        width="2560"
                                        height="768"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="2"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=778&amp;auto=format 778w
                            "
                                        src="./Home Page _ AnyTech_files/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258(1).png"
                                        width="778"
                                        height="258"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="3"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=1000&amp;auto=format 1000w
                            "
                                        src="./Home Page _ AnyTech_files/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182(1).png"
                                        width="1000"
                                        height="182"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="4"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=960&amp;auto=format 960w
                            "
                                        src="./Home Page _ AnyTech_files/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540(1).png"
                                        width="960"
                                        height="540"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="5"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=855&amp;auto=format 855w
                            "
                                        src="./Home Page _ AnyTech_files/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292(1).png"
                                        width="855"
                                        height="292"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="6"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1599&amp;auto=format 1599w
                            "
                                        src="./Home Page _ AnyTech_files/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628(1).png"
                                        width="1599"
                                        height="628"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="7"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1626&amp;auto=format 1626w
                            "
                                        src="./Home Page _ AnyTech_files/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250(1).png"
                                        width="1626"
                                        height="250"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="8"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1920&amp;auto=format 1920w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2240&amp;auto=format 2240w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2560&amp;auto=format 2560w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2880&amp;auto=format 2880w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3200&amp;auto=format 3200w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3520&amp;auto=format 3520w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3840&amp;auto=format 3840w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4160&amp;auto=format 4160w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4480&amp;auto=format 4480w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4800&amp;auto=format 4800w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=5000&amp;auto=format 5000w
                            "
                                        src="./Home Page _ AnyTech_files/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970(1).png"
                                        width="5000"
                                        height="1970"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="9"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=500&amp;auto=format 500w
                            "
                                        src="./Home Page _ AnyTech_files/9764422d5b731f38edd216852c7c77e650647975-500x330(1).png"
                                        width="500"
                                        height="330"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="10"
                                >
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&amp;auto=format 318w"
                                        src="./Home Page _ AnyTech_files/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61(1).svg"
                                        width="318"
                                        height="61"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="11"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=724&amp;auto=format 724w
                            "
                                        src="./Home Page _ AnyTech_files/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137(1).png"
                                        width="724"
                                        height="137"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="12"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=800&amp;auto=format 800w
                            "
                                        src="./Home Page _ AnyTech_files/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527(1).png"
                                        width="800"
                                        height="527"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="13"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=1200&amp;auto=format 1200w
                            "
                                        src="./Home Page _ AnyTech_files/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337(1).png"
                                        width="1200"
                                        height="337"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px]"
                                    data-swiper-slide-index="14"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=862&amp;auto=format 862w
                            "
                                        src="./Home Page _ AnyTech_files/5f4683ef95594b29414088c82c00dddb4c61338b-862x289(1).png"
                                        width="862"
                                        height="289"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="0"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=603&amp;auto=format 603w
                            "
                                        src="./Home Page _ AnyTech_files/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414(1).png"
                                        width="603"
                                        height="414"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="1"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=1920&amp;auto=format 1920w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2240&amp;auto=format 2240w,
                                https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=2560&amp;auto=format 2560w
                            "
                                        src="./Home Page _ AnyTech_files/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768(1).png"
                                        width="2560"
                                        height="768"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="2"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=778&amp;auto=format 778w
                            "
                                        src="./Home Page _ AnyTech_files/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258(1).png"
                                        width="778"
                                        height="258"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="3"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=1000&amp;auto=format 1000w
                            "
                                        src="./Home Page _ AnyTech_files/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182(1).png"
                                        width="1000"
                                        height="182"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="4"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=960&amp;auto=format 960w
                            "
                                        src="./Home Page _ AnyTech_files/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540(1).png"
                                        width="960"
                                        height="540"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="5"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=855&amp;auto=format 855w
                            "
                                        src="./Home Page _ AnyTech_files/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292(1).png"
                                        width="855"
                                        height="292"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="6"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=1599&amp;auto=format 1599w
                            "
                                        src="./Home Page _ AnyTech_files/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628(1).png"
                                        width="1599"
                                        height="628"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="7"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=1626&amp;auto=format 1626w
                            "
                                        src="./Home Page _ AnyTech_files/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250(1).png"
                                        width="1626"
                                        height="250"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="8"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1280&amp;auto=format 1280w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1600&amp;auto=format 1600w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=1920&amp;auto=format 1920w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2240&amp;auto=format 2240w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2560&amp;auto=format 2560w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=2880&amp;auto=format 2880w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3200&amp;auto=format 3200w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3520&amp;auto=format 3520w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=3840&amp;auto=format 3840w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4160&amp;auto=format 4160w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4480&amp;auto=format 4480w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=4800&amp;auto=format 4800w,
                                https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=5000&amp;auto=format 5000w
                            "
                                        src="./Home Page _ AnyTech_files/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970(1).png"
                                        width="5000"
                                        height="1970"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="9"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=500&amp;auto=format 500w
                            "
                                        src="./Home Page _ AnyTech_files/9764422d5b731f38edd216852c7c77e650647975-500x330(1).png"
                                        width="500"
                                        height="330"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="10"
                                >
                                    <img
                                        srcSet="https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&amp;auto=format 318w"
                                        src="./Home Page _ AnyTech_files/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61(1).svg"
                                        width="318"
                                        height="61"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="11"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=724&amp;auto=format 724w
                            "
                                        src="./Home Page _ AnyTech_files/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137(1).png"
                                        width="724"
                                        height="137"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="12"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=800&amp;auto=format 800w
                            "
                                        src="./Home Page _ AnyTech_files/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527(1).png"
                                        width="800"
                                        height="527"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="13"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&amp;auto=format   320w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=640&amp;auto=format   640w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=960&amp;auto=format   960w,
                                https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=1200&amp;auto=format 1200w
                            "
                                        src="./Home Page _ AnyTech_files/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337(1).png"
                                        width="1200"
                                        height="337"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="swiper-slide flex items-center my-auto !w-[170px] swiper-slide-duplicate"
                                    data-swiper-slide-index="14"
                                >
                                    <img
                                        srcSet="
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&amp;auto=format 320w,
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=640&amp;auto=format 640w,
                                https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=862&amp;auto=format 862w
                            "
                                        src="./Home Page _ AnyTech_files/5f4683ef95594b29414088c82c00dddb4c61338b-862x289(1).png"
                                        width="862"
                                        height="289"
                                        style={{}}
                                        sizes="170px"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="  mt-20">
                <section className="max-w-[1200px] mx-auto">
                    <div className="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
                        <h2 className="font-Montserrat text-5xl text-res-head-2 lg:text-head-2 font-semibold mb-[24px]">
                            Legacy no longer
                        </h2>
                        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
                            Talk to us to find out how we can transform your organisation for
                            the future
                        </p>
                        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
                        <a
                                    className="py-3 px-10 rounded-lg shadow-lg text-white flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
                                    href="#"
                                    aria-label="Contact AnyTech"
                                >
                                    <span>Contact Us</span>
                                    <svg
                                        width="6"
                                        height="9"
                                        viewBox="0 0 6 9"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M5.25 4.9L2.06 8.09c-.235.235-.586.235-.797 0L.726 7.57c-.21-.234-.21-.586 0-.797L3 4.52.726 2.25c-.21-.21-.21-.562 0-.797L1.266.914c.21-.21.562-.21.797 0L5.25 4.1c.21.234.21.586 0 .797z"
                                        />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
