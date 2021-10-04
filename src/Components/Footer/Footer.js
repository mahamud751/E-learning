import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FormControl, InputGroup } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import img from '../../logo2.png'
const Footer = () => {
    return (
        <div className="footer-main text-start p-5 mt-5">
            <div className="footer">
                <div>
                    <img className="footerImg" src={img} alt="" />
                </div>
                <div className="mt-5">
                    <h5>CONTACT US</h5>
                    <br />
                    <p><FontAwesomeIcon icon={faPhone} /> PHONE: <small>+880189999929</small></p>
                    <p><i class="fas fa-envelope"></i> Email: <small className="small">abc@yahoo.com</small> </p>
                </div>
                <div className="mt-5 text-center">
                    <h5>SOCIAL</h5>
                    <i class="fab fa-facebook fa-2x p-3"></i>
                    <i class="fab fa-facebook-messenger fa-2x p-2"></i>
                    <i class="fab fa-google-plus fa-2x p-2"></i>
                    <i class="fab fa-skype fa-2x p-2"></i>
                    <i class="fab fa-twitter fa-2x p-2"></i>
                    <i class="fab fa-linkedin fa-2x p-2"></i>

                </div>
                <div className="mt-5">
                    <h4>Do You Need Help With
                        Anything?</h4>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email Address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="" id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <p className="text-center text-white mt-4">© Copyright © pino. All rights reserved.</p>
        </div >
    );
};

export default Footer;