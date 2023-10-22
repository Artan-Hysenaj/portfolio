import SecondaryLayout from '@/components/layouts/secondary/SecondaryLayout';
import { Fragment } from 'react';
import { NextPageWithLayout } from '../page';

const Contact: NextPageWithLayout = () => {
  return (
    <Fragment>
      <section id="contact-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="bottom-line"></div>
          <p className="lead">Here is how you can reach me</p>
          <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
            <div className="text-fields">
              <input
                type="text"
                className="text-input name-input"
                placeholder="Name"
                name="name"
              />
              <input
                type="text"
                className="text-input subject-input"
                placeholder="Subject"
                name="subject"
              />
              <input
                type="email"
                className="text-input email-input"
                placeholder="Email Address"
                name="email"
              />
              <input
                type="text"
                className="text-input phone-input"
                placeholder="Phone Number"
                name="phone"
              />
              <textarea
                className="text-input message-input"
                placeholder="Enter Message"
                name="message"
              ></textarea>
              <div className="my-2">
                <div data-netlify-recaptcha="true"></div>
              </div>
            </div>
            <button type="submit" className="btn-dark">
              Submit
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
