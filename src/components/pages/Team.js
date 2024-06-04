import React from 'react'

const Team = ({formData, setFormData, step, prevStep, handleSubmit }) => {
  return (
    <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 w-[480px] h-[600px]'>
      <h1 className='font-bold text-xl'>Team</h1>
      <div className='w-full'>
        <label className=' text-md font-medium'>Invite or Add a person</label>
        <div className='flex gap-5 items-center'>
          <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-full' type='text' name='person' value={formData.person} placeholder='Add person' />
          <button className='text-sm h-9 pl-6 pr-6 rounded-md bg-blue-500 text-white '>Add</button>
        </div>
      </div>
      {/* Button */}
      <div className='flex flex-col mt-5 w-[480px] pl-10 pr-10'>
        <div className='flex justify-start items-center gap-[80px]'>
          <button className='text-sm' onClick={prevStep}><i className='bx bx-chevron-left'></i>Back</button>
          <button className='text-sm p-2 pl-6 pr-6 rounded-md bg-blue-500 text-white ml-2 ' onClick={handleSubmit}>Create Project</button>
        </div>
        <div className='flex justify-center gap-2 mt-5'>
          <input className='w-2' type='radio' checked={step === 1} readOnly/>
          <input className='w-2' type='radio' checked={step === 2} readOnly/>
          <input className='w-2' type='radio' checked={step === 3} readOnly/>
          <input className='w-2' type='radio' checked={step === 4} readOnly/>
        </div>
      </div>
    </div>
  )
}

export default Team