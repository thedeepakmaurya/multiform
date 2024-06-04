import React from 'react'

const Team = () => {
  return (
    <>
      <h1 className='font-bold text-xl'>Team</h1>
      <div className='w-full'>
        <label className=' text-md font-medium'>Invite or Add a person</label>
        <div className='flex gap-5 items-center'>
          <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-full' type='text' name='name' placeholder='Add person' />
          <button className='text-sm h-9 pl-6 pr-6 rounded-md bg-blue-500 text-white '>Add</button>
        </div>
      </div>

    </>
  )
}

export default Team