import React from 'react';
import * as styles from "../styles/contact.module.css";
// import firebase from "gatsby-plugin-firebase";
// import { collection, addDoc } from 'firebase/firestore';
// import { firestore } from '../../firebase';
import { useState } from 'react';


export default function Contact() {
//     const functions = require("firebase-functions");
//     const nodemailer = require('nodemailer');
//     const smtpTransport = require('nodemailer-smtp-transport');
    const [input, setInput] = useState({
        name: "",
        email: "", 
        subject: "",
        message: ""
    });
//     const sesAccessKey = 'alyusrohmodestwears@gmail.com';
//     const sesSecretKey = 'awyfiyzckxchigln';

//     const transporter = nodemailer.createTransport(smtpTransport({
//      service: 'gmail',
//      auth: {
//          user: sesAccessKey,
//          pass: sesSecretKey
//      }
//    }));
//    const mailOptions = {
//      to: "jamiuganeeyat@gmail.com",
//      from: sesAccessKey,
//      subject: `${input.name} sent you a new message`,
//      text: "hello"
//    };
//    transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
//     });
    // const db = firestore;
    // const colRef = collection(db, "mails");
    function handleChange(e) {
        const value = e.target.value;
        setInput({
          ...input,
          [e.target.name]: value
        });
      }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(input.name, input.email);

    //     addDoc(colRef, {
    //         name: input.name,
    //         email: input.email,
    //         subject: input.subject,
    //         message: input.message
    //     })
    //     .then(() => {
    //         console.log("mail sent")
    //     })
    // }
  return (
    <div className={styles.contact}>
      <h1 className={styles.work}>Available to work? <span className={styles.text}>Definitely!</span></h1>
      <p>Don't be a stranger, let's connect😍</p>
      <div className={styles.contactWrap}>
      <form data-aos="fade-right" data-aos-duration="2000">
        <input type="text" placeholder="Enter Subject" name="subject" value={input.subject} onChange={handleChange} required/>
        <div>
            <input type="text" placeholder="Your Name" name="name" value={input.name} onChange={handleChange} required/>
            <input type="email" placeholder="Your Email" name="email" value={input.email} onChange={handleChange} required/>
        </div>
        <textarea placeholder="Your Message" type="text" name="message" value={input.message} onChange={handleChange} required></textarea>
        <button type="submit">Shoot🚀</button>
      </form>
      <div data-aos="fade-left" data-aos-duration="2000">
          <p>🇳🇬 Nigeria</p>
          <p>📧 Jamiuganeeyat@gmail.com</p>
          <p>📞+234 814 3130 290</p>
      </div>
      </div>
    </div>
  )
}
