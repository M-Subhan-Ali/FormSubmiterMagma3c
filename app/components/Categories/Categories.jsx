'use client'

import { createContext, useContext, useState } from "react"
import PersonalForm from "../PersonalForm/PersonalForm";
import BusinessDetails from "../BusinessDetails/BusinessDetails";
import Certificaions from "../Certifications/Certifications";
import Experience from "../Experience/Experience";
import { searchContext } from "@/app/layout";
import Users from "../Users/Users";

export const formsContent=createContext();
const Categories = ()=>{
  const{next,setNext}=useContext(searchContext);
  const steps= (() => {
    switch (next) {
      case "Sole Proprietorship":
        return [
          "Business Information",
          "Users"
        ];
      case "Shop with Multiple Technicians":
        return ['Business Information','Technicians'];
      case "Multi Sites & Multi Users":
        return ["Business Information", "Location Information", "Users"];
      default:
        return [""];
    }
  })();
  const [currentStep,setCurrentStep]=useState(0);
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
    socialLinks:"",
    paymentMethods:"",
    })
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
  
  const [Certificates,setCertificates]=useState({
    CertificationName: "",
    IssuingOrganization: "",
    CertificateNumber: "",
    DateofIssue: "",
    DateofExpiry: "",
    CertificateUpload: "",
    InstitutionName: "",
    YearofCompletion: "",
    VerificationReferenceNumber: "",
  })

  const [Experience,setExperience]=useState({
    title: "",
    employmentType: "",
    companyOrganizationName: "",
    currentlyWorking: "",
    startDate: "",
    endDate: "",
    location: "",
    locationType: ""
  })

return(
  <div className="w-3/4 sm:w-4/5 mx-auto">
          <div className="flex justify-between  pb-3 ">
          {steps.map((step,index)=>(
            <div onClick={()=>setCurrentStep(index)}
             key={index} className={`w-1/2 flex flex-col justify-center items-center pb-4
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
            setPersonalInfo,storePersonal,Certificates,setCertificates,setStorePersonal,BusinessInfo,
            setBusinessInfo,Experience,setExperience
            }}>
            {currentStep ===0 && <BusinessDetails/>}
            {currentStep ===1 && <Users/>}
            {/* 
            {currentStep ===1 && <PersonalForm/>}
            {currentStep ===2 && <Certificaions/>}
            {currentStep ===3 && <Experience/>} */}
          </formsContent.Provider>
            </div>
         </div> 
)
}
export default Categories;