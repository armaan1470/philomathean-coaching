import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal"
import "./LandingPopup.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

function LandingPopup() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [currentCourse] = useTypewriter({
    words: [
      'IGCSE',
      'IB',
      'AS & A Levels',
      'IBDP',
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);


  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [course, setCourse] = useState('');


  const MySwal = withReactContent(Swal)

  const handleFormSubmit = () => {
    const form = document.querySelector('.landing_popup_form');
    if (form) {
      form.requestSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSfwdggFu9uKwCt1zmpoB3K0qTHZw2z6Sb9s-sLe10DUlwOcIA/formResponse';

    const data = new FormData();
    data.append('entry.872632858', firstname);
    data.append('entry.476034856', lastname);
    data.append('entry.691059052', email);
    data.append('entry.891414799', number);
    data.append('entry.1057841380', course);

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    })
      .then(() => {
        handleClose();
        MySwal.fire({
          title: <strong className='font_family' style={{ color: '#00028a' }}>Stay Tuned!</strong>,
          html: <span className='font_family' style={{ color: '#666' }}>We'll get back to you shortly for your <strong style={{ color: '#ff7b00' }}>{course}</strong> demo lecture.</span>,
          icon: 'success',
          iconColor: '#ff7b00',
          confirmButtonColor: '#00028a',
          confirmButtonText: 'Great!',
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setNumber('');
        setCourse('');
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        handleClose();
        MySwal.fire({
          title: <strong className='font_family'>Oops!</strong>,
          html: <i className='font_family'>Something went wrong. Please try again or contact us directly.</i>,
          icon: 'error',
          iconColor: '#ff2f26',
          confirmButtonColor: '#00A0FF',
          confirmButtonText: 'Okay',
        })
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="landing-popup-modal"
          closeAfterTransition
        >
          <motion.div 
            className="landing-popup-box"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className="close-button" onClick={handleClose} aria-label="Close">
              <span aria-hidden="true">✕</span>
            </button>
            
            <form onSubmit={handleSubmit} className='landing_popup_form'>
              <div className="landing_popup_content">
                <motion.div className="landing_popup_header" variants={itemVariants}>
                  <h2 className="landing_popup_heading">
                    BOOK YOUR <br />
                    <span className="typewriter-container">
                      <span className="highlighted_text">{currentCourse}</span>
                      <Cursor cursorStyle='|' cursorColor='#ff7b00' />
                    </span> 
                    <br /> DEMO LECTURE NOW!
                  </h2>
                  <p className="landing_popup_subheading">Transform your future with expert guidance.</p>
                </motion.div>

                <div className="landing_form_grid">
                  <motion.div className="form_group" variants={itemVariants}>
                    <input 
                      className='landing_form_input'
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder='First Name'
                      required
                    />
                  </motion.div>
                  
                  <motion.div className="form_group" variants={itemVariants}>
                    <input 
                      className='landing_form_input'
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder='Last Name'
                      required
                    />
                  </motion.div>

                  <motion.div className="form_group full_width" variants={itemVariants}>
                    <input 
                      className='landing_form_input'
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email Address'
                      required
                    />
                  </motion.div>

                  <motion.div className="form_group full_width" variants={itemVariants}>
                    <input 
                      className='landing_form_input'
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder='Phone Number'
                      required
                    />
                  </motion.div>

                  <motion.div className="form_group full_width" variants={itemVariants}>
                    <select 
                      className='landing_form_input select_input' 
                      name="course" 
                      id="course" 
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select Curriculum / Course</option>
                      <option value="IGCSE">IGCSE</option>
                      <option value="IB">IB</option>
                      <option value="AS_A_Level">AS & A Level</option>
                      <option value="IBDP">IBDP</option>
                      <option value="IIT_JEE">IIT-JEE</option>
                      <option value="NEET_UG">NEET (UG)</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div className="landing_popup_footer" variants={itemVariants}>
                  <button type="submit" className="submit_button">
                    <span>GET FREE DEMO</span>
                    <div className="shimmer"></div>
                  </button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default LandingPopup;
