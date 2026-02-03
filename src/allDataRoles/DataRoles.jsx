import React, { useState } from 'react'
import { Rolesdata } from './rolesData/Rolesdata'
import RolesGrid from "../assets/dataRoleAssets/background/dataRolesBg.webp"

export default function DataRoles() {

  const [activeIndex, setActiveIndex] = useState(0);
  const activeRole = Rolesdata[activeIndex];

  return (
    <section
      className="w-full flex flex-col items-center  
                 px-4 sm:px-8 lg:px-[90px] 
                 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage:`url(${RolesGrid})` }}
    >

      {/* ===== Heading ===== */}
      <div className='w-full max-w-6xl text-center pt-16 sm:pt-24 lg:pt-36 font-DM-Sans'>

        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
          One Course for All Data Roles
        </h2>

        <h3 className="text-sm sm:text-base lg:text-xl mt-4 sm:mt-5">
          In India, companies often expect one person to handle multiple data responsibilities.
          <br className="hidden sm:block"/>
          That’s why we teach you a complete skill set so you can fit into different roles confidently.
        </h3>

      </div>


      {/* ===== Role Courses ===== */}
      <div className='w-full max-w-6xl mt-8 '>

        {/* scrolling on phone */}
          <div className="overflow-x-auto no-scrollbar pb-3">
            
        <div className='flex gap-3 sm:gap-4 justify-start sm:justify-center
                        items-center font-DM-Sans
                           w-max sm:w-full
             px-2 sm:px-0'>

          {Rolesdata.map((item,index) => (

            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                whitespace-nowrap
                text-sm sm:text-[14px]
                py-2 px-3 sm:px-4
                rounded-full border
                transition-all duration-300 cursor-pointer 

                ${activeIndex === index
                  ? "bg-[#7833FE] text-white shadow-[5px_5px_0px_black] border-black"
                  : "bg-[#EEEDE9] text-black border-[#EEEDE9] hover:bg-[#7833FE] hover:text-white hover:border-black"
                }
              `}
            >
              {item.heading}
            </button>

          ))}

        </div>
        </div>
      </div>


      {/* ===== Lower Banner-section ===== */}
      <div className='w-full max-w-6xl mt-8 sm:mt-12 
                      flex flex-col lg:flex-row 
                      bg-white shadow-2xl  overflow-hidden '>

        {/* Left */}
        <div className='flex-1 flex flex-col justify-between
                        p-6 sm:p-8 lg:p-11 font-DM-Sans'>

          <div>
            <span className='text-xs sm:text-sm tracking-wide text-gray-500'>
              Job Role
            </span>

            <h2 className='text-2xl sm:text-3xl font-bold mt-2'>
              {activeRole.title}
            </h2>

            <p className='text-sm sm:text-base mt-3 max-w-full lg:max-w-[90%]'>
              {activeRole.about}
            </p>
          </div>

          {/* Points */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6">
            {activeRole.points.map((point, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-black text-white 
                           rounded-full text-xs sm:text-sm"
              >
                {point}
              </span>
            ))}
          </div>

        </div>


        {/* Right Image */}
        <div className='w-full lg:w-[42%] h-[220px] sm:h-[260px] lg:h-auto'>
          <img
            src={activeRole.image}
            className='w-full h-full object-cover'
            alt="hexagonimage"
          />
        </div>

      </div>

    </section>
  )
}
