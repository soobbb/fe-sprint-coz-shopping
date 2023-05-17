import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer_body}`}>
      <div className={`${styles.footer_text}`}>
        개인정보 처리방침 | 이용 약관 All rights reserved@Codestates
      </div>
    </footer>
  );
}
export default Footer;
