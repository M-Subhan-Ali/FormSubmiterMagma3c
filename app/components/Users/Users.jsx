'use client'

import { createContext, useContext, useState } from "react";
import PersonalForm from "../PersonalForm/PersonalForm";
import Certificaions from "../Certifications/Certifications";
import Experience from "../Experience/Experience";
import { formsContent } from "../Categories/Categories";

export const CurrentStepUsers=createContext();
const Users = () => {
  const { next,setNext}=useContext(formsContent)
  const [staffData, setStaffData] = useState([]);
  const [currentStaff, setCurrentStaff] = useState(1);
  const [applicationCount, setApplicationCount] = useState(1);
  const [currentStepUser,setCurrentStepUser]=useState(0);

  const steps = (() => {
    switch (next) {
      case "Sole Proprietorship":
        return [
          "Personal Information",
          "Qualifications/Certificates",
          "Experience Information",
        ];
      case "Shop with Multiple Technicians":
        return ["Technician Information", "Technician Information"];
      case "Multi Sites & Multi Users":
        return ["Business Information", "Location Information", "Users"];
      default:
        return [""];
    }
  })();
  const handleNextStep = (data) => {
    console.log("Before step update:", currentStepUser);
  
    if (currentStepUser < steps.length - 1) {
      setCurrentStepUser(prev => {
        const nextStep = prev + 1;
        console.log("Updating currentStepUser from", prev, "to", nextStep);
        return nextStep;
      });
    } else {
      setStaffData((prev) => [...prev, { application: applicationCount, data }]);
      setApplicationCount((prev) => prev + 1); // Increment application count
      setCurrentStepUser(0); // Reset to the first step for the next staff member
    }
  
    console.log("After step update:", currentStepUser);
  };
  
  
  // Prompt user to add another staff member or finalize
  const handleAddMoreStaff = () => {
    setCurrentStepUser(0); // Reset steps for the new staff member
    setCurrentStaff((prev) => prev + 1); // Increment staff count
  };
  
  console.log(currentStepUser+"hehehehhe")
  return(
  <>
  <div className="flex justify-between  pb-3 ">
          {steps.map((step,index)=>(
            <div onClick={()=>setCurrentStepUser(index)}
             key={index} className={`${next==="Shop with Multiple Technicians" && "hidden"} w-1/2 flex flex-col justify-center items-center pb-4
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
            <CurrentStepUsers.Provider value={{ currentStepUser, setCurrentStepUser }}>
          <div className="text-center text-lg font-semibold mb-4">
            Application {applicationCount}, Staff Member {currentStaff}
          </div>
          {next === "Sole Proprietorship" || next === "Shop with Multiple Technicians" ? (
            <>
              {currentStepUser === 0 && <PersonalForm onNext={handleNextStep} />}
              {currentStepUser === 1 && <Certificaions onNext={handleNextStep} />}
              {currentStepUser === 2 && <Experience onNext={handleNextStep} />}
              {currentStepUser === 3 && (
                <div className="flex flex-col items-center">
                  <p>Do you want to add another staff member?</p>
                  <button
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddMoreStaff}
                  >
                    Yes
                  </button>
                  <button
                    className="mt-3 bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => console.log("Finalized Data:", staffData)}
                  >
                    No, Finalize
                  </button>
                </div>
              )}
            </>
          ) : (
            <div></div>
          )}
        </CurrentStepUsers.Provider>
            </div>
  </>
  )
}
export default Users;