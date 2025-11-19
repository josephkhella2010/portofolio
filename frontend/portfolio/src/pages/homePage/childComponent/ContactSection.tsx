/* import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../home.module.css";
import { MdEmail, MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { GetText } from "../../../utils/translationUtils";
import { BiSend, BiSolidHandDown } from "react-icons/bi";
interface SmsType {
  name: string;
  email: string;
  text: string;
}
export default function ContactSection() {
  const [sms, setSms] = useState<SmsType>({
    name: "",
    email: "",
    text: "",
  });
  const [_listOfSms, setListOfSms] = useState<SmsType[]>([]);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_ch7x25p", "template_my5vwlq", form.current, {
          publicKey: "dEic-Tvd7QooSz20W",
        })

        .then(
          () => {
            const newSms = {
              name: sms.name,
              email: sms.email,
              text: sms.text,
            };
            setListOfSms((prev) => [...prev, newSms]);
            console.log("SUCCESS!");
            setSms({ name: "", email: "", text: "" });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  //console.log(listOfSms);
  console.log(sms.text.length);

  return (
    <div className={styles.contactContainer} id="contactMe">
      <div className={styles.contactSection}>
        <div className={styles.contactSectionHeader}>
          <h1>{GetText("home/contactSection/header")}</h1>
          <h2>{GetText("contact/subHeader")}</h2>
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
                    className={styles.contactLink}
                  >
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
                    className={styles.contactLink}
                  >
                    Stockholm,Sweden
                  </a>
                </p>
              </li>
            </ul>

            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.formHeader}>
                <h3>{GetText("contact/sendHeader")}</h3>
                <BiSolidHandDown className={styles.handIcon} />
              </div>
              <label>
                <p>{GetText("contact/name")}</p>
                <input
                  type="text"
                  name="user_name"
                  value={sms.name}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </label>
              <label>
                <p>{GetText("contact/Email")}</p>

                <input
                  type="email"
                  name="user_email"
                  value={sms.email}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </label>
              <label>
                <p>{GetText("contact/Message")}</p>
                <div className={styles.textareaContainer}>
                  <textarea
                    name="message"
                    value={sms.text}
                    onChange={(e) =>
                      setSms((prev) => ({ ...prev, text: e.target.value }))
                    }
                  />
                  {sms.text.length > 0 && (
                    <p className={styles.totalLetter}>
                      {GetText("contact/TotalLetter")} {sms.text.length}
                    </p>
                  )}
                </div>
              </label>
              <button type="submit">
                {" "}
                <p>{GetText("contact/SendMessageBtn")}</p> <BiSend />
              </button>
            </form>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://github.com/josephkhella2010" target="_blank">
              <FiGithub className={styles.icons} />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-khella-058192251/"
              target="_blank"
            >
              <SlSocialLinkedin className={styles.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 */

import { FormEvent, useRef, useState } from "react";
import styles from "../home.module.css";
import { MdEmail, MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { BiSend, BiSolidHandDown } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import { useText } from "../../../utils/translationUtils";
interface SmsType {
  name: string;
  email: string;
  subject: string;
}
export default function ContactSection() {
  const [sms, setSms] = useState<SmsType>({
    name: "",
    email: "",
    subject: "",
  });
  const [_listOfSms, setListOfSms] = useState<SmsType[]>([]);
  const GetText = useText();

  const form = useRef<HTMLFormElement | null>(null);
  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const newSms = {
        name: sms.name,
        email: sms.email,
        subject: sms.subject,
      };
      if (!sms.name || !sms.email || !sms.subject) {
        toast.error(GetText("contact/error"));
        return;
      }
      await axios.post("http://localhost:3500/api/send-message", newSms);
      toast.success(GetText("contact/sucess"));
      setListOfSms((prev) => [...prev, newSms]);

      setSms({ name: "", email: "", subject: "" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.contactContainer} id="contactMe">
      <div className={styles.contactSection}>
        <div className={styles.contactSectionHeader}>
          <h1>{GetText("home/contactSection/header")}</h1>
          <h2>{GetText("contact/subHeader")}</h2>
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
                    className={styles.contactLink}
                  >
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
                    className={styles.contactLink}
                  >
                    Stockholm,Sweden
                  </a>
                </p>
              </li>
            </ul>

            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.formHeader}>
                <h3>{GetText("contact/sendHeader")}</h3>
                <BiSolidHandDown className={styles.handIcon} />
              </div>
              <label>
                <p>{GetText("contact/name")}</p>
                <input
                  type="text"
                  name="name"
                  value={sms.name}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </label>
              <label>
                <p>{GetText("contact/Email")}</p>

                <input
                  type="email"
                  name="email"
                  value={sms.email}
                  onChange={(e) =>
                    setSms((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </label>
              <label>
                <p>{GetText("contact/Message")}</p>
                <div className={styles.textareaContainer}>
                  <textarea
                    name="subject"
                    value={sms.subject}
                    onChange={(e) =>
                      setSms((prev) => ({ ...prev, subject: e.target.value }))
                    }
                  />
                  {sms.subject.length > 0 && (
                    <p className={styles.totalLetter}>
                      {GetText("contact/TotalLetter")} {sms.subject.length}
                    </p>
                  )}
                </div>
              </label>
              <button type="submit">
                {" "}
                <p>{GetText("contact/SendMessageBtn")}</p> <BiSend />
              </button>
            </form>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://github.com/josephkhella2010" target="_blank">
              <FiGithub className={styles.icons} />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-khella-058192251/"
              target="_blank"
            >
              <SlSocialLinkedin className={styles.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
