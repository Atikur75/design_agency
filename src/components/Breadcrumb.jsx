"use client";
import Container from "@/components/Container";
import { IoIosArrowForward } from "react-icons/io";
import {useSearchParams} from "next/navigation";
import Link from "next/link";


const Breadcrumb = () => {

    const params = useSearchParams();
    const name = params.get("path");

    return (
        <section className="bg-[#F8F9FC]">
            <Container>
                <div className="pt-48 pb-20">
                    <h2 className="text_poppins font-semibold text-4xl text-[#101A29] mb-5">{name}</h2>
                    <div className="flex items-center gap-x-3.5">
                        <p className="text_poppins font-semibold text-base text-[#101A29]">
                            <Link href="/">Home</Link>
                        </p>
                        <IoIosArrowForward />
                        <p className="text_poppins font-semibold text-base text-[#20B15A]">{name}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Breadcrumb;