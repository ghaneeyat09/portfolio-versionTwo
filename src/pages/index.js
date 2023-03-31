import * as React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import * as styles from "../styles/home.module.css";
import "../styles/global.css";

export default function Home() {
  return <>
             <div className={styles.background}>
                <div className={styles.logo}>
                  <h3>G&bull;&bull;</h3>
                </div>
                <div className={styles.container}>
                  <h1>I build worldclass and innovative <span className={styles.text}>websites</span> using <span className={styles.text}> modern</span> technologies</h1>
                </div>
             </div>
             <About />
             <Projects />
         </>
}
