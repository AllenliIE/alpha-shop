import styles from "./Cart.module.css";
import { ReactComponent as Plus } from "../../../icons/plus.svg";
import { ReactComponent as Minus } from "../../../icons/minus.svg";

import { useContext } from "react";
import CartContext from "../../Context/CartContext";

function Product({
  id,
  name,
  img,
  price,
  quantity,
  handlePlusClick,
  handleMinusClick,
}) {
  return (
    <div
      className={styles.productContainer}
      data-count="0"
      data-price={price}
      key={id}
    >
      <img className={styles.imgContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <Minus
              className={styles.cursor}
              onClick={() => handleMinusClick(id, price, quantity)}
            />
            <span className={styles.productCount}>{quantity}</span>
            <Plus
              className={styles.cursor}
              onClick={() => handlePlusClick(id, price, quantity)}
            />
          </div>
        </div>
        <div className={styles.productPrice}>${price * quantity}</div>
      </div>
    </div>
  );
}

function Cart() {
  //由 CartContext 拿取 cartItem 物件 及 setCartItem 函式資料
  const { cartItem, setCartItem } = useContext(CartContext);
  const { totalPrice, setTotalPrice } = useContext(CartContext);

  function calculate(price) {
    setTotalPrice(totalPrice + price);
  }

  function handlePlusClick(id, price, quantity) {
    const newCartItem = cartItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCartItem(newCartItem);
    calculate(price);
  }

  function handleMinusClick(id, price, quantity) {
    if (quantity > 0) {
      const newCartItem = cartItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity - 1,
          };
        } else {
          return item;
        }
      });
      setCartItem(newCartItem);
      calculate(-price);
    }
  }

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section className={styles.productList} data-total-price={totalPrice}>
        {cartItem.map((item) => (
          <Product
            key={item.id}
            {...item}
            setCartItem={setCartItem}
            handlePlusClick={handlePlusClick}
            handleMinusClick={handleMinusClick}
          />
        ))}
      </section>

      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>運費</div>
        <div className={styles.productInfoPrice}>免費</div>
      </section>

      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>小計</div>
        <div className={styles.productInfoPrice}>${totalPrice}</div>
      </section>
    </section>
  );
}

export default Cart;
