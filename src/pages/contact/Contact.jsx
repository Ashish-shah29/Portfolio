import React, { useEffect, useState } from "react";
import { FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import '../../master.css';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { apiConnector } from "../../services/apiConnector";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        name: "",
        message: "",
        title: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitForm = async (data) => {
    console.log("data  : ", data);
    const formdata = new FormData();
    // formdata.append("name",data.name)
    // formdata.append("email",data.email)
    // formdata.append("title",data.title)
    // formdata.append("message",data.message)
    // console.log("form data is : ",formdata)
    const toastId = toast.loading("loading...");
    try {
      const response = await apiConnector(
        "POST",
        "http://localhost:4000/my-portfolio/sendmail",
        data
      );
      if (!response?.data?.success) {
        throw new Error("mail not sent");
      }
      toast.success("Message Sent Successfully");
    } catch (err) {
      toast.error("could not send message");
    }
    toast.dismiss(toastId);
  };
  return (
    <section className="section contact">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Ready for the next step? Whether it's a job opportunity or collaboration, I'm all ears. Drop me a line via the form below or connect on social media. Let's chat!
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <div className="info__desc">ashishshah036@gmail.com</div>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <div className="info__desc">+91 91095 17519</div>
              </div>
            </div>
            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/ashish-shah-1a8942241/"
                target="_blank"
                className="contact__social-link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/a.s.h.i.s.h._29/"
                target="_blank"
                className="contact__social-link"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(submitForm)} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span classname="-mt-1 text-[12px] text-yellow-100">
                  Please enter your name
                </span>
              )}
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span classname="-mt-1 text-[12px] text-yellow-100">
                  Please enter your email
                </span>
              )}
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span classname="-mt-1 text-[12px] text-yellow-100">
                  Please enter subject
                </span>
              )}
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span classname="-mt-1 text-[12px] text-yellow-100">
                Please enter your message
              </span>
            )}
          </div>
          <button type="submit" className="button">
            Send Message
            <span className="button_icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
