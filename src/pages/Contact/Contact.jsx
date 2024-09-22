import React, { useEffect, useRef } from "react";
import "./Contact.css";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import telegram from "../../assets/images/telegram.png";
import Form from "../../components/Form/Form.jsx";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

function Contact() {
  const bannerText = useRef(null);
  const addressText = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      bannerText.current.classList.add("slide_up");
      addressText.current.classList.add("slide_up");
    }, 700);
  }, []);

  const openLink = (link) => {
    window.location.href = link;
  };

  return (
    <>
      <div className="contact_banner">
        <div className="contact_banner_text" ref={bannerText}>
          Contact Us
        </div>
      </div>
      <div className="contact_details_container" ref={addressText}>
        <div className="contact_details_address">
          <div className="primary_address">
            Philomathean Career Institute Pvt. Ltd.
          </div>
          <div className="secondary_address">
            202, Abhishek Building, Hetal Park, Opp. Jangid Estate, Mira Road
            East, Thane - 401107
          </div>
        </div>
        <div className="contact_details_links">
          <div className="contact_link">
            <div className="contact_link_icon">
              {/* <img src={call} alt={call} onClick={() => openLink('tel:932416073')} /> */}
              <FiPhone
                size={40}
                color="#6B6B6C"
                className="hover_icon ca"
                onClick={() => openLink("tel:932416073")}
              />
            </div>
            <div
              className="contact_link_text"
              onClick={() => openLink("tel:932416073")}
            >
              +91-9324164073
            </div>
          </div>
          <div className="contact_link">
            <div className="contact_link_icon">
              {/* <img src={mail} alt={mail} onClick={() => openLink('mailto:philomathean22@gmail.com')} /> */}
              <FiMail
                size={45}
                color="#6B6B6C"
                className="hover_icon em"
                onClick={() => openLink("mailto:philomathean22@gmail.com")}
              />
            </div>
            <div
              className="contact_link_text"
              onClick={() => openLink("mailto:philomathean22@gmail.com")}
            >
              philomathean22@gmail.com
            </div>
          </div>
          <div className="contact_link">
            <div className="contact_link_icon">
              {/* <img src={wa} alt={wa} onClick={() => openLink('https://wa.me/919324164073')} /> */}
              <ImWhatsapp
                size={40}
                color="#6B6B6C"
                className="hover_icon wa"
                onClick={() => openLink("https://wa.me/919324164073")}
              />
            </div>
            <div
              className="contact_link_text"
              onClick={() => openLink("https://wa.me/919324164073")}
            >
              +91-9324164073
            </div>
          </div>
        </div>
      </div>

      <div className="social_container">
        <div className="social_heading">Connect with us</div>
        <div className="social_icons_container">
          <img
            src={facebook}
            alt={facebook}
            className="social_icon"
            onClick={() =>
              openLink(
                "https://www.facebook.com/profile.php?id=61556699211021&mibextid=ZbWKwL"
              )
            }
          />
          <div className="divider_v"></div>
          <img
            src={twitter}
            alt={twitter}
            className="social_icon"
            onClick={() =>
              openLink(
                "https://x.com/Prodigious93549?t=OnVhH-I2nxlmR-dsoR7Bxw&s=08"
              )
            }
          />
          <div className="divider_v"></div>
          <img
            src={instagram}
            alt={instagram}
            className="social_icon"
            onClick={() =>
              openLink(
                "https://www.instagram.com/philomathean_2022?igsh=YW8za3l0NTF4bTl4"
              )
            }
          />
        </div>
      </div>

      <div className="form_component_container">
        <Form heading="Book a Demo / Enquiry" />
      </div>

      <div className="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.0201947501229!2d72.85101413266587!3d19.188144711175593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b74b6382b2e5%3A0xedaa0cac57eea62f!2sMalad%20Station!5e0!3m2!1sen!2sin!4v1683014520962!5m2!1sen!2sin"
          style={{ width: "100%", height: "100%", border: "0" }}
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
