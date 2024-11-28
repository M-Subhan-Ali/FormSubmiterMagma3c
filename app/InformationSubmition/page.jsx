"use client"
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { searchContext } from "../layout";


 const InformationSubmition= ()=>{
  const [description,setDescription]=useState(0);
  const [showCategory,setShowCategory]=useState(false);
  const {next,setNext}=useContext(searchContext);
  const router=useRouter();

  const Handler=(e)=>{
   const value=e.target.value;
   setNext(value); //for the forms navigation
   if(value=== "Sole Proprietorship"){
    setDescription(1);
   }else if(value === "Shop with Multiple Technicians"){
    setDescription(2);
   }else if(value === "Multi Sites & Multi Users"){
    setDescription(3)
   }

  }

  const SaveNextHandler=(e)=>{
    e.preventDefault();
    if (!next) {
      alert("Please select a business type!");
      return;
    }
    router.push("/FormBusinesses")
    setShowCategory(true);
  }
  console.log(description)
  console.log(next)
  console.log(showCategory)
  return(
  <>
       <main className="w-full py-5">
            <h1 className="text-center font-bold text-4xl italic">Business Registration</h1>
             <div className="mx-auto container text-center  mt-5">
              <h3 className="font-semibold text-2xl pt-6 ">Business Type</h3>
              <div className="flex justify-around items-start gap-5 pt-10">
                <div className="Left_Side w-1/2 bg-gray-300 p-5 rounded">
                 <select 
                 onChange={Handler}
                 defaultValue=""
                 className="w-full py-2 cursor-pointer">
                   <option value="" disabled >Select Business Type</option>
                   <option value="Sole Proprietorship">Sole Proprietorship</option>
                   <option value="Shop with Multiple Technicians">Shop with Multiple Technicians</option>
                   <option value="Multi Sites & Multi Users">Multi Sites & Multi Users</option>
                 </select>
                </div>

                <div className="Right_Side w-1/2 bg-gray-300 rounded">
                  {description === 0 && <p className="py-6 px-4 text-lg font-medium text-gray-700">Business Types</p>}
                  
                  {description === 1 && <p className="py-6 px-4 leading-10 text-lg font-medium text-gray-700">A sole proprietorship 
                  is an unincorporated business entity that is owned by a single person. </p>}

                  {description === 2 && <p className="py-6 px-4 leading-10 text-lg font-medium text-gray-700">A service-based business
                     with multiple technicians operates from a centralized shop where skilled professionals provide 
                     specialized services</p>}
                 
                  {description === 3 && <p className="py-6 px-4 leading-10 text-lg font-medium text-gray-700">A Multi-Site & 
                    Multi-User Business operates across multiple locations, serving a broad customer base through 
                    interconnected systems</p>}

                </div>
              
              </div>

            
             
              <button 
              onClick={SaveNextHandler}
              className="py-2 px-4 mt-[10%] text-white bg-black 
              hover:bg-blue-600 rounded">
                Submit & Next
                </button>
             </div>
          {/* {showCategory &&  <Categories/>} */}
          {/* <div className="w-3/4 sm:w-4/5 mx-auto">
          <div className="flex justify-between  pb-3 ">
          {steps.map((step,index)=>(
            <div onClick={()=>setCurrentStep(index)}
             key={index} className={`w-1/4 flex flex-col justify-center items-center pb-4
             cursor-pointer border-b-2 transition-colors duration-500 
             ${currentStep >= index ? " border-green-500" : "border-white"} `} >
               <div className={`flex justify-center items-center h-10 w-10 rounded-full  font-semibold
                 ${currentStep >= index ? "bg-green-500 text-white" : "bg-white text-black" }`}>
                {index+1}
               </div>
               <p className="font-semibold">{step}</p>
            </div>
            ))}
            </div>
            <div className="bg-white">
          <formsContent.Provider value={{setCurrentStep,personalInfo,
            setPersonalInfo,storePersonal,setStorePersonal,BusinessInfo,
            setBusinessInfo
            }}>
            {currentStep ===0 && <BusinessDetails/>}
            {currentStep ===1 && <PersonalForm/>}
            {currentStep ===2 && <Certificaions/>}
            {currentStep ===3 && <Experience/>}
          </formsContent.Provider>
            </div>
         </div>    */}
      </main>
  </>)
}

export default InformationSubmition;