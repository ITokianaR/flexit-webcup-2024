import React from "react";
import "../contact/contact.css";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl mb-16 text-white" >Vous pouvez nous contacter ici</h1>
      <div className="flex justify-between gap-24 ">
        <div className="formContact-container">
          <form className="formContact">
            <div className="formContact-group">
              <label>Email</label>
              <input required name="email" id="email" type="text" />
            </div>
            <div className="formContact-group">
              <label>Ecrire votre message ici</label>
              <textarea required id="textarea" name="textarea">
                {" "}
              </textarea>
            </div>
            <button type="submit" className="formContact-submit-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4  w-[35vw] justify-center">
        <h1 className="text-[#DCF2F1]  font-semibold text-4xl">Nos coordonées</h1>
        <div className="flex gap-2 items-center text-[#DCF2F1]">
          <FaLocationArrow />
          <p>notre adresse</p>
        </div>
        <div className="flex gap-2 items-center text-[#DCF2F1]">
          <FaPhone />
          <p>00 000 0000</p>
        </div>
        <div className="flex gap-2 items-center text-[#DCF2F1]">
          <FaEnvelope />
          <p>ourmail@gmail.com</p>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
