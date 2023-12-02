"use client";
import Container from "@/components/Container";
import Link from "next/link";
import {usePathname} from "next/navigation";


const SiteNavbar = () => {

    const currentPath = usePathname();

    return (
        <div className="w-full absolute top-4 left-0">
            <Container>
                <nav className="flex items-center">
                    <div className="w-3/12">
                        <img src="assests/logo/DesignAGENCY.png" alt="logo"/>
                    </div>
                    <div className="w-9/12">
                        <ul className="flex justify-end text_poppins font-medium text-base gap-x-7 items-center">
                            <li className="hover:text-[#20B15A] ease-out duration-300">
                                <Link className={currentPath === "/" && "text-[#20B15A]"} href="/">Home</Link>
                            </li>
                            <li className="hover:text-[#20B15A] ease-out duration-300">
                                <Link className={currentPath === "/team" && "text-[#20B15A]"} href={{pathname : "/team", query : {path : "Team"}}}>Team</Link>
                            </li>
                            <li className="hover:text-[#20B15A] ease-out duration-300">
                                <Link className={currentPath === "/service" && "text-[#20B15A]"} href={{pathname : "/service", query : {path : "Our Services"}}}>Service</Link>
                            </li>
                            <li className="hover:text-[#20B15A] ease-out duration-300">
                                <Link className={currentPath === "/project" && "text-[#20B15A]"} href={{pathname : "/project", query : {path : "All Project"}}}>Projects</Link>
                            </li>
                            <li className="hover:text-[#20B15A] ease-out duration-300">
                                <Link className={currentPath === "/testimonial" && "text-[#20B15A]"} href={{pathname : "/testimonial", query : {path : "Testimonial List"}}}>Testimonials</Link>
                            </li>
                            <li className="border border-[#20B15A] py-2.5 px-6 rounded-lg">
                                <Link className={currentPath === "/login" && "text-[#20B15A]"} href="/login">Login</Link>
                            </li>
                            <li className="bg-[#20B15A] py-2.5 px-6 rounded-lg text-white">
                                <Link className={currentPath === "/register" && "text-[#20B15A]"} href="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default SiteNavbar;