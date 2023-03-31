import React from 'react';
import * as styles from "../styles/about.module.css";

export default function About() {
  return (
    <section>
        <h2 className="section-header">Here is a little background</h2>
        <div className={styles.container}>
            <div data-aos="fade-right" data-aos-duration="2000">
                <p>Hello,</p>
                <p> Thanks for stopping by 😍.</p>
                <p>I'm Ganiyat and I build things for the web. I enjoy transforming beautiful ideas to great products that are user-centered and creates memorable digital experience.</p>
                <p>Over the years, I've worked with several technologies while building innovative and results driven websites.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className={styles.iconWrapper}>
                <img src="/icons/html.png" alt="html" className={styles.icon1}/>
                <img src="/icons/css.png" alt="css" className={styles.icon2}/>
                <img src="/icons/javascript.png" alt="javascript" className={styles.icon3}/>
                <img src="/icons/react.png" alt="react" className={styles.icon4}/>
                <img src="/icons/vue.png" alt="html" className={styles.icon5}/>
                <img src="/icons/next.png" alt="html" className={styles.icon6}/>
                <img src="/icons/gatsby.png" alt="html" className={styles.icon7}/>
                <img src="/icons/node.png" alt="html" className={styles.icon8}/>
                <img src="/icons/mongodb.png" alt="html" className={styles.icon9}/>
                <img src="/icons/firebase.png" alt="html" className={styles.icon10}/>
                <img src="/icons/express.png" alt="html" className={styles.icon11}/>
                <img src="/icons/mysql.png" alt="html" className={styles.icon12}/>
            </div>
        </div>
    </section>
  )
}
