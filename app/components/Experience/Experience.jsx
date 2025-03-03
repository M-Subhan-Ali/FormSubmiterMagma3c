"use client"
import { useContext, useState } from "react";
import { formsContent } from "../Categories/Categories";

const Experience = ({ onNext }) => {
  const {Experience,setExperience,updateSectionData,modalNumber,setModalNumber}=useContext(formsContent);
  const [isCurrentPosition,setIsCurrentPosition]=useState(false);
  
  const initialState={
    title: "",
    employmentType: "",
    companyOrganizationName: "",
    currentlyWorking: "",
    startDate: "",
    endDate: "",
    location: "",
    locationType: "",
    description:"",
  }

  const today = new Date().toISOString().split("T")[0]; 

  const fields=[
    { label: "Title", name: "title", type: "text", placeholder: "Title", required: true },
    { label: "Location", name: "location", type: "text", placeholder: "Location", required: true },
    { label: "Employment Type", name: "employmentType", type: "select", options: ["Full Time", "Part Time", "Contract", "Internship", "Freelance"], required: true },
    { label: "Company/Organization Name", name: "companyOrganizationName", type: "text", placeholder: "Company/Organization Name", required: true },
    { label: "Start Date", name: "startDate", type: "date", required: true,max:today },
    { label: "I am currently working in this role", name: "currentlyWorking", type: "checkbox" },
    { label: "End Date", name: "endDate", type: "date", required: true ,max:today},
    { label: "Description", name:"description" , type: "text", placeholder: "Description", required: true },
   ];
  
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
    updateSectionData("Experience", Experience);
    setExperience(initialState)
    // alert("Your Sole Propretiership Application Has Successfully Submit");
    setModalNumber((prev)=>prev+1);
    onNext(Experience)
  }

  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg ">
    <form onSubmit={HandlerSubmit}>
    <div className="form-first-seperate-border border 
             border-gray-300 px-3 my-3  p-3 rounded">
            <h3 className="font-bold text-2xl py-4">Experience Information</h3>
              <hr />
              <div className="grid grid-cols-2 gap-4 pt-5 pb-8">
              {fields.map(({label,type,placeholder,required,min,max,options,name},index)=>{
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

           
            
             
              <div className="flex gap-2 ps-2 pt-4">
              <input type="checkbox" required className="cursor-pointer w-5 h-5" />
              <p className="text-sm">If Provided Information is Wrong then Your Application might take longer. 
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