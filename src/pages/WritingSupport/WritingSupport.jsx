import React from "react";
import logo from "../../assets/writingsupport/writing support-Logo.png";
import ilust1 from "../../assets/writingsupport/writing support-1.png";
import ilust2 from "../../assets/writingsupport/writing support-2.png";
import ilust3 from "../../assets/writingsupport/writing support-3.png";
import ilust4 from "../../assets/writingsupport/writing support-4.png";
import ilust5 from "../../assets/writingsupport/writing support-6.png";
import ilust6 from "../../assets/writingsupport/writing support-7.png";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";
import Form from "../../components/Form/Form.jsx";
import ButtonModal from "../../components/ButtonModal/ButtonModal";
import "./WritingSupport.css";

const WritingSupport = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.2
            }
        },
        viewport: { once: true }
    };

    return (
        <div className="writing_support_page">
            {/* Original Banner Section */}
            <div className="banner b6">
                <div className="banner_content_area">
                    <div className="banner_text_content_area">
                        <div className="banner_heading">IB Writing Support</div>
                    </div>
                    <div className="banner_img_content_area">
                        <img src={logo} alt="Writing Support Logo" className="banner_img_content" />
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <motion.section 
                className="ws_section"
                {...fadeIn}
            >
                <div className="ws_image_container">
                    <img src={ilust1} alt="Theory of Knowledge" />
                </div>
                <div className="ws_text_container">
                    <span className="ws_category">CAREER COUNSELLING</span>
                    <h2>ToK (Theory of Knowledge)</h2>
                    <p>
                        Writing an IB ToK essay in one night isn’t the same as writing a typical essay. It’s more difficult, and you must strike the correct balance when presenting and defending your arguments. 
                        Our skilled writers at Philomathean will guide you through your ToK essay and presentation in the most effective way possible. 
                        We help you choose a topic, explore Areas of Knowledge, generate Knowledge Questions (KQs), and structure your arguments for maximum impact.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="ws_section reverse"
                {...fadeIn}
            >
                <div className="ws_image_container">
                    <img src={ilust3} alt="Internal Assessment" />
                </div>
                <div className="ws_text_container">
                    <span className="ws_category">ACADEMIC EXCELLENCE</span>
                    <h2>Internal Assessment (IA)</h2>
                    <p>
                        Choosing a topic for your IB Internal Assessment can be challenging. Our expert writers assist you in identifying a compelling topic and completing your IA on time with high-quality research. 
                        We ensure your final work meets academic standards and helps you achieve the grades you deserve. With our support, you don't have to worry about the heavy lifting of research and formatting.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="ws_section"
                {...fadeIn}
            >
                <div className="ws_image_container">
                    <img src={ilust4} alt="Extended Essays" />
                </div>
                <div className="ws_text_container">
                    <span className="ws_category">RESEARCH GUIDANCE</span>
                    <h2>Extended Essays (EE)</h2>
                    <p>
                        The Extended Essay is a core component of the IB, preparing students for university-level research. We provide comprehensive support from ideation and research to argument construction and final writing. 
                        Our assistance ensures your essay is consistent, well-structured, and focused on your investigative goals, allowing you to communicate your thoughts effectively.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="ws_section reverse"
                {...fadeIn}
            >
                <div className="ws_image_container">
                    <img src={ilust2} alt="CAS Projects" />
                </div>
                <div className="ws_text_container">
                    <span className="ws_category">CREATIVITY & SERVICE</span>
                    <h2>CAS Projects</h2>
                    <p>
                        The CAS project (Creativity, Activity, Service) is a collaborative experience essential for completing the IB Diploma. We encourage students to reflect and think critically while participating in collaborative projects. 
                        From planning to completion, we help you navigate the CAS strands and ensure your project promotes personal growth and community involvement.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="ws_section"
                {...fadeIn}
            >
                <div className="ws_image_container">
                    <img src={ilust5} alt="Statement of Purpose" />
                </div>
                <div className="ws_text_container">
                    <span className="ws_category">APPLICATIONS</span>
                    <h2>Statement of Purpose (SoP)</h2>
                    <p>
                        Standing out in the application process is crucial. Our team is well-versed in creating unique and impactful Statements of Purpose. 
                        Whether it's writing from scratch or professional editing to remove errors and improve flow, we ensure your SoP meets the highest expectations of selection committees.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="ws_section reverse"
                {...fadeIn}
            >
                <div className="ws_image_container">
                    <img src={ilust6} alt="Letters of Recommendation" />
                </div>
                <div className="ws_text_container">
                    <span className="ws_category">SUPPORT DOCUMENTS</span>
                    <h2>Letter of Recommendation (LOR)</h2>
                    <p>
                        A professional Letter of Recommendation can significantly boost your admission chances. We offer expert LOR writing services to ensure your academic achievements and skills are presented in the most professional and impressive manner. 
                        Our writers understand how to word recommendations to highlight your strengths effectively for admissions officers.
                    </p>
                </div>
            </motion.section>

            {/* Contact Section */}
            <section className="ws_contact_section">
                <div className="ws_contact_container">
                    <motion.div 
                        className="ws_contact_info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="sub_text">LET'S TALK</span>
                        <h2>Speak with our Writing Expert</h2>
                        <p>We are here to help you navigate your IB journey with confidence.</p>
                        
                        <div className="ws_info_cards">
                            <div className="ws_info_card">
                                <div className="ws_icon_box"><FiMail /></div>
                                <div className="ws_info_details">
                                    <h4>Email Us</h4>
                                    <p>philomathean22@gmail.com</p>
                                </div>
                            </div>
                            <div className="ws_info_card">
                                <div className="ws_icon_box"><FiPhone /></div>
                                <div className="ws_info_details">
                                    <h4>Call Us</h4>
                                    <p>+91-9324164073</p>
                                </div>
                            </div>
                            <div className="ws_info_card">
                                <div className="ws_icon_box"><GoLocation /></div>
                                <div className="ws_info_details">
                                    <h4>Visit Us</h4>
                                    <p>Mira Road East, Thane - 401107</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="ws_form_container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Form heading="Send a Query" />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="book_in_wrapper">
                <div className="book_in_container">
                    <div className="book_in_detail">
                        <small>Free Demo Lecture</small>
                        <h1>Ready to dive in?<br />Attain your Free Demo Lecture today.</h1>
                    </div>
                    <ButtonModal name="BOOK NOW" bg="white" clr="orange" bld="600" />
                </div>
            </div>
        </div>
    );
};

export default WritingSupport;
