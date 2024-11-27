import styles from './Step3.module.css'
import { useContext } from 'react'
import  FormContext from '../../Context/FormContext'

function Step3 () {

  const { cardData, setCardData } = useContext(FormContext)   

  return (
    <form data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBodyItem}>
        <div className={styles.inputGroup6}>
          <div className={styles.inputLabel}>持卡人姓名</div>
          <input className={styles.inputStyle} type="text" placeholder="John Doe" value={cardData.cardUserName} onChange={(e) => {
            setCardData({...cardData, cardUserName:e.target.value})
          }}/>
        </div>
        <div className={styles.inputGroup6}>
          <div className={styles.inputLabel}>卡號</div>
          <input className={styles.inputStyle} type="text" placeholder="1111 2222 3333 4444" value={cardData.cardNumber} onChange={(e) => {
            setCardData({...cardData, cardNumber:e.target.value})
          }}/>
        </div>
        <div className={styles.inputGroup5}>
          <div className={styles.inputLabel}>有效期限</div>
          <input className={styles.inputStyle} type="text" placeholder="MM/YY" value={cardData.cardExpirationDate} onChange={(e) => {
            setCardData({...cardData, cardExpirationDate:e.target.value})
          }} />
        </div>
        <div className={styles.inputGroup5}>
          <div className={styles.inputLabel}>CVC / CCV</div>
          <input className={styles.inputStyle} type="text" placeholder="123" value={cardData.cardCVCCCV} onChange={(e) => {
            setCardData({...cardData, cardCVCCCV:e.target.value})
          }}/>
        </div>
      </section>
    </form>
  )
}

export default Step3;