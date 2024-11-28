"use client"
import { useContext } from "react";
import { formsContent } from "../Categories/Categories";

const Certificaions = () => {

  const {Certificates,setCertificates}=useContext(formsContent)

  const OnChangeHandler=(e)=>{
    const {name,value,files}=e.target;
    
    const validations={
      CertificationName:/^[a-zA-Z ]*$/,
      IssuingOrganization:/^[a-zA-Z ]*$/,
      CertificateNumber:/^[0-9]*$/,
      InstitutionName:/^[a-zA-Z ]*$/,
      VerificationReferenceNumber:/^[0-9]*$/
      // DateofIssue:/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2[0-9]|3[01])\/(19|20)\d{2}$/,
      // DateofExpiry:/^(0[1-9]|1[0-2])
    }
    
    if(validations[name] && !validations[name].test((value))){
      return
    }
   
    setCertificates({...Certificates,[name]:files ? files[0] : value})
    

  }

  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg ">
    <form>
    <div className="form-first-seperate-border border
             border-gray-300 px-3 my-3  pb-3 rounded">
            <h3 className="font-bold text-2xl py-2">Qualifications/Certificates</h3>
              <hr />
              <div className="grid grid-cols-2 gap-4">
              {
                [  { label: "Certification Name", name:"CertificationName" , type: "text", placeholder: "Certification Name", required: true },
                  { label: "Issuing Organization", name:"IssuingOrganization" , type: "text", placeholder: "Issuing Organization", required: true },
                  { label: "Certificate Number", name:"CertificateNumber" , type: "text", placeholder: "Certificate Number", required: true },
                  { label: "Date of Issue", name:"DateofIssue" , type: "date", required: true },
                  { label: "Date of Expiry", name:"DateofExpiry" , type: "date", required: true },
                  { label: "Certificate Upload", name:"CertificateUpload" , type: "file", required: true },
                  { label: "Institution Name", name:"InstitutionName" , type: "text", placeholder: "Institution Name", required: true },
                  { label: "Year of Completion", name:"YearofCompletion" , type: "date", required: false },
                  { label: "Verification Reference Number", name:"VerificationReferenceNumber" , type: "text", placeholder: "Verification Reference Number", maxLength: 13, required: true },
                ].map(({label,type,placeholder,required,maxLength,name},index)=>(
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
                  className="w-1/2 py-2 px-2 border border-gray-400
                    rounded-md"/>
                    </div>
              ))
              }
              {/* <h3 className="font-semibold py-2">Certification Name <span className="text-red-500">*</span></h3>
              <input type="text" required  placeholder="Certification Name" className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Issuing Organization <span className="text-red-500">*</span></h3>
              <input type="text"  required placeholder="Issuing Organization" className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Certificate Number <span className="text-red-500">*</span></h3>
              <input type="email" required  placeholder="Certificate Number" className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Date of Issue <span className="text-red-500">*</span></h3>
              <input type="date" required   className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Date of Expiry <span className="text-red-500">*</span></h3>
              <input type="date" required   className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Certificate Upload <span className="text-red-500">*</span></h3>
              <input type="file" required   className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2">Institution Name <span className="text-red-500">*</span></h3>
              <input type="text"  required  placeholder="Institution Name" className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
               <h3 className="font-semibold py-2">Year of Completion  <span className="text-red-500">*</span></h3>
              <input type="date"  className="w-full py-2 px-2 border border-gray-400
               rounded-md"/>
              <h3 className="font-semibold py-2"> Verification Reference Number <span className="text-red-500">*</span></h3>
              <input type="text" maxLength={13} required placeholder=" Verification Reference Number"
               className="w-full border border-gray-400 
              rounded py-2 px-2 "/>
              */}
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