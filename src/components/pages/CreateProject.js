import React from 'react'

const CreateProject = () => {

  const options = [
    { value: 'Virat', label: 'Virat' },
    { value: 'Sunil', label: 'Sunil' },
    { value: 'Sachin', label: 'Sachin' },
  ]

  return (
    <>
      <h1 className='font-bold pb-5 text-xl'>Create a project</h1>
      <form className='w-full'>
        <div className='flex flex-col'>
          <label className=' text-md font-medium'>Project name</label>
          <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-full' type='text' name='name' placeholder='Enter project name here' />
        </div>
        <div className='flex flex-col mt-5'>
          <label className=' text-md font-medium '>Client</label>
          <div className='flex '>
            <select className='border border-gray-300 rounded-md  text-sm outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-3/4' placeholder='Select a client'>
              {
                options.map((option) => <option className='text-sm' key={option.value} value={option.value}>{option.label}</option>)
              }
            </select>
            <p className='p-3'> Or</p>
            <input className='border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-1/4' type='text' name='client' placeholder='+ New Client' />
          </div>
          <div className='flex flex-col mt-5'>
            <label className=' text-md font-medium'>Dates</label>
            <div className='flex gap-4'>
              <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-1/2' type='date' name='date' />
              <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-1/2' type='date' name='date' />
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <label className=' text-md font-medium'>Notes</label>
            <textarea className='border border-gray-300 rounded-md text-sm outline-none overflow-y-hidden focus:border-blue-500 p-2 mt-2 w-full h-20' type='text' name='name' placeholder='Optional' />
          </div>
        </div>
      </form>
    </>
  )
}

export default CreateProject
