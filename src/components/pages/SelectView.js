import React from 'react'

const SelectView = () => {
  return (
    <>
      <h1 className='font-bold text-xl'>Select a view</h1>
      <p className='text-sm'>You can also customize this view in settings</p>
      <div className='flex w-full gap-9 mt-8'>
        <div className='flex w-1/2 h-40 border border-gray-300 focus:border-blue-500 cursor-pointer items-center justify-center rounded-md'>
          <i class='bx bx-list-ul bx-lg'></i>
        </div>
        <div className=' flex w-1/2 h-40 border border-gray-300 focus:border-blue-500 cursor-pointer items-center justify-center rounded-md'>
          <i class='bx bxs-dashboard bx-lg' ></i>
        </div>
      </div>
    </>
  )
}

export default SelectView