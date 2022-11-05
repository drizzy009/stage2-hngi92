import styles from "../style.module.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formvalue, setFormvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  };
  const validationform = (value) => {
    const errors = {};
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.fname) {
      errors.fname = "Please First Enter Name";
    }
    if (!value.lname) {
      errors.lname = "Please Your Enter Name";
    }

    if (!value.email) {
      errors.email = "Please Enter Email";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Enter Valid Email";
    }
    if (!value.message) {
      errors.message = "Please Enter a message";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
    }
  }, [formerror, formvalue, issubmit]);


  console.log(formvalue.fname)
  console.log(formvalue.lname)
  console.log(formvalue.email)

  return (
    <div>
      <div className={`${styles.contactPage}`}>
        <div className={`${styles.contactContainer}`}>
          <div className={`${styles.contactContent1}`}>
            <div className={`${styles.contactContent2}`}>
              <div className={`${styles.contactHeader}`}>
                <h3 className={`${styles.contactHeader_h3}`}>Contact Me</h3>
                <p className={`${styles.contactHeader_p}`}>
                  Hi there, contact me to ask me about{" "}
                  <br className="sm:hidden" /> anything you have in mind.
                </p>
              </div>
              <form onSubmit={ handlesubmit} className={`${styles.contactForm}`}>
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
                        value={ formvalue.fname}  onChange={ handlevalidation}
                        required
                      />
                      <br/>
                    <span className={`${styles.formHint}`}>{ formerror.fname }</span>
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
                        value={ formvalue.lname}  onChange={ handlevalidation}
                        required
                      />
                      <br/>
                    <span className="text-danger">{ formerror.lname } </span>
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
                        value={ formvalue.email}  onChange={ handlevalidation}
                        required
                      />
                      <br/>
                    <span className="text-danger">{ formerror.email } </span>
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
                        value={ formvalue.message}  onChange={ handlevalidation}
                      ></textarea>
                      <br/>
                    <span className="text-danger">{ formerror.message } </span>
                    </label>
                  </div>
                  <div className={`${styles.formCheckbox}`}>
                    <input
                      className={`${styles.formInputsBox}`}
                      type="checkbox"
                      name="checkbox"
                      id=""
                      required
                    />
                    <label
                      htmlFor="checkbox"
                      className={`${styles.formLabels}`}
                    >
                      You agree to providing your data to{" "}
                      <br className="sm:hidden" /> {`Drizzy0x`} who may contact
                      you.
                    </label>
                  </div>
                  <div className={`${styles.formButton}`}>
                    <button className={`${styles.formInputsBtn}`}>
                      Send message
                    </button>
                  </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
