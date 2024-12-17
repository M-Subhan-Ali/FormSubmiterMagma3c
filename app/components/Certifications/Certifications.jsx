"use client"
import { useContext, useState } from "react";
import { formsContent } from "../Categories/Categories";
import { CurrentStepUsers } from "../Users/Users";

const Certificaions = ({ onNext }) => {

  const {Certificates,setCertificates,updateSectionData}=useContext(formsContent)
  const {setCurrentStepUser}=useContext(CurrentStepUsers)
  const [startDate, setStartDate] = useState("");
  const today = new Date().toISOString().split("T")[0]; 
  const fields=[  { label: "Certification Name", name:"CertificationName" , type: "text", placeholder: "Certification Name", required: true },
    { label: "Issuing Organization", name:"IssuingOrganization" , type: "text", placeholder: "Issuing Organization", required: true },
    // { label: "Certificate Number", name:"CertificateNumber" , type: "text", placeholder: "Certificate Number", required: true },
    { label: "Start Date", name:"startDate" , type: "date", required: true ,max:today},
    { label: "End Date", name:"endDate" , type: "date", required: true , min:startDate
      ? new Date(new Date(startDate).setFullYear(new Date(startDate).getFullYear() + 10))
          .toISOString()
          .split("T")[0]
      : "",},
    { label: "Certificate Upload", name:"CertificateUpload" , type: "file", required: true ,accept:".jpg,.png,.jpeg"},
    { label: "Institution Name", name:"InstitutionName" , type: "text", placeholder: "Institution Name", required: true },
    { label: "Description", name:"description" , type: "text", placeholder: "Description", required: true },
  ];
 const initialState={
  CertificationName: "",
  IssuingOrganization: "",
  // CertificateNumber: "",
  startDate: "",
  endDate: "",
  CertificateUpload: "",
  InstitutionName: "",
  // YearofCompletion: "",
  description:"",
}

  const OnChangeHandler=(e)=>{
    const {name,value,files}=e.target;
    
    if(name === "DateofIssue"){
      setStartDate(value);
    }

    const validations={
      CertificationName:/^[a-zA-Z ]*$/,
      IssuingOrganization:/^[a-zA-Z ]*$/,
      CertificateNumber:/^[0-9]*$/,
      InstitutionName:/^[a-zA-Z ]*$/,
      VerificationReferenceNumber:/^[0-9]*$/
    }
    
    if(validations[name] && !validations[name].test((value))){
      return
    }
   
    setCertificates({...Certificates,[name]:files ? files[0] : value})
    
  }

  const HandleSubmit = (e) => {
   e.preventDefault();
   setCurrentStepUser(2)
   setCertificates(initialState)
   updateSectionData("Certifications", Certificates);
   onNext(Certificates);
  }

  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg ">
    <form onSubmit={HandleSubmit}>
    <div className="form-first-seperate-border border
             border-gray-300 px-3 my-3  pb-3 rounded">
            <h3 className="font-bold text-2xl py-4">Qualifications/Certificates</h3>
              <hr/>
              <div className="grid grid-cols-2 gap-4 pt-5 pb-8">
              {
                fields.map(({label,type,placeholder,required,maxLength,name,min,max,accept},index)=>(
                <div key={index} 
                className="flex items-center">
                  <h3 className="w-1/3 font-semibold py-2">{label}
                     {required && <span className="text-red-500">*</span>}
                  </h3>
                  <input 
                  type={type}
                  required={required}
                  placeholder={placeholder}
                  name={name}
                  onChange={OnChangeHandler}
                  value={ type === "file" ? undefined : Certificates[name]}
                  maxLength={maxLength} 
                  disabled={name === "DateofExpiry" && startDate === ""}
                  min={min}
                  max={max}
                  accept={accept}
                  className="w-1/2 py-2 px-2 border border-gray-400
                    rounded-md"/>
                    </div>
              ))
              }
              <div className="flex items-center gap-2 ps-2 pt-4">
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

export default Certificaions;