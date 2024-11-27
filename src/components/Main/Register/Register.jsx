import React, { useContext } from 'react'
import FormContext from '../../Context/FormContext'
import styles from './Register.module.css'
import StepProgress from './StepProgress'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import ProgressControl from './ProgressControl'

function DisplayStep( ) {
  const { step }  = useContext(FormContext)

  if (step === 1) {
    return <Step1/>
  } else if (step === 2) {
    return <Step2 />
  } else {
    return <Step3 />
  }
}

function Register() {
  return (
    <div >
      <StepProgress />
      <section className={styles.formContainer}>
        <DisplayStep />
      </section>
      <ProgressControl /> 
    </div>
  )
}

export default Register