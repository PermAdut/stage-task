import IntroduceButton from '../IntroduceButton/IntroduceButton';
import styles from './Introduce.module.css'
const Introduce = () => {
  return <section className={styles.main}>
    <div className='container'>
        <div className={styles.main_content}>
            <h1 className={styles.main_title}>projects</h1>
            <div className={styles.main_description}>
            From configuration to security, web apps to big data—whatever the
            infrastructure needs of your application may be, there is a Spring
            Project to help you build it. Start small and use just what you
            need—Spring is modular by design.
            </div>
            <IntroduceButton />
        </div>
    </div>
    <div className={styles.extra_main} />
  </section>;
};

export default Introduce;
