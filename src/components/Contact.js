import styles from "../style.module.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className={`${styles.contactPage}`}>
        <div className={`${styles.contactContainer}`}>
          <div className={`${styles.contactContent1}`}>
            <div className={`${styles.contactContent2}`}>
              <div className={`${styles.contactHeader}`}>
                <h3 className={`${styles.contactHeader_h3}`}>Contact Me</h3>
                <p className={`${styles.contactHeader_p}`}>
                  Hi there, contact me to ask me about <br className="sm:hidden" /> anything you have in
                  mind.
                </p>
              </div>
              <div className={`${styles.contactForm}`}>
                <div className={`${styles.contactFormfields}`}>
                  <div className={`${styles.nameField}`}>
                    <label
                      htmlFor="First name"
                      className={`${styles.formLabels}`}
                    >
                      First name
                      <input
                        className={`${styles.formInputs}`}
                        type="text"
                        name="fname"
                        placeholder="Enter your first name"
                        required
                      />
                    </label>
                    <label
                      htmlFor="Last name"
                      className={`${styles.formLabels}`}
                    >
                      Last name
                      <input
                        className={`${styles.formInputs}`}
                        type="text"
                        name="lname"
                        placeholder="Enter your last name"
                        required
                      />
                    </label>
                  </div>
                  <div className={`${styles.emailField}`}>
                    <label htmlFor="email" className={`${styles.formLabels}`}>
                      Email address
                      <input
                        className={`${styles.formInputs2}`}
                        type="email"
                        name="email"
                        placeholder="yourname@email.com"
                        required
                      />
                    </label>
                  </div>
                  <div className={`${styles.textField}`}>
                    <label htmlFor="message" className={`${styles.formLabels}`}>
                      Message
                      <textarea
                        className={`${styles.formInputs2}`}
                        placeholder={`Send me a message and I'll reply you as soon as possible...`}
                        name="message"
                        id=""
                        rows="4"
                        cols="4"
                      ></textarea>
                    </label>
                  </div>
                  <div className={`${styles.formCheckbox}`}>
                    <input
                      className={`${styles.formInputsBox}`}
                      type="checkbox"
                      name="checkbox"
                      id=""
                    />
                    <label
                      htmlFor="checkbox"
                      className={`${styles.formLabels}`}
                    >
                      You agree to providing your data to <br className="sm:hidden" /> {`Drizzy0x`} who may
                      contact you.
                    </label>
                  </div>
                  <div className={`${styles.formButton}`}>
                    <input className={`${styles.formInputsBtn}`} type="submit" value="Send message" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
