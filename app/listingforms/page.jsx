'use client'
const Listingforms = ()=>{
return(<>
      <main className="bg-gray-200 w-full py-5">
          <div className="bg-white w-3/4 sm:w-1/2 mx-auto">
          <h1 className="font-bold text-2xl sm:text-4xl pt-3 ps-5">Listing Form</h1>
           <form className="px-3">
            <div className="form-first-seperate-border border
             border-gray-300 px-3 my-3  pb-3 rounded">
            <h3 className="font-semibold pt-2">Basic Information</h3>
              <hr />
              <h3 className="font-semibold py-2">Listing Type <span className="text-red-500">*</span></h3>
              <select  defaultValue="" className="w-full border border-gray-400 
              rounded py-2 cursor-pointer">
                <option value="" disabled hidden >Select an option</option>
                <option value="Business Directory Listing"> Business Directory Listing</option>
                <option value="Service Listings">Service Listings</option>
                <option value="Product Listings">Product Listings</option>
              </select>
              <h3 className="font-semibold py-2">Category <span className="text-red-500">*</span></h3>
          <select name="services" defaultValue="" id="" className="w-full border border-gray-400 
              rounded py-2 cursor-pointer">
              <option value="" disabled hidden>
               Select a service
              </option>
              <option value="screen-repair">Screen Repair</option>
              <option value="battery-replacement">Battery Replacement</option>
              <option value="water-damage-repair">Water Damage Repair</option>
              <option value="charging-port-repair">Charging Port Repair</option>
              <option value="camera-repair">Camera Repair</option>
              <option value="speaker-microphone-repair">Speaker/Microphone Repair</option>
              <option value="button-replacement">
                   Button Replacement (Power/Home/Volume Buttons)
              </option>
              <option value="software-issues">
                   Software Issues (OS updates, app crashes, data recovery)
              </option>
              <option value="unlocking-services">
                   Unlocking Services (Password/PIN unlocking, carrier unlocking)
              </option>
              <option value="diagnostics-testing">Diagnostics and Testing</option>
              <option value="mobile-cleaning-services">
                  Mobile Cleaning Services (Dust removal, internal cleaning)
              </option>
          </select>
            </div>
            <div className="form-second-seperate-border border
             border-gray-300 px-3 pb-3 my-3 rounded">
            <h3 className="font-semibold pt-2">Business Identity</h3>
              <hr />
              <h3 className="font-semibold py-2"> Business Name <span className="text-red-500">*</span></h3>
              <input type="text" required placeholder=" Business Name"
               className="w-full border border-gray-400 
              rounded py-1 px-2"/>
              <h3 className="font-semibold py-2"> Owner Name <span className="text-red-500">*</span></h3>
              <input type="text" required placeholder=" Owner Name"
               className="w-full border border-gray-400 
              rounded py-1 px-2"/>
              <h3 className="font-semibold py-2">Logo <span className="text-red-500">*</span></h3>
              <input type="file" required
               className="w-full border border-gray-400 
              rounded  cursor-pointer"/>
              <h3 className="font-semibold py-2"> Email Address <span className="text-red-500">*</span></h3>
              <input type="email" required placeholder=" Email"
               className="w-full border py-1 px-2 border-gray-400 
              rounded  "/>
              <h3 className="font-semibold py-2"> Phone Number <span className="text-red-500">*</span></h3>
              <input type="number"  required placeholder="Number"
               className="w-full border py-1 px-2 border-gray-400 
              rounded  "/>
              <h3 className="font-semibold py-2"> Business Full Photo  <span className="text-red-500">*</span></h3>
              <input type="file"  required 
               className="w-full border border-gray-400 
              rounded  "/>
              <h3 className="font-semibold py-2"> Address <span className="text-red-500">*</span></h3>
              <input type="text"  required placeholder="Address"
               className="w-full border py-1 px-2 border-gray-400 
              rounded  "/>
              <h3 className="font-semibold py-2"> Certificate of Incorporation  (Registered companies)<span className="text-red-500">*</span></h3>
              <input type="file"  required placeholder=" Certificate of Incorporation"
               className="w-full border border-gray-400 
              rounded  "/>
              <h3 className="font-semibold py-2"> Business License or Trade License<span className="text-red-500">*</span></h3>
              <input type="file"  required placeholder="  Business License or Trade License"
               className="w-full border border-gray-400 
              rounded  "/>
              <h3 className="font-semibold py-2"> Taxpayer Identification Number (TIN)<span className="text-red-500">*</span></h3>
              <input type="number"  required placeholder=" Taxpayer Identification Number (TIN)"
               className="w-full border border-gray-400 
              rounded  py-1 px-2 "/>
            </div>
            <div className="form-third-seperate-border border
             border-gray-300 px-3 pb-3 my-3 rounded">
            <h3 className="font-semibold pt-2">Business Verification</h3>
              <hr />
              <h3 className="font-semibold py-2"> Utility Bills  <span className="text-red-500">*</span></h3>
              <input type="file" required placeholder=" Business Name"
               className="w-full border border-gray-400 
              rounded "/>
              <h3 className="font-semibold py-2"> Rent Agreement (if operating from a rented space).</h3>
              <input type="file" required placeholder=" Rent Agreement"
               className="w-full border border-gray-400 
              rounded "/>
              <h3 className="font-semibold py-2"> Repair Certifications</h3>
              <input type="file" required placeholder=" Rent Agreement"
               className="w-full border border-gray-400 
              rounded "/>
             
            </div>
            <div className="form-fourth-seperate-border border
             border-gray-300 px-3 pb-3 my-3 rounded">
            <h3 className="font-semibold pt-2">Personal Details </h3>
              <hr />
              <h3 className="font-semibold py-2"> National ID Card Number <span className="text-red-500">*</span></h3>
              <input type="text" maxLength={13} required placeholder=" NIC"
               className="w-full border border-gray-400 
              rounded "/>
              <h3 className="font-semibold py-2"> Front Photo <span className="text-red-500">*</span> </h3>
              <input type="file" required placeholder=" Front Photo"
               className="w-full border border-gray-400 
              rounded "/>
              <h3 className="font-semibold py-2"> Back Photo <span className="text-red-500">*</span> </h3>
              <input type="file" required placeholder=" Back Photo"
               className="w-full border border-gray-400 
              rounded "/>
              <h3 className="font-semibold py-2"> Repair Certifications</h3>
              <input type="file" required placeholder=" Rent Agreement"
               className="w-full border border-gray-400 
              rounded "/>
            </div>
            <div className="flex gap-2 ps-2">
              <input type="checkbox" className="cursor-pointer" />
              <p className="text-sm">I Agree To the Mobile Repair 
              <span className="text-blue-500 underline font-semibold ps-1">terms & conditions </span>
              </p>
            </div>
            <button className="flex justify-center items-center border mt-5 mx-auto
             border-gray-400 rounded py-2 px-7 hover:bg-blue-500 hover:text-white ">
                Submit
            </button>
           </form>
         </div>   
      </main>
      </>)
}
export default Listingforms;