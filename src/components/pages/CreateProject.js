import React from 'react'

const CreateProject = () => {

  const options = [
    { value: 'virat', label: 'virat' },
    { value: 'sunil', label: 'sunil' },
    { value: 'sachin', label: 'sachin' },
  ]

  return (
    <>
      <h1 className='font-bold pb-5 text-lg'>Create a project</h1>
      <form className='w-full'>
        <div className='flex flex-col'>
          <label className=' text-sm font-medium'>Project name</label>
          <input className='border border-gray-300 rounded-md text-xs  outline-none focus:border-blue-500 h-8 pl-2 pr-2 mt-2 w-full' type='text' name='name' placeholder='Enter project name here' />
        </div>
        <div className='flex flex-col mt-5'>
          <label className=' text-sm font-medium '>Client</label>
          <div className='flex '>
            <select className='border border-gray-300 rounded-md  text-xs outline-none focus:border-blue-500 h-8 pl-2 pr-2 mt-2 w-3/4' placeholder='Select a client'>
              {
                options.map((option) => <option className='text-xs' key={option.value} value={option.value}>{option.label}</option>)
              }
            </select>
            <p className='p-2'>or</p>
            <input className='border border-gray-300 rounded-md text-xs  outline-none focus:border-blue-500 h-8 pl-2 pr-2 mt-2 w-1/4' type='text' name='client' placeholder='+ new client' />
          </div>
          <div className='flex flex-col mt-5'>
            <label className=' text-sm font-medium'>Dates</label>
            <div className='flex gap-4'>
              <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-8 pl-2 pr-2 mt-2 w-1/2' type='date' name='date' />
              <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-8 pl-2 pr-2 mt-2 w-1/2' type='date' name='date' />
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <label className=' text-sm font-medium'>Notes</label>
            <input className='border border-gray-300 rounded-md text-xs teat-wrap  outline-none focus:border-blue-500 pl-2 pr-2 mt-2 w-full h-20' type='text' name='name' placeholder='Optional' />
          </div>
        </div>
      </form>
    </>
  )
}

export default CreateProject
