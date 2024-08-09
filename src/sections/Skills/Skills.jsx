import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML' />
            <SkillList src={checkMarkIcon} skill='CSS' />
            <SkillList src={checkMarkIcon} skill='JavaScript' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='ReactJs' />
            <SkillList src={checkMarkIcon} skill='Bootstrap' />
            <SkillList src={checkMarkIcon} skill='Tailwind CSS' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Python' />
            <SkillList src={checkMarkIcon} skill='SQL' />
            <SkillList src={checkMarkIcon} skill='Git' />
            <SkillList src={checkMarkIcon} skill='VS Code' />
        </div>
        <hr />
    </section>
  )
}

export default Skills