"use client"
import { useContext, useState } from "react";
import { formsContent } from "../Categories/Categories";

const Experience = () => {
  const {Experience,setExperience,setCurrentStep}=useContext(formsContent);
  const [isCurrentPosition,setIsCurrentPosition]=useState(false);

  const today = new Date().toISOString().split("T")[0]; 


  
  const HandleCheckBox=(e)=>{
   const {name,checked}=e.target;
   setIsCurrentPosition(checked);
   setExperience({...Experience,[name]:checked});
  }

  const OnChangeHandler=(e)=>{
   const {name,value}=e.target;
   const validations={
    title:/^[a-zA-Z ]*$/,
    companyOrganizationName:/^[a-zA-Z0-9 ]*$/,
   }

   if(validations[name] && !validations[name].test((value))){
    return;
   }
   setExperience({...Experience,[name]:value});
   
  }

  const HandlerSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg ">
    <form onSubmit={HandlerSubmit}>
    <div className="form-first-seperate-border border
             border-gray-300 px-3 my-3  pb-3 rounded">
            <h3 className="font-bold text-2xl py-2">Experience Information</h3>
              <hr />
              <div className="grid grid-cols-2 gap-4">
              {[
               { label: "Title", name: "title", type: "text", placeholder: "Title", required: true },
               { label: "Employment Type", name: "employmentType", type: "select", options: ["Full Time", "Part Time", "Contract", "Internship", "Freelance"], required: true },
               { label: "Company/Organization Name", name: "companyOrganizationName", type: "text", placeholder: "Company/Organization Name", required: true },
               { label: "I am currently working in this role", name: "currentlyWorking", type: "checkbox" },
               { label: "Start Date", name: "startDate", type: "date", required: true,max:today },
               { label: "End Date", name: "endDate", type: "date", required: true ,max:today},
               { label: "Location", name: "location", type: "text", placeholder: "Location", required: true },
               { label: "Location Type", name: "locationType", type: "select", options: ["On-Site", "Hybrid"], required: true }
                // { label: "Role/Position", type: "text", placeholder: "Role/Position", required: true },
                // { label: "Year of Completion", type: "date", required: false },
                // { label: "Total Experience in Years", type: "number", min: 0, required: true },
                // { label: "Institution Name", type: "text", placeholder: "Institution Name", required: true }
              ].map(({label,type,placeholder,required,min,max,options,name},index)=>{
                // if(label === "End Date" && isCurrentPosition){
                //   return null;
                // }
                return(
              <div key={index}
               className={`flex items-center ${label === "I am currently working in this role" ? "justify-start gap-3" : 
                "justify-between"} mx-3`}>
                 {type === "checkbox" && (
                   <input
                   type={type}
                   checked={isCurrentPosition}
                   name={name}
                   onChange={HandleCheckBox}
                   className="p-2 w-5 h-5 cursor-pointer border border-gray-400 rounded-md"
                   />
                    )}
               <h3 className={`${label === "I am currently working in this role" ? "w-1/2" : "w-1/3"} font-semibold py-2`}>{label}
                {required && <span className="text-red-500">*</span>}
                </h3>
                {(type === "text" || type === "date" || type === "number") && (
                  <input
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    name={name}
                    onChange={OnChangeHandler}
                    value={Experience[name] || ""}
                    options={options}
                    disabled={label === "End Date" && isCurrentPosition}
                    min={min}
                    max={max}
                    className="w-1/2 py-2 px-2 border border-gray-400 rounded-md"
                  />
                )}
                  {type === "select" && (
                   <select
                    // defaultValue={""}
                    required={required}
                    name={name}
                    options={options} 
                    onChange={OnChangeHandler}
                    value={Experience[name] || ""}
                    className="w-1/2 py-2 px-2 border border-gray-400 rounded-md"
                  >
                    <option value="" disabled >Select {label}</option>
                     {options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                 )}
                 
              </div>
              )})
              }

              {/* <h3 className="font-semibold py-2">Role/Position<span className="text-red-500">*</span></h3>
              <input type="text" required  placeholder="Role/Position" className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Company/Organization Name  <span className="text-red-500">*</span></h3>
              <input type="text"  required placeholder="Company/Organization Name " className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Start Date <span className="text-red-500">*</span></h3>
              <input type="date" required   className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
               <h3 className="font-semibold py-2">Year of Completion  <span className="text-red-500">*</span></h3>
              <input type="date"  className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
               <h3 className="font-semibold py-2">Total Experience in Years <span className="text-red-500">*</span></h3>
              <input type="number" required min={0}   className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              
              <h3 className="font-semibold py-2">Institution Name <span className="text-red-500">*</span></h3>
              <input type="text"  required  placeholder="Institution Name" className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
               */}
            
             
              <div className="flex gap-2 ps-2 pt-4">
              <input type="checkbox" required className="cursor-pointer" />
              <p className="text-sm">I Agree To the Mobile Repair 
              <span className="text-blue-500 underline font-semibold ps-1">terms & conditions </span>
              </p>
            </div>
            </div>

              <button className="flex justify-center items-center border mt-5 mx-auto
             border-gray-400 rounded py-2 px-7 hover:bg-blue-500 hover:text-white ">
                Save & Next
            </button>
            </div>
    </form>
  </div>
)
}

export default Experience;