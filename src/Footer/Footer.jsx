import React, {useEffect} from 'react'
import './footer.css'

// React Icons
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import {FaChevronRight} from 'react-icons/fa';

// Aos
import Aos from 'aos';
import 'aos/dist/aos.css';


// Video2
import video2 from '../Home/Assests/مقطع فيديو بحر وشاطئ وأمواج - طبيعة للمونتاج HD.mp4';

const Footer = () => {

  // Lets Create a React hook to add scrolle animation
  useEffect(() => {
    Aos.init({
        duration: 1000,
      });
    }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} autoPlay loop muted typeof='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="email" required placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Incidunt dolorum reprehenderit expedita
              cum sed, vel omnis alias repudiandae delectus
              officiis mollitia eum ipsam molestiae corrupti!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaYoutube  className="icon" />
              <FaInstagram className="icon" />
              <FaTripadvisor  className="icon" />
            </div>
          </div>

          {/* Groupe One */}
          <div className="footerLinks grid">
            <div data-aos="fade-up"
            data-aos-duration="3000" 
            className="linkGroupe">
              <span className="groupeTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Payment
              </li>

            </div>
          </div>

          {/* Groupe Two */}
          <div className="footerLinks grid">
            <div data-aos="fade-up"
            data-aos-duration="4000" 
            className="linkGroupe">
              <span className="groupeTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                RentCars
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                TripAdvisor
              </li>

            </div>
          </div>

          {/* Groupe Three */}
          <div className="footerLinks grid">
            <div data-aos="fade-up" 
            data-aos-duration="5000"
            className="linkGroupe">
              <span className="groupeTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Oceania
              </li>

            </div>
          </div>
        </div>

        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEMe</small>
          <small>COPYRIGHTS RESERVED - </small>
        </div>
      </div>
    </section>
  )
}

export default Footer;