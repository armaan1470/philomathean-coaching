import React from 'react';
import "./Contact.css";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import telegram from "../../assets/images/telegram.png";
import apple from "../../assets/images/apple.png";
import bulb from "../../assets/images/bulb.png";
import calculator from "../../assets/images/calculator.png";
import rocket from "../../assets/images/rocket.png";
import stick3 from "../../assets/images/3stick.png";
import Form from '../../components/Form/Form.jsx';
import { FiPhone, FiMail } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";

function Contact() {
    const openLink = (link) => { window.location.href = link };

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const floatAnimation = (delay = 0) => ({
        initial: { y: 0 },
        animate: { 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
        },
        transition: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay 
        }
    });

    return (
        <div className='contact_page_container'>
            {/* Creative Hero Section with Decorative Elements */}
            <section className="contact_hero_v2">
                <div className="hero_pattern_overlay"></div>
                <div className="hero_circle_1"></div>
                <div className="hero_circle_2"></div>
                
                {/* Floating Decorative Elements */}
                <motion.img src={apple} className="deco_item deco_apple" {...floatAnimation(0)} />
                <motion.img src={bulb} className="deco_item deco_bulb" {...floatAnimation(1)} />
                <motion.img src={rocket} className="deco_item deco_rocket" {...floatAnimation(2)} />
                <motion.img src={calculator} className="deco_item deco_calc" {...floatAnimation(0.5)} />

                <motion.div 
                    className="hero_title_wrapper"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={stick3} className="title_stick_deco" alt="" />
                    <h1>Connect <span>With Us</span></h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Your educational goals are our priority. Whether you have an enquiry or just want to say hi, our experts are ready to guide you.
                </motion.p>
            </section>

            {/* Quick Contact Glass Cards */}
            <div className="quick_contact_section">
                {[
                    { icon: <FiPhone />, title: "Call Us", detail: "+91-9324164073", link: "tel:9324164073", type: "call" },
                    { icon: <FiMail />, title: "Email Us", detail: "philomathean22@gmail.com", link: "mailto:philomathean22@gmail.com", type: "email" },
                    { icon: <ImWhatsapp />, title: "WhatsApp", detail: "+91-9324164073", link: "https://wa.me/919324164073", type: "whatsapp" }
                ].map((card, index) => (
                    <motion.div 
                        key={index}
                        className={`glass_card ${card.type}_card`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => openLink(card.link)}
                    >
                        <div className="card_icon_wrapper">{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.detail}</p>
                    </motion.div>
                ))}
            </div>

            {/* Main Contact Hub */}
            <section className="contact_hub_v2">
                <motion.div 
                    className="hub_info"
                    {...fadeIn}
                >
                    <div className="hub_badge">CONTACT HUB</div>
                    <h2>Let's build your <span>future</span> together.</h2>
                    <p>
                        Our team is dedicated to providing the best coaching and support. Whether it's career counseling, writing support, or course inquiries, we're just a message away.
                    </p>
                    
                    <div className="address_block">
                        <div className="address_icon"><GoLocation /></div>
                        <div className="address_text">
                            <h4>Our Institute</h4>
                            <p>202, Abhishek Building, Hetal Park,<br />Opp. Jangid Estate, Mira Road East,<br />Thane - 401107</p>
                        </div>
                    </div>

                    <div className="social_hub">
                        {[
                            { img: facebook, link: 'https://www.facebook.com/profile.php?id=100086078512350' },
                            { img: twitter, link: 'https://twitter.com/Prodigi69196135' },
                            { img: instagram, link: 'https://www.instagram.com/philomathean_2022/' },
                            { img: linkedin, link: 'https://www.linkedin.com/in/prodigious-career-institute-35292a251/' },
                            { img: telegram, link: 'https://telegram.org/' }
                        ].map((social, i) => (
                            <div key={i} className="social_btn" onClick={() => openLink(social.link)}>
                                <img src={social.img} alt="Social" />
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="hub_form_card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Form heading="Send us a Message" />
                </motion.div>
            </section>

            {/* Integrated Map with Overlay */}
            <div className="integrated_map_v2">
                <div className="map_overlay_card">
                    <h4>Philomathean Institute</h4>
                    <p>Visit us for a demo session and explore our facilities.</p>
                    <div className="map_card_footer">
                        <small>Open: 9:00 AM - 8:00 PM</small>
                    </div>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4143.729817790232!2d72.87442109999999!3d19.2764727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b170fc45aa33%3A0xc2e6c5d9395bf023!2sAbhishek%20Hetal%20Park!5e1!3m2!1sen!2sin!4v1774350996173!5m2!1sen!2sin" 
                    className="map_v2_frame"
                    loading="lazy"
                    title="map"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
