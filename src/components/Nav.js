import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id={`${styles.nav_body}`}>
      <span id={`${styles.title}`}>
        <img className={`${styles.logo}`} src="로고.png" alt="로고" />
        <span className={`${styles.logo_name}`}>COZ Shopping</span>
        <div className={styles.container}>
          <img
            src="아이콘.png"
            id="Dropdown"
            onClick={toggleDropdown}
            alt="드롭다운 토글 버튼"
          />
          <div className={`${styles.dropdownContent} ${isOpen ? "open" : ""}`}>
            <Link className = "menu" to="/">전수빈님, 안녕하세요!</Link>
            <Link className = "menu" to="/1">상품리스트 페이지</Link>
            <Link className = "menu" to="/2">북마크 페이지</Link>
          </div>
        </div>
      </span>
    </nav>
  );
}

export default Nav;
