import React from 'react'
import CreateProject from './pages/CreateProject'

const Form = () => {
  return (
    <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 w-[450px] h-[550px]'>
      <CreateProject />
      <div className='mt-5 flex gap-[90px] items-center w-full'>
        <div><i class='bx bx-chevron-left align-middle'></i><button className='text-sm pl-1'>Back</button></div>
        <button className='text-sm p-2 pl-6 pr-6 rounded-md bg-blue-500 text-white '>Next</button>
      </div>
      <div className='flex gap-2 mt-5'>
      <input className='w-2' type='radio'/>
      <input className='w-2' type='radio'/>
      <input className='w-2' type='radio'/>
      <input className='w-2' type='radio'/>
      </div>
    </div>
  )
}

export default Form