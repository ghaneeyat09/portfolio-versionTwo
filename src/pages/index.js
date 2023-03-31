import * as React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import * as styles from "../styles/home.module.css";
import "../styles/global.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Home() {
  // AOS.init();
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
             <Social />
             <Contact />
             <Footer />
         </>
}
