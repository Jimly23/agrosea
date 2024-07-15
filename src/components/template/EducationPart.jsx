import React from 'react'

const EducationPart = ({children, title}) => {
  return (
    <div className="agro-edication mt-8">
      <h5 className='font-medium text-2xl py-3 pt-5 border-b-[4px] border-aksen w-[170px] mb-5'>Edukasi {title}</h5>
      <div className="list-education flex justify-center items-center flex-wrap gap-4">
        {children}
      </div>
    </div>
  )
}

export default EducationPart