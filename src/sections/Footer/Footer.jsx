import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>
            &#169; 2024 Binneth B C. <br />
            All rights reserved.
        </p>
    </section>
  )
}

export default Footer