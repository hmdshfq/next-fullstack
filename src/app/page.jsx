import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Better design for your digital products.</h1>
                    <p className={styles.description}>
                        Turning your Idea into Reality. We bring together the teams from the global tech industry.
                    </p>
                </div>
                <Image src='/hero.png' alt='illustration of people' width={500} height={500} />
            </section>
        </main>
    );
}
