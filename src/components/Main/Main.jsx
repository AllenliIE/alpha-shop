import styles from "./Main.module.css";
import Register from "./Register/Register";
import Cart from "./Cart/Cart";

function Main() {
  const registerTitle = <h2 className={styles.mainTitle}>結帳</h2>;
  return (
    <div>
      {registerTitle}
      <div className={styles.mainContainer}>
        <Register />
        <Cart />
      </div>
    </div>
  );
}

export default Main;
