import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow} from '../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from '../../../icons/left-arrow.svg'
import { useContext } from 'react'
import FormContext  from '../../Context/FormContext'
import CartContext from '../../Context/CartContext'

function PrevButton() {
  const {setStep, setDone} = useContext(FormContext)
  return(
    <button className={styles.prev} onClick={() => {
      setStep((currentStep) => currentStep - 1);
      setDone((currentDone) => currentDone - 1)}      
      }>
      <LeftArrow className={styles.leftArrow}/>
      上一步
    </button>
  )
}

function NextButton() {
  const {setStep, setDone} = useContext(FormContext)
  return(
    <button className={styles.next} onClick={() => {
      setStep((currentStep) => currentStep + 1); 
      setDone((currentDone) => currentDone + 1)}}>
      下一步
      <RightArrow className={styles.rightArrow}/>
    </button> 
  )
}

function ShowButton () {
  const { step, setStep, setDone, cardData } = useContext(FormContext)
  const { totalPrice } = useContext(CartContext)

  if (step === 1) {
    return (
      <section className={styles.buttonGroup} data-phase="address">
        <button className={styles.hiddenPrev}>
        </button>
        <NextButton /> 
      </section>
    )
  } else if (step === 2) {
    return (
      <section className={styles.buttonGroup}>
        <PrevButton/> 
        <NextButton/> 
      </section>
    )
  } else {
    return (
      <section className={styles.buttonGroup} data-phase="credit-card">
        <PrevButton /> 
        <button className={styles.next} onClick={() => {
          setStep((currentStep) => currentStep + 1); 
          setDone((currentDone) => currentDone + 1);
          console.log(`
            請核對以下資訊
            持卡人 :${cardData.cardUserName}
            卡號 :${cardData.cardNumber}
            有效期限 :${cardData.cardExpirationDate}
            CVC / CCV :${cardData.cardCVCCCV}
            總金額 :${totalPrice}
          `)
          alert("Form Submitted!")
        }}>
          確認下單
        </button>
      </section>
    )
  }
}

function ProgressControl () {
  return (
    <section className={styles.progressControlContainer}>
      <ShowButton/>
    </section>
  )
}

export default ProgressControl;