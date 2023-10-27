import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import emailjs from '@emailjs/browser';
import { Fragment, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { NextPageWithLayout } from '../page';

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID as string;
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY as string;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID as string;
const RE_CAPTCHA_KEY = process.env.RE_CAPTCHA_KEY as string;

const Contact: NextPageWithLayout = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [sendingEmail, setSendingEmail] = useState(false); // TODO: Show loading spinner
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendingEmail(true);
    const recaptchaToken = await recaptchaRef.current?.executeAsync();

    const emailData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...emailData, 'g-recaptcha-response': recaptchaToken },
        PUBLIC_KEY
      )
      .then((result) => {
        alert(result.text);
        formRef.current?.reset();
      })
      .catch((error) => {
        alert(error.text);
      })
      .finally(() => {
        setSendingEmail(false);
      });
  };
  return (
    <Fragment>
      <section id="contact-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="bottom-line"></div>
          <p className="lead">Here is how you can reach me</p>
          <form ref={formRef} onSubmit={submitHandler}>
            <div className="text-fields">
              <input
                type="text"
                className="text-input name-input"
                placeholder="Name"
                name="name"
                required
              />
              <input
                type="text"
                className="text-input subject-input"
                placeholder="Subject"
                name="subject"
                required
              />
              <input
                type="email"
                className="text-input email-input"
                placeholder="Email Address"
                name="email"
                required
              />
              <input
                type="text"
                className="text-input phone-input"
                placeholder="Phone Number"
                name="phone"
                required
              />
              <textarea
                className="text-input message-input"
                placeholder="Enter Message"
                name="message"
                required
              ></textarea>
              <div className="recaptcha-container">
                <ReCAPTCHA
                  className="mx-auto"
                  style={{ opacity: recaptchaLoaded ? 1 : 0.5 }}
                  ref={recaptchaRef}
                  sitekey={RE_CAPTCHA_KEY}
                  size="invisible"
                  badge="inline"
                  asyncScriptOnLoad={() => {
                    setRecaptchaLoaded(true);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="btn-dark" disabled={sendingEmail}>
              {sendingEmail ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>

      <section id="contact-b" className="py-3 bg-dark">
        <div className="container">
          <div className="contact-info">
            <div>
              <i className="fas fa-envelope fa-2x"></i>
              <h3>Email</h3>
              <p>artan.hysenaj@gmail.com</p>
            </div>
            <div>
              <i className="fas fa-phone fa-2x"></i>
              <h3>Phone</h3>
              <p>(+383) 049-427-936</p>
            </div>
            <div>
              <i className="fas fa-address-card fa-2x"></i>
              <h3>Address</h3>
              <p>Pejë, Republic of Kosova</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-c" className="bg-main py-4">
        <div className="container">
          <h1>Let&apos;s Start Your Next Project</h1>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
