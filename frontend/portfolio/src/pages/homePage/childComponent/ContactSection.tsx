import React, { FormEvent, useState } from "react";
import styles from "../home.module.css";
import { MdEmail, MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { GetText } from "../../../utils/translationUtils";
import { BiSend } from "react-icons/bi";
interface SmsType {
  name: string;
  email: string;
  subject: string;
  text: string;
}
export default function ContactSection() {
  const [sms, setSms] = useState<SmsType>({
    name: "",
    email: "",
    subject: "",
    text: ""
  });
  const [listOfSms, setListOfSms] = useState<SmsType[]>([]);

  function handleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!sms.name || !sms.email || !sms.subject || !sms.text) {
      alert("please fill all field");
    } else {
      const newText = {
        name: sms.name,
        email: sms.email,
        subject: sms.subject,
        text: sms.text
      };
      const Copy = [...listOfSms, newText];
      setListOfSms(Copy);
      setSms({
        name: "",
        email: "",
        subject: "",
        text: ""
      });
    }
  }
  console.log(listOfSms);
  return (
    <div className={styles.contactContainer} id="contactMe">
      <div className={styles.contactSection}>
        <div className={styles.contactSectionHeader}>
          <h1>{GetText("home/contactSection/header")}</h1>
          <h2>Get in touch </h2>
        </div>
        <div className={styles.contactSectionSecondContent}>
          <div className={styles.SecondContentInnerSection}>
            <ul>
              <li>
                <h4>
                  {" "}
                  <span>
                    <MdEmail />
                  </span>
                  {GetText("home/contactSection/subHeaderOne")}
                </h4>
                <p>
                  {" "}
                  <a
                    href="mailto:josephkhella2010@gmail.com"
                    className={styles.contactLink}>
                    josephkhella2010@gmail.com
                  </a>
                </p>
              </li>

              <li>
                <h4>
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  {GetText("home/contactSection/subHeaderTwo")}
                </h4>
                <p>
                  {" "}
                  <a href="tel:+46737334929" className={styles.contactLink}>
                    +46737334929
                  </a>
                </p>
              </li>
              <li>
                <h4>
                  <span>
                    <MdPlace />
                  </span>
                  {GetText("home/contactSection/subHeaderThree")}
                </h4>
                <p>
                  {" "}
                  <a
                    href="https://www.google.com/search?q=R%C3%A5g%C3%A5ngen+175+46+J%C3%A4rf%C3%A4lla&sca_esv=4d6ae7d55c35ef9b&rlz=1C1CHBD_enSE1106SE1106&sxsrf=ADLYWIKYN96qcVqs6T4Q_q4k-_gu30o2CQ%3A1735156337540&ei=cWJsZ_LXINOPwPAPrcWC-A8&ved=0ahUKEwiy1IOJ2cOKAxXTBxAIHa2iAP8Q4dUDCBA&oq=R%C3%A5g%C3%A5ngen175+46+J%C3%A4rf%C3%A4lla&gs_lp=Egxnd3Mtd2l6LXNlcnAiG1LDpWfDpW5nZW4xNzUgNDYgSsOkcmbDpGxsYTILEAAYsAMYogQYiQUyCxAAGIAEGLADGKIEMgsQABiwAxiiBBiJBTILEAAYsAMYogQYiQUyCxAAGLADGKIEGIkFSPUJUABYAHAAeACQAQCYAVygAVyqAQExuAEMyAEAmAIBoAJkmAMA4gMFEgExIECIBgGQBgWSBwMwLjGgB9wC&sclient=gws-wiz-serp"
                    className={styles.contactLink}>
                    Stockholm,Sweden
                  </a>
                </p>
              </li>
            </ul>
            <form onSubmit={handleForm}>
              <label htmlFor="">
                <p>Name</p>
                <input
                  type="text"
                  value={sms.name}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </label>
              <label htmlFor="">
                <p>Email</p>
                <input
                  type="text"
                  value={sms.email}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </label>
              <label htmlFor="">
                <p>Subject</p>
                <input
                  type="text"
                  value={sms.subject}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, subject: e.target.value }))
                  }
                />
              </label>
              <label htmlFor="">
                <p>Message</p>
                <textarea
                  name=""
                  id=""
                  value={sms.text}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, text: e.target.value }))
                  }></textarea>
              </label>
              <button type="submit">
                {" "}
                <p>Send Message</p> <BiSend />
              </button>
            </form>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://github.com/josephkhella2010" target="_blank">
              <FiGithub className={styles.icons} />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-khella-058192251/"
              target="_blank">
              <SlSocialLinkedin className={styles.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
