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
    setStep(step - 1);
  }


  switch (step) {
    case 1:
      return <CreateProject nextStep={nextStep} prevStop={prevStep}/>;
    case 2:
      return <SelectView nextStep={nextStep} prevStop={prevStep} />;
    case 3:
      return <ManageProject nextStep={nextStep} prevStop={prevStep}/>;
    case 4:
      return <Team prevStop={prevStep} />;
    default:
      return 

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