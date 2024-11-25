'use client'

import { useState } from "react";

const BusinessDetails = () => {
 const [socialLinks,setSocialLinks]=useState([""])

 const HandleChange = (index,value)=>{
  const store_Link=[...socialLinks];
  store_Link[index]=value;
  setSocialLinks(store_Link);
 }

 const handleAddButton = (e) => {
  e.preventDefault();
  setSocialLinks([...socialLinks,""])
 }

 const HandleRemove = (index) => {
   const store_input=socialLinks.filter((_,i)=> i !== index);
   setSocialLinks(store_input);
 }
  return (
  <>
  <div className="Business-Form shadow-gray-600 shadow-lg ">
    <form>
    <div className="form-Second border
             border-gray-300 px-3 my-3  pb-3 rounded">
            <h2 className="font-bold pt-2 text-2xl">Business Information</h2>
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
              <h3 className="font-semibold py-2"> Business Email Address <span className="text-red-500">*</span></h3>
              <input type="email" required placeholder="Business Email"
               className="w-full border py-1 px-2 border-gray-400 
              rounded  "/>
              <h3 className="font-semibold py-2"> Phone Number <span className="text-red-500">*</span></h3>
              <input type="number" min={0}  required placeholder="Number"
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
              <h3 className="font-semibold py-2"> Location <span className="text-red-500">*</span></h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13602.980549932341!2d74.33168844235838!3d31.531159149189364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1732263194720!5m2!1sen!2s"
               width="600" height="450" allowFullScreen="" loading="lazy"
               className="w-full"
               referrerPolicy="no-referrer-when-downgrade"></iframe>
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
               <h3 className="font-semibold py-2"> Payment Method</h3>
               <div className="flex gap-2">

               <label className="flex items-center space-x-2">
               <input
                 type="radio"
                 name="paymentMethod"
                 value="cash"
                 className="w-4 h-4 border-gray-400 cursor-pointer"
               />
               <span>Cash</span>
             </label>
               <label className="flex items-center space-x-2">
               <input
                 type="radio"
                 name="paymentMethod"
                 value="Card"
                 className="w-4 h-4 border-gray-400 cursor-pointer"
               />
               <span>Card</span>
             </label>
             </div>
             <h3 className="font-semibold py-2"> Social Media Links</h3>
             {socialLinks.map((links,index)=>(
              <div className="border border-gray-400 
                 rounded mb-4"
              key={index}>
                <input
                 onChange={(e)=>(HandleChange(index,e.target.value))}
                 value={links}
                 type="text" required placeholder="Social Links"
                 className="w-11/12  py-1 px-2 outline-none"/>
              {socialLinks.length >1 && 
              <button 
              onClick={()=>HandleRemove(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-md">
                remove
              </button>
              }
                 </div>
              ))}
              <button 
              onClick={handleAddButton}
              className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4">
                Add More
              </button>
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
  </>
)
}
export default BusinessDetails;