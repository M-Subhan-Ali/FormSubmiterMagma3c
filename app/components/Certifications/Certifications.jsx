const Certificaions = () => {
  return (
    <div className="Personal-Form shadow-gray-600 shadow-lg ">
    <form>
    <div className="form-first-seperate-border border
             border-gray-300 px-3 my-3  pb-3 rounded">
            <h3 className="font-bold text-2xl pt-2">Qualifications/Certificates</h3>
              <hr />
              <h3 className="font-semibold py-2">Certification Name <span className="text-red-500">*</span></h3>
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
             
              <div className="flex gap-2 ps-2 pt-4">
              <input type="checkbox" required className="cursor-pointer" />
              <p className="text-sm">I Agree To the Mobile Repair 
              <span className="text-blue-500 underline font-semibold ps-1">terms & conditions </span>
              </p>
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