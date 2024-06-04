import React from 'react'

const ManageProject = () => {
  return (
    <>
      <h1 className='font-bold text-xl'>Who can manage projects</h1>
      <p className='text-sm'>Don't panic - you can customize the permissions in settings</p>
      <div className='mt-8 w-full'>
        <div className='flex border border-gray-500 focus:border-blue-500 rounded-md  cursor-pointer w-full'>
          <div className='p-5'>
          <i class='bx bx-list-check bx-md align-middle'></i>          </div>
          <div className='flex flex-col justify-center pr-5'>
            <h1 className='font-semibold text-md'>Everyone</h1>
            <p className='text-sm'>All users can now to see it, but guest's cannot see the project</p>
          </div>
        </div>
        <div className='flex border mt-5 border-gray-500 focus:border-blue-500 rounded-md cursor-pointer w-full'>
          <div className='p-5'>
            <i className='bx bx-user-circle bx-md align-midde'></i>
          </div>
          <div className='flex flex-col justify-center pr-5'>
            <h1 className='font-semibold text-md'>Only Admin's</h1>
            <p className='text-sm'>Only admins can manage everything </p>
          </div>
        </div>
        <div className='flex border mt-5 border-gray-500 focus:border-blue-500 rounded-md cursor-pointer w-full'>
          <div className='p-5'>
            <i className='bx bx-user bx-md align-middle'></i>
          </div>
          <div className='flex flex-col justify-center pr-5'>
            <h1 className='font-semibold text-md'>Only to specific people</h1>
            <p className='text-sm'>Only some specific people can be able to see it</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageProject