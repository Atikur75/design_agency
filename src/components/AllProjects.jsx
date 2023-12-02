import Container from "@/components/Container";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const AllProjects = async () => {

    const data = await getData();

    return (
        <section className="pt-16 pb-20">
            <Container>
                <div>
                    <h3 className="text_poppins font-medium uppercase text-xl text-[#20B15A] mb-3.5">All Project</h3>
                    <h2 className="w-[495px] text_poppins font-semibold text-3xl leading-normal mb-16">Better Agency/SEO Solution At Your Fingertips</h2>
                    <div className="flex flex-wrap gap-x-7">
                        {data.map((item,i)=>{
                            return(
                                <div key={i} className="w-[48%] shadow-md py-7 px-7 rounded-xl mb-7">
                                    <img className="rounded-2xl mb-7" src={item["image"]} alt="Projects_image"/>
                                    <h3 className="text_poppins font-semibold uppercase text-2xl">{item["title"]}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AllProjects;