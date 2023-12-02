import Container from "@/components/Container";

async function getData() {
    const res = await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const Hero = async () => {

    const data = await getData();

    return (
        <section className="bg-[#D7F5DC]">
            <Container>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <h1 className="w-[550px] text_poppins font-bold text-5xl leading-tight mb-2.5">{data.title}</h1>
                            <p className="w-[550px] text_poppins font-medium text-xl mb-12">{data.description}</p>
                            <button className="bg-[#20B15A] py-5 px-8 rounded-xl text_poppins text-xl font-medium text-white">Get Started</button>
                        </div>
                    </div>
                    <div className="w-1/2 pt-36 pb-60">
                        <div className="flex justify-between mb-6 max-h-[271px]">
                            <img className=" rounded-xl" src={data["image1"]} width="408px" alt="hero_image"/>
                            <img className=" rounded-xl" src={data["image2"]} width="180px" alt="hero_image"/>
                        </div>
                        <div className="flex justify-between max-h-[164px]">
                            <img className=" rounded-xl" src={data["image3"]} width="246px" alt="hero_image"/>
                            <img className=" rounded-xl" src={data["image4"]} width="345px" alt="hero_image"/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;