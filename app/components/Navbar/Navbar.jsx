'use client'
import Image from "next/image";
import { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { searchContext } from "@/app/layout";
import Link from "next/link";


const Navbar = () => {
  const menu_Items = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Certified Technicians", path: "/technicians" },
    { name: "Listing Form", path: "/InformationSubmition" },
    { name: "Bookings", path: "/bookings" },
    { name: "Nearby Shops", path: "/shops" },
    { name: "Contact Us", path: "/contact" },
  ];
  const {search,setSearch}=useContext(searchContext);
  const [activeIndex,setActiveIndex]=useState(0);
  return (
    <nav className="bg-slate-300">
      <div className="container flex justify-between items-center mx-auto h-100 py-3">
        <div>
          <Link href="/">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full cursor-pointer object-contain"
            style={{ width: "60px", height: "60px" }}
            priority
            />
            </Link>
        </div>
        {/*items*/}
        <div>
          <ul className="flex gap-10">
            {menu_Items.map((item, index) => (
              <li
                key={index}
                onClick={()=>setActiveIndex(index)}
                className={`${activeIndex === index ? "text-red-500 " : "text-gray-700 hover:text-red-500"} text-base font-semibold  cursor-pointer`}
              >
                <Link href={item.path}>
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="Search_Section flex items-center gap-4">
          <div>
            <input
              type="text"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search Country..."
              className="bg-transparent outline-none border border-gray-600 rounded px-2 py-1 text-gray-700"
            />
          </div>
          {/*Icons*/}
          <div className="flex gap-4">
            <div className="cursor-pointer text-lg">
              <IoNotifications/>
            </div>
            <div className="cursor-pointer text-lg">
            <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
