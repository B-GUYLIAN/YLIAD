import styles from "./Campfire.module.css"



function Campfire(){





    
    
    return (
        <div className={styles.Campbody}>
        <div className={styles.fireplace}>
            <div className={styles.blur}>
                <div className={styles.fireplace__flame_big}></div>
            </div>
            <section className={styles.fireplace__log}></section>
            <section className={styles.fireplace__log}></section>
            <section className={styles.fireplace__log}></section>
            <section className={styles.fireplace__log}></section>
            <section className={styles.fireplace__log}></section>
            <section className={styles.fireplace__log}></section>
            <section className={styles.fireplace__log}></section>
            <main className={styles.fireplace__spark}></main>
            <main className={styles.fireplace__spark}></main>
            <main className={styles.fireplace__spark}></main>
            <main className={styles.fireplace__spark}></main>
            <main className={styles.fireplace__spark}></main>
            <main className={styles.fireplace__spark}></main>
            <div className={styles.blur} id={styles.fix}>
                <div className={styles.fireplace__flame}></div>
            </div>
            <div className={styles.fireplace__light}></div>
        </div>
        </div>
    );
}

export default Campfire;