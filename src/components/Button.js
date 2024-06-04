import React from 'react';

const Button = () => {
  return (
    <div className='flex flex-col bottom-10 fixed mt-5 w-[480px] pl-10 pr-10'>
      <div className='flex justify-start items-center gap-[110px]'>
        <button className='text-sm'><i className='bx bx-chevron-left'></i>Back</button>
        <button className='text-sm p-2 pl-6 pr-6 rounded-md bg-blue-500 text-white ml-2'>Next</button>
      </div>
      <div className='flex justify-center gap-2 mt-5'>
        <input className='w-2' type='radio' />
        <input className='w-2' type='radio' />
        <input className='w-2' type='radio' />
        <input className='w-2' type='radio' />
      </div>
    </div>
  );
};

export default Button;
