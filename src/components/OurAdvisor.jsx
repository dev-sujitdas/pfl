import React from "react";
import face1 from "/Images/face1.jpg";
import face2 from "/Images/face2.jpg";
import face3 from "/Images/face3.jpg";


const OurAdvisor = () => {
  const advisorData = [
    {
      image: face1,
      name: "Gerrit Bezuidenhout",
      description:
        "Gerrit joined Sanlam in 1989 as a Legal Adviser and moved into management roles at Sanlam and Momentum from 1992 to 1998. In 1998, he co-founded PFL with Craig Shillaw. He holds an LLB from UNISA, a Postgraduate Diploma in Financial Planning from UFS, and is a CFP® professional.",
    },
    {
      image: face2,
      name: "Tihan Bezuidenhout",
      description:
        "Tihan began his career in 2012 as a Paraplanner at PFL, gaining broad experience in financial planning with a focus on personal finance and investment management. He holds a BCom and a Postgraduate Diploma in Financial Planning from the University of Stellenbosch, and is a CFP® professional.",
    },
    {
      image: face3,
      name: "Micky Alborough",
      description:
        "Micky began her career in financial services in 1976 with NBS Bank and achieved Executive Financial Planner status in 1984. She joined Plan for Life in 2000 and specializes in personal financial planning, serving a well-established client base in Durban.",
    },
  ];

  return (
    <section id="advisors" className="w-full  bg-[#2D2D2C]">
      <div id="advisor" className="w-full max-w-[150rem] mx-auto p-[7rem] bg-[#EEF4EA] rounded-t-[5rem] relative">
        <div className="advisor-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-6xl poppins-semibold text-[#2C2B2B]">
              Our Advisors
            </h2>
          </div>
          <div className="flex w-[20rem] gap-6 items-center justify-between">
            <div className="w-28">
              <div className="line w-28 h-1 bg-[#52525c]"></div>
            </div>
            <div className="h-[5.3rem] w-[10rem] overflow-hidden">
              <h3 className="text-xl poppins-medium w-[10rem] text-zinc-600">
                Plan Your Financial Future with PFL
              </h3>
            </div>
          </div>
        </div>
        <div className="advisor-subtitle">
          <h3 className="subtitle mt-6 text-2xl poppins-regular-italic w-[30%] text-zinc-400">
            Meet the experts behind your financial success.
          </h3>
        </div>
        <div className="w-[80%] mx-auto flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">            
         {advisorData.map((item)=>(
             <div key={item.name} className="w-96 h-[30rem] bg-[#2D2D2C] flex flex-col justify-between items-center rounded-2xl shadow-md group overflow-hidden relative">              
              <div className="w-full h-full flex justify-center transition-all duration-500 group-hover:p-5">
                <img
                  className="w-full h-full object-cover transition-all duration-500 group-hover:w-52 group-hover:h-52 group-hover:rounded-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>                            
              <div className="h-0 overflow-hidden transition-all duration-500 group-hover:h-[30rem] group-hover:py-4 flex flex-col justify-center items-center">
                <h2 className="poppins-semibold px-5 text-xl mb-5 text-[#fdfdfd]">{item.name}</h2>
                <p className="px-5 mb-3 text-sm poppins-regular-italic text-[#fdfdfd] ">{item.description}</p>
              </div>
            </div>
         ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvisor;
