import React from 'react'
import SelectView from './pages/SelectView'
import Button from './Button'
// import CreateProject from './pages/CreateProject'

const Form = () => {
  return (
    <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 w-[480px] h-[580px]'>
      {/* <CreateProject /> */}
      <SelectView />
      <Button />
    </div>
  )
}

export default Form