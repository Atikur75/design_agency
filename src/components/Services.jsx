import Container from "@/components/Container";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const Services = async () => {

    const data = await getData();

    return (
        <section className="pt-16 pb-20">
            <Container>
                <div>
                    <h3 className="text_poppins font-medium uppercase text-xl text-[#20B15A] mb-3.5">Our All Services</h3>
                    <h2 className="w-[495px] text_poppins font-semibold text-3xl leading-normal mb-16">We Provide BestWeb design services</h2>
                    <div className="flex flex-wrap gap-x-7">
                        {data.map((item,i)=>{
                            return(
                                <div key={i} className="w-[48%] shadow-md py-7 pl-7 rounded-xl mb-12">
                                    <h3 className="text_poppins font-semibold uppercase text-lg mb-5">{item["title"]}</h3>
                                    <p className="w-[527px] text_poppins font-normal text-base text-[#9D9D9D] mb-12">{item["des"]}</p>
                                    <div className="flex gap-x-8 mb-5">
                                        <img className="rounded-xl" src={item["image1"]} alt="hero_image" width="358px" height="164px"/>
                                        <img className="rounded-xl" src={item["image2"]} alt="hero_image" width="143px" height="164px"/>
                                    </div>
                                    <div className="flex gap-x-8">
                                        <img className="rounded-xl" src={item["image3"]} alt="hero_image" width="257px" height="263px"/>
                                        <img className="rounded-xl" src={item["image4"]} alt="hero_image" width="248px" height="263px"/>
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

export default Services;