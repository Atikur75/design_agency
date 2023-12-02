import Container from "@/components/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/TeamList");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const Team = async () => {

    const data = await getData();

    return (
        <section className="pt-16 pb-20">
            <Container>
                <div>
                    <h3 className="text_poppins font-medium uppercase text-xl text-[#20B15A] mb-3.5">Our Team Member</h3>
                    <h2 className="w-[495px] text_poppins font-semibold text-3xl leading-normal mb-16">Check our awesome team members</h2>
                    <div className="flex flex-wrap gap-x-8">
                        {data.map((item,i)=>{
                            return(
                                <div key={i} className="w-[31%] shadow-md rounded-2xl relative group mb-10">
                                    <div >
                                        <img className="w-full h-full rounded-t-2xl" src={item["image"]} alt="Team_image"/>
                                    </div>
                                    <h3 className="text_poppins font-semibold text-3xl text-[#101A29] text-center pt-7 pb-11">{item["name"]}</h3>
                                    <div className="w-[145px] h-[50px] bg-white px-1.5 flex text-[#737588] font-normal text-base shadow-md mt-10 items-center rounded-3xl absolute left-28 bottom-36 hidden transition delay-150 duration-300 ease-in-out group-hover:flex ">
                                        <div className="flex mx-auto after:border-r-2 after:text-[#E3E3E3] gap-x-4">
                                            <a href={item["facebook"]}>
                                                <FaFacebookF/>
                                            </a>
                                        </div>
                                        <div className="flex mx-auto after:border-r-2 after:text-[#E3E3E3] gap-x-4">
                                            <a href={item["twitter"]}>
                                                <FaXTwitter/>
                                            </a>
                                        </div>
                                        <div className="mx-auto">
                                            <a href={item["instagram"]}>
                                                <BsInstagram/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Team;