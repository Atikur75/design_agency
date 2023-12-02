import Container from "@/components/Container";

async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/BrandList");
    if(!res.ok){
        throw new Error("Something went wrong!");
    }
    return res.json();
}

const Brand = async () => {

    const data = await getData();

    return (
        <section className="w-full bg-[#F8FFF9] absolute top-[680px] left-0">
               <Container>
                   <div className="flex justify-between items-center py-11">
                       {data.map((item,i)=>{
                           return(
                               <div key={i} className="w-1/5">
                               <img className="" src={item["image"]} alt="brand_image"/>
                               </div>
                           )
                       })}
                   </div>
               </Container>
        </section>
    );
};

export default Brand;