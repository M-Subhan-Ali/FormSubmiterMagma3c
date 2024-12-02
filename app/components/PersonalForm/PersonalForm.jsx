'use client';

import { formsContent } from "@/app/components/Categories/Categories";
import { useContext, useEffect, useState } from "react";
import { CurrentStepUsers } from "../Users/Users";

const PersonalForm = () => {
  const { setCurrentStep, personalInfo, setPersonalInfo ,updateSectionData } = useContext(formsContent);
  const { currentStepUser,setCurrentStepUser } = useContext(CurrentStepUsers);
  const [emailError, setEmailError] = useState("");
  const [maxDob,setMaxDob]=useState("");

  
  useEffect(()=>{
    const today=new Date();
    const maxDate=new Date(today.getFullYear()-18,today.getMonth(),today.getDate());
    const formatDate=maxDate.toISOString().split("T")[0];
    setMaxDob(formatDate);
  },[])


  const OnSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["name", "lastName", "email", "phone", "dob", "P_address", "NIC", "ID_Front", "ID_Back"];
    const missingFields = requiredFields.filter((field) => !personalInfo[field]);

    const regexForEmail = /^[a-zA-Z0-9+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(personalInfo.email &&  !regexForEmail.test((personalInfo.email))){
      alert("Please Enter a Valid Email")
    }


    if (missingFields.length > 0) {
      alert(`Please fill the following fields: ${missingFields.join(", ")}`);
      return;
    }else{
    setCurrentStepUser(1)
    updateSectionData("PersonalForm", personalInfo);
    }
   
  };

  const onHandleChange = (e) => {
    const { name, value, files } = e.target;
    const regexForEmail=/^[a-zA-Z0-9+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    const validations={
     name : /^[a-zA-Z ]*$/,
     lastName: /^[a-zA-Z ]*$/,
     phone:/^[0-9]*$/,
     NIC:/^[0-9]*$/
    }

   if( validations[name] && !validations[name].test((value)) ){
    return ;
   }else if (name === 'email') {
    if (!regexForEmail.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError(""); 
    }
  }else if(name === "dob" ){
    const today=new Date();
    const selectedDate=new Date(value);
    const Eighteen_Years_Ago=new Date(today.getFullYear()-18,today.getMonth(),today.getDate())
   if(selectedDate > today){
    alert("Date of Birth Cannot be in the Future!")
   }else if(selectedDate > Eighteen_Years_Ago){
    alert("You must be Greater than 18 years Old")
   }
  }
   
    setPersonalInfo({ ...personalInfo, [name]: files ? files[0] : value });
  
  };

  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg">
      <form onSubmit={OnSubmit}>
        <div className="form-first-seperate-border border border-gray-300 px-3 my-3 pb-3 rounded">
          <h3 className="font-bold text-2xl pt-4">Personal Information</h3>
          <hr />
          {/* Fields */}
          <div className="grid grid-cols-2 pt-5 pb-8">
          {[
            { label: "Name", name: "name", type: "text" , required: true ,minLength:3,maxLength:50},
            { label: "Last Name", name: "lastName", type: "text", required: true },
            { label: "Email Address", name: "email", type: "email", required: true },
            { label: "Phone Number", name: "phone", type: "text", required: true,maxLength:20},
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Permanent Address", name: "P_address", type: "text",maxLength:150, required: true },
            { label: "NIC", name: "NIC", type: "text",required: true,minLength:13,maxLength:13 },
            { label: "ID Card Front", name: "ID_Front", type: "file", required: true, accept: ".png,.jpg,.jpeg" },
            { label: "ID Card Back", name: "ID_Back", type: "file", required: true , accept: ".png,.jpg,.jpeg" },
            { label : "Verified CNIC from Nadra " , name:"CnicVerified",type:"file",required:true ,accept: ".png,.jpg,.jpeg" }
          ].map(({ label, name, type, required, maxLength ,min, minLength,accept}, index) => (
            <div key={index} className="relative py-2 flex items-center">
              <h3 className="font-semibold flex w-1/3">
                {label} {required && <span className="text-red-500">*</span>}
              </h3>
              <input
                type={type}
                name={name}
                value={type === "file" ? undefined : personalInfo[name]}
                onChange={onHandleChange}
                required={required}
                maxLength={maxLength}
                min={min}
                minLength={minLength}
                accept={accept}
                placeholder={type !== "file" ? label : undefined }
                className={`mx-5 w-1/2 py-2 px-2 border border-gray-400 rounded-md
                  ${emailError && "outline-none border border-none"}`}
              />
              {name === "email" && emailError && (
                  <span className="absolute  right-[15%] text-red-500 text-xs">{emailError}</span>
                )}
            </div>
          ))}
         
          {/* Terms & Conditions */}
          <div className="flex items-center gap-2  pt-4">
            <input type="checkbox" required className="cursor-pointer" />
            <p className="text-sm">
              I Agree To the Mobile Repair{" "}
              <span className="text-blue-500 underline font-semibold ps-1">terms & conditions</span>
            </p>
          </div>
          </div>


          <button
            type="submit"
            className="flex justify-center items-center border mt-5 mx-auto border-gray-400 rounded py-2 px-7 hover:bg-blue-500 hover:text-white"
          >
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
