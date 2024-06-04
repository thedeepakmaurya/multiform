import React from 'react'
import Button from '../Button'

const SelectView = ({ formData, setFormData, step, nextStep, prevStep }) => {
  return (
    <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 w-[480px] h-[600px]'>
      <h1 className='font-bold text-xl'>Select a view</h1>
      <p className='text-sm'>You can also customize this view in settings</p>
      <div className='flex w-full gap-9 mt-8'>
        <div className='w-1/2 flex flex-col items-center'>
          <div className='flex h-40 w-full border border-gray-300 focus:border-blue-500 cursor-pointer items-center justify-center rounded-md'>
            <i className='bx bx-list-ul bx-lg'></i>
          </div>
          <p className='text-sm p-3'>List</p>
        </div>
        <div className='w-1/2 flex flex-col items-center'>
          <div className=' flex h-40 w-full border border-gray-300 focus:border-blue-500 cursor-pointer items-center justify-center rounded-md'>
            <i className='bx bxs-dashboard bx-lg' ></i>
          </div>
          <p className='text-sm p-3'>Board</p>
        </div>
      </div>
      <div className='mt-44'>
      <Button nextStep={nextStep} prevStep={prevStep} step={step}/>
      </div>
    </div>
  )
}

export default SelectView