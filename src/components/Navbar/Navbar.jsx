import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return (
        <header className=" bg-transparent max-lg:bg-blue-main max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999]  ">
            <div id="main-navigation" className="relative z-[9999]">
                <div className="max-w-[1200px] mx-auto container flex items-center justify-between">
                    <h1>
                        <a aria-label="Go to home page" href="/en" rel="home">
                            <h2>Muzahid</h2>
                        </a>
                    </h1>
                    <div className="flex items-center">
                        <nav className="desktop-menu max-lg:hidden" aria-label="Main navigation desktop">
                            <ul className="flex">
                                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer  !border-none"><span className="flex items-center justify-between"><span>Solutions
                                </span>

                                    <svg className="ml-2 mt-1 fill-white" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path></svg></span>
                                    <span className="lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative shadow-menu lg:text-blue-text rounded-xs hidden block lg:group-hover:block"><ul className="flex flex-col relative lg:-mt-[1px] max-lg:mt-6"><li className="lg:border-t border-blue-light whitespace-nowrap first:border-none"><a className="hover:text-blue-main hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block" href="/en/solutions/anycaas"><span className="flex res-body-p0 lg:text-body-p1"><svg className="w-2 -rotate-90 fill-theme-muted mr-2 lg:hidden" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path></svg>
                                        AnyCaaS
                                    </span></a>
                                    </li>
                                        <li className="lg:border-t border-blue-light whitespace-nowrap first:border-none"><a className="hover:text-blue-main hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block" href="/en/solutions/anybaas"><span className="flex res-body-p0 lg:text-body-p1"><svg className="w-2 -rotate-90 fill-theme-muted mr-2 lg:hidden" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path></svg>
                                            AnyBaaS
                                        </span></a>
                                        </li>
                                        <li className="lg:border-t border-blue-light whitespace-nowrap first:border-none"><a className="hover:text-blue-main hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block" href="/en/solutions/anypaas"><span className="flex res-body-p0 lg:text-body-p1"><svg className="w-2 -rotate-90 fill-theme-muted mr-2 lg:hidden" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path></svg>
                                            AnyPaaS
                                        </span></a>
                                        </li>
                                    </ul>
                                    </span>
                                </li>
                                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer"><span className="flex items-center justify-between"><a href="/en/services">Services
                                </a>

                                </span>

                                </li>
                                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer"><span className="flex items-center justify-between"><a href="/en/about-us">About Us
                                </a>

                                </span>

                                </li>

                                <div className="ml-6 my-auto">
                                    <div className="relative lg:block hidden">
                                        <button onClick={toggleDropdown} className="rounded-[132px] flex items-center justify-center space-x-[8px] border px-[14px] py-[8px] lg:text-body-p1 text-res-body-p0 border-white">
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z" fill="currentColor">
                                                </path>
                                            </svg>
                                            <span className="uppercase">en</span>

                                            {isOpen ? <svg className="rotate-180 transition-transform duration-200" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.35156 4.77344L1.16406 1.58594C0.929688 1.35156 0.929688 1 1.16406 0.789062L1.67969 0.25C1.91406 0.0390625 2.26562 0.0390625 2.47656 0.25L4.72656 2.52344L7 0.25C7.21094 0.0390625 7.5625 0.0390625 7.79688 0.25L8.3125 0.789062C8.54688 1 8.54688 1.35156 8.3125 1.58594L5.125 4.77344C4.91406 4.98438 4.5625 4.98438 4.35156 4.77344Z" fill="currentColor">
                                                </path>
                                            </svg>:<svg className="rotate-0 transition-transform duration-200" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.35156 4.77344L1.16406 1.58594C0.929688 1.35156 0.929688 1 1.16406 0.789062L1.67969 0.25C1.91406 0.0390625 2.26562 0.0390625 2.47656 0.25L4.72656 2.52344L7 0.25C7.21094 0.0390625 7.5625 0.0390625 7.79688 0.25L8.3125 0.789062C8.54688 1 8.54688 1.35156 8.3125 1.58594L5.125 4.77344C4.91406 4.98438 4.5625 4.98438 4.35156 4.77344Z" fill="currentColor">
                                                </path>
                                            </svg>}


                                        </button>
                                        {isOpen &&(<ul className="absolute overflow-visible bottom-0 translate-y-full bg-white rounded text-black w-max p-3 divide-y-2 rounded-xs shadow-menu" >
                                            <li className="py-1 hover:text-blue-main hover:transition-colors duration-200 text-blue-text">
                                                <button className="flex space-x-1">
                                                    <span className="uppercase">en</span>
                                                    <span className="capitalize">(English)</span>
                                                </button>
                                            </li>
                                            <li className="py-1 hover:text-blue-main hover:transition-colors duration-200 text-blue-text">
                                                <button className="flex space-x-1">
                                                    <span className="uppercase">th</span>
                                                    <span className="capitalize">(Thai)</span>
                                                </button>
                                            </li>
                                            <li className="py-1 hover:text-blue-main hover:transition-colors duration-200 text-blue-text">
                                                <button className="flex space-x-1">
                                                    <span className="uppercase">id</span>
                                                    <span className="capitalize">(Bahasa Indonesia)</span>
                                                </button>
                                            </li>
                                            <li className="py-1 hover:text-blue-main hover:transition-colors duration-200 text-blue-text">
                                                <button className="flex space-x-1">
                                                    <span className="uppercase">tw</span>
                                                    <span className="capitalize">(Traditional Chinese)</span>
                                                </button>
                                            </li>
                                        </ul>)}
                                    </div>

                                    <div className="lg:hidden block w-full">
                                        <div className="w-full rounded-[130px] border px-[14px] py-[8px] text-res-body-p1 border-blue-main transition-all duration-75 rounded-[130px]"><button className="flex justify-center items-center space-x-[8px] w-full"><div className="flex-1 flex space-x-2 items-center"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z" fill="currentColor"></path></svg>
                                            <span className="uppercase">English</span>
                                            </div>
                                            <svg className="rotate-0 transition-transform duration-300" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.35156 4.77344L1.16406 1.58594C0.929688 1.35156 0.929688 1 1.16406 0.789062L1.67969 0.25C1.91406 0.0390625 2.26562 0.0390625 2.47656 0.25L4.72656 2.52344L7 0.25C7.21094 0.0390625 7.5625 0.0390625 7.79688 0.25L8.3125 0.789062C8.54688 1 8.54688 1.35156 8.3125 1.58594L5.125 4.77344C4.91406 4.98438 4.5625 4.98438 4.35156 4.77344Z" fill="currentColor"></path></svg></button>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                        <button className="cursor-pointer lg:hidden"><svg className="fill-white" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2C0 0.895431 0.895431 0 2 0H18V2H0Z"></path><rect y="7" width="18" height="2"></rect><path d="M0 14H18V16H2C0.89543 16 0 15.1046 0 14Z"></path></svg></button></div>
                    <a href="/en/contact-us" className="hover:bg-white">Contact Us
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;