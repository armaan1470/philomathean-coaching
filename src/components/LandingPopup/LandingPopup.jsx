import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Form from "../Form/Form"
import "./LandingPopup.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useTypewriter, Cursor } from "react-simple-typewriter";


function LandingPopup() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Use setTimeout to open the pop-up after 5 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
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
  })


  const handleOpen = () => {
    setOpen(true);
    console.log("cliked")
  };

  const handleClose = () => setOpen(false);


  // Styles moved to CSS file

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 5
    // width: "500px",
    // height: "500px"
  };

  // const buttonStyle = {
  //   borderRadius: "50%",
  //   color: "grey",
  //   minWidth: 0,
  //   width: "40px",
  //   height: "40px",
  //   padding: 0,
  //   fontSize: "30px",
  // };

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');


  const MySwal = withReactContent(Swal)

  const handleFormSubmit = () => {
    const form = document.querySelector('.landing_popup_container');
    if (form) {
      form.submit();
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
    data.append('entry.1057841380', message);

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
      .then(() => {
        alert('Form submitted successfully!');
        setName('');
        setNumber('');
      })
      .catch((error) => {
        onCloseModal();
        MySwal.fire({
          title: <strong className='font_family'>Congratulations</strong>,
          html: <i className='font_family'>Submited Successfully!</i>,
          icon: 'success',
          iconColor: '#FF6800',
          confirmButtonColor: '#00A0FF',
          confirmButtonText: 'Okay',
          confirmButtonTextSize: '10'



        })
      });


  };




  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box className="landing-popup-box">
          <div className="close-button" onClick={handleClose}>
            ✖
          </div>
          <Box sx={buttonContainerStyle}>
            <form onSubmit={handleSubmit} className='landing_popup_container'>
              <div className="landing_popup_firsthalf">

                <div className="landing_popup_heading">
                  BOOK YOUR {currentCourse}<Cursor cursorColor='#fff' />  DEMO <br /> LECTURE NOW!
                </div>

                <div>
                </div>


                <div className="landing_form_input1">
                  <input className='landing_form_input_field'
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Enter First Name'
                    required
                  />



                  <input className='landing_form_input_field'
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Enter Last Name'
                    required
                  />
                </div>

                <div className="landing_form_input2">
                  <input className='landing_form_input_field'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Email'
                    required
                  />



                  <input className='landing_form_input_field'
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Enter Phone number'
                    required
                  />

                  <select className='landing_form_input_field select' name="course" id="course" required>
                    <option value="" disabled selected>Select your Curriculum / Course</option>
                    <option value="IGCSE">IGCSE</option>
                    <option value="IB">IB</option>
                    <option value="AS_A_Level">AS & A Level</option>
                    <option value="IBDP">IBDP</option>
                    <option value="IIT_JEE">IIT-JEE</option>
                    <option value="NEET_UG">NEET (UG)</option>
                  </select>


                </div>


              </div>
              <div className="landing_popup_secondhalf" onClick={handleFormSubmit}>
                SUBMIT NOW
              </div>

            </form>

          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default LandingPopup;
