import Container from "@/components/Container";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/WorkList");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const WorkList = async () => {

    const data = await getData();

    return (
        <section className="pt-16 pb-28">
            <Container>
                <h3 className="text_poppins font-medium uppercase text-xl text-[#20B15A] mb-3.5">Work List</h3>
                <h2 className="w-[495px] text_poppins font-semibold text-3xl mb-20">We provide the Perfect Solution to your business growth</h2>
                <div className="flex justify-between">
                    {data.map((item,i)=>{
                        return(
                            <div key={i} className="w-1/3 px-7">
                                <div className="w-[93px] h-[93px] bg-[#D7F5DC] flex items-center rounded-2xl mb-3.5">
                                    <img src="assests/work/Activity.png" alt="work_image" className="mx-auto"/>
                                </div>
                                <h3 className="text_poppins font-semibold capitalize text-2xl mb-4">{item["title"]}</h3>
                                <p className="w-[299px] text_poppins font-normal text-lg mb-10">{item["des"]}</p>
                                <Link href="#">
                                    <div className="flex items-center gap-x-2.5">
                                        <p className="text_poppins font-normal text-lg">Learn More</p>
                                        <MdArrowForward />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
};

export default WorkList;