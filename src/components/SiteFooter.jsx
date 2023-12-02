import Container from "@/components/Container";
import Link from "next/link";
import { FaFacebookF,FaLinkedinIn  } from "react-icons/fa";
import { FaXTwitter,FaInstagram  } from "react-icons/fa6";


const SiteFooter = () => {
    return (
        <section className="bg-black pt-14 pb-7">
            <Container>
                <div className="flex">
                    <div className="w-1/3">
                        <h2 className="text_poppins font-bold text-white text-4xl mb-5">WEB LOGO</h2>
                        <p className="w-[280px] text_poppins font-normal text-white text-base">Some footer text about the  Agency. Just a little description to help people understand you better</p>
                        <ul className="flex gap-x-4 text-white text-base mt-5 mb-20">
                            <li className="py-3.5 px-3.5 bg-[#20B15A] rounded-full">
                                <Link href="#">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li className="py-3.5 px-3.5 bg-[#20B15A] rounded-full">
                                <Link href="#">
                                    <FaXTwitter />
                                </Link>
                            </li>
                            <li className="py-3.5 px-3.5 bg-[#20B15A] rounded-full">
                                <Link href="#">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li className="py-3.5 px-3.5 bg-[#20B15A] rounded-full">
                                <Link href="#">
                                    <FaInstagram />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text_poppins font-semibold text-white text-xl mb-4">Quick Links</h3>
                        <ul>
                            <li className="text_poppins font-medium text-white text-lg mb-6">
                                <Link href="#">Services</Link>
                            </li>
                            <li className="text_poppins font-medium text-white text-lg mb-6">
                                <Link href="#">Portfolio</Link>
                            </li>
                            <li className="text_poppins font-medium text-white text-lg mb-6">
                                <Link href="#">About Us</Link>
                            </li>
                            <li className="text_poppins font-medium text-white text-lg mb-6">
                                <Link href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text_poppins font-semibold text-white text-xl mb-4">Address</h3>
                        <p className="w-[258px] text_poppins font-medium text-white text-lg">Design Agency Head Office. Airport Road United Arab Emirate</p>
                    </div>
                </div>
                <p className="text_poppins font-normal text-white text-base">Copyright Design Agency 2022</p>
            </Container>
        </section>
    );
};

export default SiteFooter;