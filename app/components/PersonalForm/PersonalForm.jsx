'use client';

import { formsContent } from "@/app/InformationSubmition/page";
import { useContext, useState } from "react";

const PersonalForm = () => {
  const { setCurrentStep, personalInfo, setPersonalInfo } = useContext(formsContent);
  const [emailError, setEmailError] = useState("");

  const Save = (e) => {
    e.preventDefault();
    const requiredFields = ["name", "lastName", "email", "phone", "dob", "P_address", "NIC", "ID_Front", "ID_Back"];
    const missingFields = requiredFields.filter((field) => !personalInfo[field]);

    if (missingFields.length > 0) {
      alert(`Please fill the following fields: ${missingFields.join(", ")}`);
    } else {
      setCurrentStep(1);
    }
  };

  const onHandleChange = (e) => {
    const { name, value, files } = e.target;
    const regexForEmail=/^[a-zA-Z0-9+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   if( name ===  'name' && !/^[a-zA-Z ]*$/.test((value)) ){
    return ;
   }else if(name === "lastName" && !/^[a-zA-Z ]*$/.test((value))){
    return
   }else if(name === "NIC" && !/^[0-9]{12,13}$/.test((value))){
    return     //becasue i'm putting it into onchange event
   }
  //  else if(name === "phone" && !/^[0-9]{11,20}$/.test((value))){
  //   return ;
  //  }

   if (name === 'email') {
    if (!regexForEmail.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError(""); // Clear error if the email is valid
    }
  }

  
    setPersonalInfo({ ...personalInfo, [name]: files ? files[0] : value });
  };
  console.log(personalInfo)

  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg">
      <form>
        <div className="form-first-seperate-border border border-gray-300 px-3 my-3 pb-3 rounded">
          <h3 className="font-bold text-2xl pt-2">Personal Information</h3>
          <hr />
          {/* Fields */}
          <div className="grid grid-cols-2">
          {[
            { label: "Name", name: "name", type: "text" , required: true ,minLength:3,maxLength:50},
            { label: "Last Name", name: "lastName", type: "text", required: true },
            { label: "Email Address", name: "email", type: "email", required: true },
            { label: "Phone Number", name: "phone", type: "number",min:0 ,maxLength:20, required: true },
            { label: "Date of Birth", name: "dob", type: "date", required: true },
            { label: "Permanent Address", name: "P_address", type: "text",maxLength:150, required: true },
            { label: "Residential Address", name: "R_address", type: "text",maxLength:150, required: false },
            { label: "NIC", name: "NIC", type: "text",required: true },
            { label: "ID Card Front", name: "ID_Front", type: "file", required: true },
            { label: "ID Card Back", name: "ID_Back", type: "file", required: true },
          ].map(({ label, name, type, required, maxLength ,min, minLength, pattern}, index) => (
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
                placeholder={type !== "file" ? label : undefined }
                className={`mx-5 w-1/2 py-2 px-2 border border-gray-400 rounded-md
                  ${emailError && "outline-none border border-none"}`}
              />
              {name === "email" && emailError && (
                  <span className="absolute  right-[15%] text-red-500 text-xs">{emailError}</span>
                )}
            </div>
          ))}
         
          </div>

          {/* Terms & Conditions */}
          <div className="flex gap-2 ps-2 pt-4">
            <input type="checkbox" required className="cursor-pointer" />
            <p className="text-sm">
              I Agree To the Mobile Repair{" "}
              <span className="text-blue-500 underline font-semibold ps-1">terms & conditions</span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            onClick={Save}
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
