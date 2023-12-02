import Container from "@/components/Container";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const FeaturedProjects = async () => {

    const data = await getData();

    return (
        <section className="bg-[#F0FDF4]">
            <Container>
                <div className="pt-14 pb-20">
                    <h3 className="text_poppins font-medium uppercase text-xl text-[#20B15A] mb-3.5">Featured Project</h3>
                    <h2 className="w-[495px] text_poppins font-semibold text-3xl leading-normal mb-16">We provide the Perfect Solution to your business growth</h2>
                    <div className="flex justify-between gap-x-7">
                        <div className="w-1/2">
                            <div className="w-[603px] h-[531px]">
                                <img className="w-full h-full inline-block rounded-2xl" src={data[0]["image"]} alt="featured_image"/>
                            </div>
                            <p className="text_poppins font-normal text-sm text-[#2E3E5C] mb-2.5 mt-3.5">{data[0]["remark"]}</p>
                            <h3 className="text_poppins font-bold text-2xl text-[#1E1F4B]">{data[0]["title"]}</h3>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-wrap gap-x-7">
                                {data.map((item,i)=>{
                                    return(
                                        <div key={i} className="w-[47%] mb-7">
                                            <div className="w-[287px] h-[188px]">
                                                <img className="w-full h-full inline-block rounded-2xl" src={item["image"]} alt="featured_image"/>
                                            </div>
                                            <p className="text_poppins font-normal text-sm text-[#2E3E5C] mb-2.5 mt-3.5">{item["remark"]}</p>
                                            <h3 className="text_poppins font-bold text-lg text-[#1E1F4B]">{item["title"]}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProjects;