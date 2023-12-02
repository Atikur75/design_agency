import Container from "@/components/Container";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/StatList");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const StatList = async () => {

    const data = await getData();

    return (
        <section className="pb-16">
            <Container>
                <div className="flex justify-between text-center">
                    <div className="w-[24%]">
                        <div className="shadow-md rounded-2xl py-12 px-20">
                            <div className="w-[100px] h-[100px] bg-[#D7F5DC] flex items-center rounded-xl mb-5 mx-auto">
                                <img src="assests/stat/Group 3.png" alt="stat_image" className="mx-auto"/>
                            </div>
                            <p className="text_poppins font-semibold text-3xl mb-1">{data["followers"]}</p>
                            <p className="text_poppins font-medium text-sm">Followers</p>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className="shadow-md rounded-2xl py-12 px-20">
                            <div className="w-[100px] h-[100px] bg-[#D7F5DC] flex items-center rounded-xl mb-5 mx-auto">
                                <img src="assests/stat/Like.png" alt="stat_image" className="mx-auto"/>
                            </div>
                            <p className="text_poppins font-semibold text-3xl mb-1">{data["solved"]}</p>
                            <p className="text_poppins font-medium text-sm">Solved Problems</p>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className="shadow-md rounded-2xl py-12 px-20">
                            <div className="w-[100px] h-[100px] bg-[#D7F5DC] flex items-center rounded-xl mb-5 mx-auto">
                                <img src="assests/stat/Happy.png" alt="stat_image" className="mx-auto"/>
                            </div>
                            <p className="text_poppins font-semibold text-3xl mb-1">{data["customers"]}</p>
                            <p className="text_poppins font-medium text-sm">Happy Customers</p>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className="shadow-md rounded-2xl py-12 px-20">
                            <div className="w-[100px] h-[100px] bg-[#D7F5DC] flex items-center rounded-xl mb-5 mx-auto">
                                <img src="assests/stat/Scan 3.png" alt="stat_image" className="mx-auto"/>
                            </div>
                            <p className="text_poppins font-semibold text-3xl mb-1">{data["projects"]}</p>
                            <p className="text_poppins font-medium text-sm">Projects</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default StatList;