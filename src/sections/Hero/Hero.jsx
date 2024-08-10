import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/bineethbc.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
//import gmailLight from '../../assets/gmail-light.svg'
//import gmailDark from '../../assets/gmail-dark.svg'
import instagramLight from "../../assets/insta-light.svg";
import instagramDark from "../../assets/insta-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import whatsappLight from "../../assets/whatsapp-light.svg"
import whatsappDark from "../../assets/whatsapp-dark.svg"
import CV from "../../assets/Resume_Bineeth B C.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  
  const themeIcon  = theme === 'light' ? sun : moon;
  const instagramIcon  = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon  = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon  = theme === 'light' ? linkedinLight : linkedinDark;
  //const gmailIcon = theme === 'light' ? gmailLight : gmailDark;
  const whatsappIcon = theme === 'light' ? whatsappLight : whatsappDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Bineeth B C</h1>
        <h2>Software Engineer</h2>
        <span>
          {/* <a href="mailto:bineethbc7@gmail.com" target="_blank">
            <img src={gmailIcon} alt="Gmail icon" />
          </a> */}
          <a href="https://linkedin.com/in/bineethbc/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/bineeth7" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://wa.me/9605354673" target="_blank">
            <img src={whatsappIcon} alt="Whatsapp icon" />
          </a>
          <a href="https://www.instagram.com/invic_7us?igsh=MWJvZm56MzJ4aWF3Ng==" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
        </span>
        <p className={styles.description}>
        With a passion for developing modern web apps that blend creativity and functionality.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
