'use client'

import { createContext, useState } from "react";
import PersonalForm from "../PersonalForm/PersonalForm";
import Certificaions from "../Certifications/Certifications";
import Experience from "../Experience/Experience";

export const CurrentStepUsers=createContext();
const Users = () => {
  const steps= [
    "Personal Information",
    "Qualifications/Certificates",
    "Experience Information",
  ]
  const [currentStepUser,setCurrentStepUser]=useState(0);
  return(
  <>
  <div className="flex justify-between  pb-3 ">
          {steps.map((step,index)=>(
            <div onClick={()=>setCurrentStepUser(index)}
             key={index} className={`w-1/2 flex flex-col justify-center items-center pb-4
             cursor-pointer border-b-2 transition-colors duration-500 
             ${currentStepUser >= index ? " border-blue-500" : "border-white"} `} >
               <div className={`flex justify-center items-center h-10 w-10 rounded-full  font-semibold
                 ${currentStepUser >= index ? "bg-blue-500 text-white" : "bg-white text-black" }`}>
                {index+1}
               </div>
               <p className="font-semibold">{step}</p>
            </div>
            ))}
            </div>
            <div>
              <CurrentStepUsers value={{currentStepUser,setCurrentStepUser}}>
             {currentStepUser  === 0 && <PersonalForm/>}
             {currentStepUser  === 1 && <Certificaions/>}
             {currentStepUser  === 2 && <Experience/>}
              </CurrentStepUsers>
            </div>
  </>
  )
}
export default Users;