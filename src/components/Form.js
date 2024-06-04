import React, { useState } from 'react'
import SelectView from './pages/SelectView'
import CreateProject from './pages/CreateProject'
import ManageProject from './pages/ManageProject'
import Team from './pages/Team'

const Form = () => {

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1)
  }


  switch (step) {
    case 1:
      return <CreateProject nextStep={nextStep} prevStep={prevStep} />;
    case 2:
      return <SelectView nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <ManageProject nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Team prevStep={prevStep} />;
    default:
      return <div>Error: Unknown step</div>

  }

  // return (
  //   <div className='flex flex-col items-center  bg-white rounded-xl p-10 shadow-lg shadow-gray-400 w-[480px] h-[600px]'>
  //     {/* <CreateProject /> */}
  //     {/* <SelectView /> */}
  //     {/* <ManageProject /> */}
  //     {/* <Team/> */}
  //     <Button />
  //   </div>
  // )
}

export default Form