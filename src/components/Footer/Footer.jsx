const Footer = () => {
    return (
        <footer className="  mt-20">
            <div className="bg-[#002045]">
                <div className="flex max-w-[1200px] mx-auto items-center justify-between py-11">
                    
                    <a href="https://anytxn.com/en">
                        <picture style={{ display: 'flex', alignItems: 'stretch', backgroundSize: 'cover' }}>
                            <source 
                                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp" 
                                type="image/webp" 
                                sizes="127px, (min-width: 1024px) 217px" 
                            />
                            <source 
                                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200" 
                                sizes="127px, (min-width: 1024px) 217px" 
                            />
                            <img
                                src="./Home Page _ AnyTech_files/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg"
                                width="200"
                                height="32"
                                alt="AnyTech"
                                loading="lazy"
                                className=" !w-[217px] !object-contain"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </picture>
                    </a>

                    <div className="hidden items-center text-[#00E9EA] lg:flex">
                        <p className="border-r border-blue-dark px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">
                            Our Solutions
                        </p>
                        <ul className="flex items-center">
                            <li>
                                <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" 
                                   href="https://anytxn.com/en/solutions/anycaas">
                                    AnyCaaS
                                </a>
                            </li>
                            <li>
                                <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" 
                                   href="https://anytxn.com/en/solutions/anybaas">
                                    AnyBaaS
                                </a>
                            </li>
                            <li>
                                <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" 
                                   href="https://anytxn.com/en/solutions/anypaas">
                                    AnyPaaS
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-6 lg:hidden lg:gap-10">
                        <a href="https://www.linkedin.com/company/anytxn" 
                           className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold">
                            <picture style={{ display: 'flex', alignItems: 'stretch', backgroundSize: 'cover' }} className="shrink-0 object-contain">
                                <source
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=320&fm=webp"
                                    type="image/webp"
                                    sizes="24px"
                                />
                                <img
                                    src="./Home Page _ AnyTech_files/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg"
                                    alt="LinkedIn"
                                    loading="lazy"
                                    className="w-10"
                                />
                            </picture>
                        </a>

                        <a href="tel:+6590021890" 
                           className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold">
                            <picture style={{ display: 'flex', alignItems: 'stretch', backgroundSize: 'cover' }} className="shrink-0 object-contain">
                                <source
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=320&fm=webp"
                                    type="image/webp"
                                    sizes="24px"
                                />
                                <img
                                    src="./Home Page _ AnyTech_files/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg"
                                    alt="Phone"
                                    loading="lazy"
                                    className="w-10"
                                />
                            </picture>
                        </a>

                        <a href="mailto:enquiry@anytxn.com" 
                           className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold">
                            <picture style={{ display: 'flex', alignItems: 'stretch', backgroundSize: 'cover' }} className="shrink-0 object-contain">
                                <source
                                    srcSet="https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=320&fm=webp"
                                    type="image/webp"
                                    sizes="24px"
                                />
                                <img
                                    src="./Home Page _ AnyTech_files/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg"
                                    alt="Email"
                                    loading="lazy"
                                    className="w-10"
                                />
                            </picture>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-b border-blue-dark"></div>
            
            <div className="bg-[#00152D] text-white">
                <div className="flex max-w-[1200px] mx-auto flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2">
                    <p>
                        <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
                    </p>
                    <div className="flex items-center gap-[14px] max-lg:mt-4">
                        <div>
                            <a className="transition-colors duration-300 hover:text-blue-highlight" 
                               href="https://anytxn.com/en/privacy-policy">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;