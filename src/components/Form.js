import React, { useState } from 'react'
import SelectView from './pages/SelectView'
import CreateProject from './pages/CreateProject'
import ManageProject from './pages/ManageProject'
import Team from './pages/Team'

const Form = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : { projectName: "", note: "", person: "" };
  }
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(formData)
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1)
  }


  switch (step) {
    case 1:
      return <CreateProject formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} step={step} handleChange={handleChange} />;
    case 2:
      return <SelectView formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} step={step} handleChange={handleChange} />;
    case 3:
      return <ManageProject formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} step={step} handleChange={handleChange} />;
    case 4:
      return <Team formData={formData} setFormData={setFormData} prevStep={prevStep} step={step} handleChange={handleChange} handleSubmit={handleSubmit} />;
    default:
      return <CreateProject formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} step={step} handleChange={handleChange} />

  }

}

export default Form