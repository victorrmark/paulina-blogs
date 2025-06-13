import { FrontendMentorLogo, GitHubLogo, LinkedInLogo, X } from "../Logos";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className={styles.footer_txt}>
        <p>Made with ❤️ and ☕️</p>
      </div>
      <div className={styles.footer_socials}>
        <button className={`${styles.btn} footer_btn`}>
          <X/>
        </button>
        <button className={`${styles.btn} footer_btn` }>
          <GitHubLogo/>
        </button>
        <button className={`${styles.btn} footer_btn`}>
          <LinkedInLogo/>
        </button>
        <button className={`${styles.btn} footer_btn`}>
          <FrontendMentorLogo/>
        </button>
      </div>
    </div>
  );
}
