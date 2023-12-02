import Container from "@/components/Container";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const Testimonial = async () => {

    const data = await getData();

    return (
        <section className="pt-16 pb-20">
            <Container>
                <div>
                    <h3 className="text_poppins font-medium uppercase text-xl text-[#20B15A] mb-3.5">Testimonial List</h3>
                    <h2 className="w-[495px] text_poppins font-semibold text-3xl leading-normal mb-16">Better Agency/SEO Solution At Your Fingertips</h2>
                    <div className="flex flex-wrap gap-x-7">
                        {data.map((item,i)=>{
                            return(
                                <div key={i} className="w-[31%] shadow-md py-6 px-12 rounded-xl mb-10">
                                    <div className="mb-10">
                                        <img className="mx-auto rounded-2xl	" src={item["image"]} alt="testimonial_image"/>
                                    </div>
                                    <p className="text_poppins font-normal text-base text-[#9D9D9D] mb-6 text-center">{item["msg"]}</p>
                                    <h3 className="text_poppins font-semibold uppercase text-2xl mb-2.5 text-center">{item["name"]}</h3>
                                    <p className="text_poppins font-normal capitalize text-base text-center">{item["designation"]}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;