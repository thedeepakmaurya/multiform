import React from 'react'
import SelectView from './pages/SelectView'
import Button from './Button'
import CreateProject from './pages/CreateProject'
import ManageProject from './pages/ManageProject'
import Team from './pages/Team'

const Form = () => {
  return (
    <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 w-[480px] h-[600px]'>
      {/* <CreateProject /> */}
      {/* <SelectView /> */}
      <ManageProject />
      {/* <Team/> */}
      <Button />
    </div>
  )
}

export default Form