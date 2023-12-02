
// absolute top-[5px] right-[383px]
const Subscribe = () => {
    return (
        <div className="text-center pt-20 pb-32 relative">
            <h3 className="text_poppins font-medium text-xl text-[#20B15A] uppercase mb-5">SUBSCRIBE</h3>
            <h2 className="w-[495px] text_poppins font-semibold text-3xl capitalize m-auto mb-1.5">Subscribe to get the latest news about us</h2>
            <p className="text_poppins text-base font-normal text-[#8B8B8B] mb-10">Please drop your email below to get daily update about what we do</p>
            <input className="w-[596px] border rounded-lg border-slate-800 text_poppins text-sm font-normal text-[#8B8B8B] py-5 pl-4" placeholder="Enter Your Email Adress"/>
            <button className="bg-[#F55F1D] py-3.5 px-6 rounded-lg text_poppins text-base text-white absolute top-[275px] right-[660px]">Subscribe</button>
        </div>
    );
};

export default Subscribe;