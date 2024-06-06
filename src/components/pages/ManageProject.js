import React, { useState } from 'react'
import Button from '../Button'

const ManageProject = ({ formData, setFormData, step, nextStep, prevStep }) => {
  const [selectedOption, setSelectedOption] = useState(localStorage.getItem('selectedOption') || '')

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    localStorage.setItem('selectedOption', option)
  }

  return (
    <div className='flex flex-col items-center bg-white rounded-xl p-10 shadow-lg shadow-gray-400 sm:w-[90%] w-[31%] h-[600px]'>
      <h1 className='font-bold text-xl'>Who can manage projects</h1>
      <p className='text-sm text-center'>Don't panic - you can customize the permissions in settings</p>
      <div className='mt-8 w-full'>
        <div 
          className={`flex border ${selectedOption === 'everyone' ? 'border-blue-500' : 'border-gray-300'} rounded-md cursor-pointer w-full`} 
          onClick={() => handleOptionClick('everyone')}
        >
          <div className='p-5'>
            <i className='bx bx-list-check bx-md align-middle'></i>
          </div>
          <div className='flex flex-col justify-center pr-5'>
            <h1 className='font-semibold text-md'>Everyone</h1>
            <p className='text-sm'>All users can now to see it, but guest's cannot see the project</p>
          </div>
        </div>
        <div 
          className={`flex border mt-5 ${selectedOption === 'admins' ? 'border-blue-500' : 'border-gray-300'} rounded-md cursor-pointer w-full`} 
          onClick={() => handleOptionClick('admins')}
        >
          <div className='p-5'>
            <i className='bx bx-user-circle bx-md align-midde'></i>
          </div>
          <div className='flex flex-col justify-center pr-5'>
            <h1 className='font-semibold text-md'>Only Admin's</h1>
            <p className='text-sm'>Only admins can manage everything </p>
          </div>
        </div>
        <div 
          className={`flex border mt-5 ${selectedOption === 'specific' ? 'border-blue-500' : 'border-gray-300'} rounded-md cursor-pointer w-full`} 
          onClick={() => handleOptionClick('specific')}
        >
          <div className='p-5'>
            <i className='bx bx-user bx-md align-middle'></i>
          </div>
          <div className='flex flex-col justify-center pr-5'>
            <h1 className='font-semibold text-md'>Only to specific people</h1>
            <p className='text-sm'>Only some specific people can be able to see it</p>
          </div>
        </div>
      </div>
      <div className='mt-[103px] sm:mt-[82px]'>
        <Button nextStep={nextStep} prevStep={prevStep} step={step} />
      </div>
    </div>
  )
}

export default ManageProject
