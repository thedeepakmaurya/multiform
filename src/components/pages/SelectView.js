import React, { useState } from 'react'
import Button from '../Button'

const SelectView = ({ formData, setFormData, step, nextStep, prevStep }) => {

  const [selectedView, setSelectedView] = useState(() => {
    const savedView = localStorage.getItem('selectedView');
    return savedView ? savedView : '';
  });

  const handleSelectView = (view) => {
    setSelectedView(view);
    setFormData({ ...formData, view: view });
    localStorage.setItem('selectedView', view);
  };

  return (
    <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 sm:w-[380px] w-[480px] h-[600px]'>
      <h1 className='font-bold text-xl'>Select a view</h1>
      <p className='text-sm'>You can also customize this view in settings</p>
      <div className='flex w-full gap-9 mt-8'>
        <div className={`w-1/2 flex flex-col items-center ${selectedView === 'List' ? 'border-blue-500' : 'border-gray-300'}`}  onClick={() => handleSelectView('List')}>
          <div className='flex h-40 w-full border border-gray-300 focus:border-blue-500 cursor-pointer items-center justify-center rounded-md'>
            <i className='bx bx-list-ul bx-lg'></i>
          </div>
          <p className='text-sm p-3'>List</p>
        </div>
        <div className={`w-1/2 flex flex-col items-center ${selectedView === 'Board' ? 'border-blue-500' : 'border-gray-300'}`}  onClick={() => handleSelectView('Board')}>
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