import React from 'react'
import Button from '../Button'

const CreateProject = ({formData, setFormData, step, nextStep, prevStep, handleChange}) => {

  const options = [
    { value: 'Virat', label: 'Virat' },
    { value: 'Sunil', label: 'Sunil' },
    { value: 'Sachin', label: 'Sachin' },
  ]

  return (
    <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 w-[480px] h-[600px]'>
      <h1 className='font-bold pb-5 text-xl'>Create a project</h1>
      <form className='w-full'>
        <div className='flex flex-col'>
          <label className=' text-md font-medium'>Project name</label>
          <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-full' type='text' name='projectName' value={formData.projectName} placeholder='Enter project name here' onChange={handleChange}/>
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
              <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-1/2' type='date' name='startDate' value={formData.startDate} onChange={handleChange}/>
              <input className='border border-gray-300 rounded-md text-sm  outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-1/2' type='date' name='endDate' value={formData.endDate} onChange={handleChange}/>
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <label className=' text-md font-medium'>Notes</label>
            <textarea className='border border-gray-300 rounded-md text-sm outline-none overflow-y-hidden focus:border-blue-500 p-2 mt-2 w-full h-20' name='note'  value={formData.note} onChange={handleChange} placeholder='Optional' />
          </div>
        </div>
      </form>
      <div className='mt-8'>
      <Button step={step} nextStep={nextStep} prevStep={prevStep}/>
      </div>
    </div>
  )
}

export default CreateProject
