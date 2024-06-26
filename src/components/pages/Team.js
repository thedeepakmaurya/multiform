import React, { useState } from 'react';

const Team = ({formData, setFormData, step, prevStep, handleSubmit, handleChange}) => {
  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = () => {
    if (formData.person) {
      setTeamMembers([...teamMembers, formData.person]);
      setFormData({ ...formData, person: formData.person });
    }
  };

  const removeTeamMember = (indexToRemove) => {
    setTeamMembers(teamMembers.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='flex flex-col items-center bg-white rounded-xl p-10 pb-[31px] shadow-lg shadow-gray-400 sm:w-[90%] w-[31%] h-[600px]'>
      <h1 className='font-bold text-xl'>Team</h1>
      <div className='w-full'>
        <label className='text-md font-medium'>Invite or Add a person</label>
        <div className='flex gap-5 items-center'>
          <input
            className='border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500 h-9 pl-2 pr-2 mt-2 w-full'
            type='text'
            name='person'
            value={formData.person}
            onChange={handleChange}
            placeholder='Add person'
          />
          <button
            className='text-sm h-9 pl-6 pr-6 rounded-md bg-blue-500 text-white'
            onClick={addTeamMember}
          >
            Add
          </button>
        </div>
      </div>
      <div className='mt-5 w-full flex-1 overflow-y-auto'>
        {teamMembers.map((member, index) => (
          <div key={index} className='flex flex-col mb-2'>
            <div className='flex items-center justify-between'>
              <p className='text-sm font-semibold'>{member}</p>
              <i className='bx bx-x align-middle cursor-pointer ' onClick={() => removeTeamMember(index)}></i>
            </div>
            <hr className='border-gray-300 mt-2' />
          </div>
        ))}
      </div>
      {/* Button */}
      <div className='w-full'>
        <div className='flex justify-start items-center sm:gap-[10%] gap-[15%]'>
          <button className='text-sm' onClick={prevStep}>
            <i className='bx bx-chevron-left align-middle'></i>Back
          </button>
          <button
            className='text-sm p-2 pl-6 pr-6 rounded-md bg-blue-500 text-white ml-2'
            onClick={handleSubmit}
          >
            Create Project
          </button>
        </div>
        <div className='flex justify-center gap-2 mt-5'>
          <input className='w-2' type='radio' checked={step === 1} readOnly />
          <input className='w-2' type='radio' checked={step === 2} readOnly />
          <input className='w-2' type='radio' checked={step === 3} readOnly />
          <input className='w-2' type='radio' checked={step === 4} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Team;
