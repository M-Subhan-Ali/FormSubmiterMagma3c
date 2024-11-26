const Experience = () => {
  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg ">
    <form>
    <div className="form-first-seperate-border border
             border-gray-300 px-3 my-3  pb-3 rounded">
            <h3 className="font-bold text-2xl py-2">Experience Information</h3>
              <hr />
              <div className="grid grid-cols-2 gap-2">
              {[
                  { label: "Role/Position", type: "text", placeholder: "Role/Position", required: true },
                  { label: "Company/Organization Name", type: "text", placeholder: "Company/Organization Name", required: true },
                  { label: "Start Date", type: "date", required: true },
                  { label: "Year of Completion", type: "date", required: false },
                  { label: "Total Experience in Years", type: "number", min: 0, required: true },
                  { label: "Institution Name", type: "text", placeholder: "Institution Name", required: true }
              ].map(({label,type,placeholder,required,min},index)=>(
              <div key={index}
               className="flex items-center justify-between mx-3">
               <h3 className="w-1/3 font-semibold py-2">{label}
                {required && <span className="text-red-500">*</span>}
                </h3>
              <input
               type={type}
               required={required} 
               placeholder={placeholder}
               className="w-1/2 py-2 px-2 border border-gray-400
               rounded-md"/>
              </div>
              ))
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