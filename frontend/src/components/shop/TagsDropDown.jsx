import { useState } from "react";


function TagDropDown({name, tags, setTag, resetPage , activeTag}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
  return (
            <div>
          <div className=' p-2 flex items-center justify-between w-full text-base font-bold uppercase cursor-pointer' onClick={toggleDropdown}>{name} <i className={`bx bx-chevron-down  transition-all ${isOpen && 'bx-rotate-180'}`}></i></div>
          <div 
        //   className=' max-h-40 overflow-scroll border-solid border-b border-[#bcbcbc70] p-2' 
            className={`dropdown-content flex flex-row gap-3 flex-wrap ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>

          {
            tags?.length > 1 ? tags?.map( (tag) => {
                return (
                  <button
                  onClick={() => {
                    setTag(tag);
                    resetPage(1)
                  }}
                  key={tag} className=' hover:bg-[#757575] px-2 py-1 cursor-pointer text-sm text-secondary bg-[#bcbcbc]'>{tag}</button>
                )
  
            }) : <span className="px-2 py-1 text-sm text-[#bcbcbc]">nothing to see here</span>
            
          }

{
            tags.length > 1 && activeTag != '' && (
              <button className=' hover:bg-[#757575] px-2 py-1 cursor-pointer text-sm text-secondary bg-[#bcbcbc]' onClick={() => {setTag(''); resetPage(1)}}>none</button>
            )
          }
          </div>
          
        </div>
  )
}

export default TagDropDown