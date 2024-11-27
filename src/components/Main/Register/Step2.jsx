import styles from './Step2.module.css'
// import { useState } from 'react'


function Step2 () {

  return (
    <form data-phase="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.fromBodyItem}>
        <label className={styles.radioGroup} data-price="0">
          <input className={styles.inputStyle} id="shipping-standard" type="radio" name="shipping" />
          <div className={styles.radioInfo}>
            <div>
              <div className={styles.text}>標準運送</div>
              <div className={styles.price}></div>
            </div>
            <div>約 3~7 個工作天</div>
          </div>
          <div className={styles.radioBoxBorder}>免費</div>
        </label>
        <label className={styles.radioGroup} data-price="500">
          <input className={styles.inputStyle} id="shipping-dhl" type="radio" name="shipping" />
          <div className={styles.radioInfo}>
            <div>
              <div className={styles.text}>DHL 貨運</div>
              <div className={styles.price}></div>
            </div>
            <div>48 小時內送達</div>
          </div>
          <div className={styles.radioBoxBorder}>$500</div>
        </label>
      </section>
    </form>
  )
}

export default Step2;