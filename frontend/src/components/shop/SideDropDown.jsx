import { useState } from "react";


function SideDropDown({name, criteria}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
  return (
            <div>
          <div className=' p-2 flex items-center justify-between w-full text-base font-bold uppercase cursor-pointer' onClick={toggleDropdown}>{name} <i className={`bx bx-chevron-down transition-all ${isOpen && 'bx-rotate-180'}  `}></i></div>
          <div 
        //   className=' max-h-40 overflow-scroll border-solid border-b border-[#bcbcbc70] p-2' 
            className={`dropdown-content ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>

          {
            criteria ? criteria.map(c => (
              <div key={c.key} className=' hover:text-[#757575] px-2 py-1 cursor-pointer text-sm text-[#bcbcbc]'>{c.key} ({c.count})</div>
            )) :  <span className="px-2 py-1 text-sm text-[#bcbcbc]">nothing to see here</span>
          }
          </div>
          
        </div>
  )
}

export default SideDropDown