import React from 'react';

const Button = ({step, nextStep, prevStep}) => {

  return (
    <div className='flex flex-col sm:[w-380px] w-[480px] pl-10 pr-10'>
      <div className='flex justify-start items-center gap-[110px]'>
        <button className='text-sm' onClick={prevStep}><i className='bx bx-chevron-left align-middle'></i>Back</button>
        <button className='text-sm p-2 pl-6 pr-6 rounded-md bg-blue-500 text-white ml-2' onClick={nextStep}>Next</button>
      </div>
      <div className='flex justify-center gap-2 mt-5'>
        <input className='w-2' type='radio' checked={step === 1} readOnly/>
        <input className='w-2' type='radio' checked={step === 2} readOnly/>
        <input className='w-2' type='radio' checked={step === 3} readOnly/>
        <input className='w-2' type='radio' checked={step === 4} readOnly/>
      </div>
    </div>
  );
};

export default Button;
