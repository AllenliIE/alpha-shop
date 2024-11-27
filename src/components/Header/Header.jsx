import styles from "./Header.module.css";

import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Cart } from "../../icons/cart.svg";
import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";
import { ReactComponent as Moon } from "../../icons/moon.svg";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.pageBar}>
          <a href="/page/1">男款</a>
          <a href="/page/2">女款</a>
          <a href="/page/3">最新消息</a>
          <a href="/page/4">客製商品</a>
          <a href="/page/5">聯絡我們</a>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.functionBar}>
          <Search className={styles.search} />
          <Cart className={styles.cart} />
          <Moon className={styles.moon} />
          <Sun className={styles.sun} />
        </div>
      </div>
    </header>
  );
}

export default Header;
