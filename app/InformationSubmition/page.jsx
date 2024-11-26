'use client'

import { createContext, useState } from "react"
import PersonalForm from "../components/PersonalForm/PersonalForm";
import BusinessDetails from "../components/BusinessDetails/BusinessDetails";
import Certificaions from "../components/Certifications/Certifications";
import Experience from "../components/Experience/Experience";
 
export const formsContent=createContext();

 const InformationSubmition= ()=>{
  const steps=['Personal Information','Business Information','Qualifications/Certificates','Experience Information']
  const [currentStep,setCurrentStep]=useState(3);
  const [storePersonal,setStorePersonal]=useState([])
  const [BusinessInfo,setBusinessInfo]=useState({
    businessName:"",
    ownerName:"",
    logo:"",
    businessEmail:"",
    businessPhone:"",
    businessFullPhoto:"",
    address:"",
    COI:"",
    businessLicense:"",
    TIN:"",
    utilityBills:"",
    rentAgreement:"",
    repairCertications:"",
    paymentMethods:"",
    socialLinks:"",
    })
  const [storeCertificates,setStoreCertificates]=useState([])
  const [storeExperience,setStoreExperience]=useState([])
  const [personalInfo,setPersonalInfo]=useState({
    name:"",
    lastName:"",
    email:"",
    phone:"",
    dob:"",
    P_address:"",
    R_address:"",
    NIC:"",
    ID_Front:"",
    ID_Back:"",
    CnicVerified:""
  })

  return(
  <>
       <main className="bg-gray-200 w-full py-5">
          <div className="w-3/4 sm:w-4/5 mx-auto">
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
            {currentStep ===0 && <PersonalForm/>}
            {currentStep ===1 && <BusinessDetails/>}
            {currentStep ===2 && <Certificaions/>}
            {currentStep ===3 && <Experience/>}
          </formsContent.Provider>
            </div>
         </div>   
      </main>
  </>)
}

export default InformationSubmition;