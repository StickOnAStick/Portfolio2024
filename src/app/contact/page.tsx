"use client"
import type { NextPage } from "next";
import emailjs from '@emailjs/browser'
import { useState } from "react";
import "../../styles/style.css"

const Contact: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  async function sendEmail(formData: FormData){
    setLoading(true);
    setError(null);
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    emailjs.send("service_xodvh1j", "template_n6d02np", rawFormData, "NUo4MTdfZDM6-dfmb")
    .then( (response) => {
      setLoading(false);
    }, (error) => {
      setLoading(false);
      setError("Error sending the email.")
    })
  }

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            {/* <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>San Jose, CA</p>
            </div> */}
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            {/* <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p>+99 **********</p>
            </div> */}
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            {/* <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>your@email.com</p>
            </div> */}
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}
          <div className="row">
            <form className="contact-form padd-15" method="POST" action={sendEmail}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                      id="subject"
                      name="subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                      defaultValue={""}
                      id="message"
                      name="message"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className={`btn ${loading ? "btn-disabled" : ""}`  } disabled={loading}>
                    Send Message
                  </button>
                </div>
              </div>
              <p>{error}</p>
            </form>
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
