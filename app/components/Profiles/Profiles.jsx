import Image from "next/image";
import { useContext } from "react";
import { searchContext } from "@/app/layout";
const Profiles = () => {
  const {filterdData}=useContext(searchContext);
  return(
  <div>
    <div className="grid grid-cols-3 gap-3 mx-4 py-5">
    {filterdData.map((shop, index) => (
          <div key={index} className="grid border border-gray-700 rounded p-4 mt-5">
            <Image
              src={shop.image}
              width={500}
              height={500}
              alt={shop.shopName}
              className="rounded hover:cursor-pointer"
            />
            <h2 className="font-bold hover:text-red-600 hover:cursor-pointer text-lg mt-2 text-center">
              {shop.shopName}
            </h2>
            <p>{shop.desc}</p>
            <p className="font-bold text-center text-xl">{shop.city}</p>
          </div>
        ))}
    </div>
  </div>)
}

export default Profiles;