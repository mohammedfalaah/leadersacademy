import React, { useState } from 'react'
import TestimonialCarousel from './TestimonialCarousel'
import WhatsappChat from './WhatsappChat'
import { useRef } from "react";

function Home() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const scriptURL =
  //   "https://script.google.com/macros/s/AKfycbwvOQ6Md9HMIlxps4ip84mhCfgptzXkuLSkADlh9ra6T1BgndKNPw25calN9hqf_zx7jQ/exec";

  //   try {
  //     const response = await fetch(scriptURL, {
  //       method: "POST",
  //       body: new FormData(e.target),
  //     });
      

  //     if (response.ok) {
  //       alert("Form submitted successfully!");
  //       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  //     } else {
  //       alert("Error submitting form. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbygHhsVcFuKrDt3fW1FTFX6buCJOzmV58CasUxmOFmRJMPhgyyMJ0oUzSo6WHEUGqoUBw/exec";

    const formData = new URLSearchParams();
    formData.append("Name", e.target.name.value);
    formData.append("Email", e.target.email.value);
    formData.append("Phone", e.target.phone.value);
    formData.append("Subject", e.target.subject.value);
    formData.append("Message", e.target.message.value);

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }, 
        body: formData.toString()
    })
    .then(res => res.text())
    .then(data => {
        alert(data); // Show success message
    })
    .catch(error => console.error("Error:", error));
};
const videoRef = useRef(null);

const playVideo = (e) => {
  e.preventDefault(); // Prevents default action of anchor tag
  if (videoRef.current) {
    videoRef.current.play();
  }
};

  return (
<>
<div className="main-content">
    {/* Banner Section Start */}            
    <div id="rs-banner" className="rs-banner style7">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1 className="banner-title white-color">Empowering Learning, Shaping Futures!</h1>
              <div className="desc white-color mb-50">
              Join our expert-led courses in English, Arabic, Malayalam, Hindi, and Mathematics.
              </div>
              <div className="btn-part">
                <a className="readon border-less" href="#">Explore Now</a>
              </div>
            </div>
            <div className="icons one up-down">
              <img src="assets/images/banner/home7/icon/2.png" alt="Images" />
            </div> 
            <div className="icons two left-right">
              <img src="assets/images/banner/home7/icon/1.png" alt="Images" />
            </div> 
            <div className="icons three left-right">
              <img src="assets/images/banner/home7/icon/1.png" alt="Images" />
            </div> 
            <div className="icons four up-down">
              <img src="assets/images/banner/home7/icon/2.png" alt="Images" />
            </div>
          </div>
          <div className="offset-lg-6" />
        </div>
      </div>
      <div className="img-part">
        <img src="assets/images/banner/home7/img-1.png" alt="Images" />
      </div>
    </div>
    <WhatsappChat />

    {/* Banner Section End */}
    {/* Services Section Start */}
   
    {/* Services Section End */}
    {/* About Section Start */}
    <section  id="about">
    <div className="rs-about style7 pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 md-mb-30">
            <div className="img-part js-tilt">
              <img src="assets/images/about/home7/about.png" alt="images" />
            </div>
          </div>
          <div className="col-lg-6 pl-50 md-pl-15 col-md-12">
            <div className="sec-title2">
              <div className="sub-title">
                About
              </div>
              <h2 className="title mb-30">Leaders Advanced Studies Established Since 2020</h2>
              <p className="desc mb-25">
              At Leaders Advanced Studies, we believe that education is the foundation of a brighter future. Our mission is to provide high-quality, accessible, and engaging learning experiences to students worldwide. With expert instructors and interactive online courses, we empower students to excel in English, Arabic, Malayalam, Hindi, and Mathematics.              </p>
            </div>
            {/* <div className="btn-part">
              <a className="readon banner-style uppercase" href="#">Read More</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </section>
    
    {/* About Section End */}
   <div className="rs-about video-style pt-120 pb-100 md-pt-90 md-pb-70">
  <div className="container relative">
    <div className="icon-shape js-tilt">
      <img className="shape" src="assets/images/about/icon-shape.png" alt="Icon Shape" />
    </div>
    <div className="row">                        
      <div className="col-lg-6">
       
        <div className="about-content gray-bg">
          <div className="sec-title mb-46 md-mb-30 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <div className="sub-title primary">Who We Are</div>
            <h2 className="title">Develope Your Skills<br />Shine Your Life</h2>
            <div className="desc pr-30">
            Leaders Advanced Studies is an innovative e-learning platform dedicated to helping students achieve academic success. We provide a structured, interactive, and engaging learning environment, designed to meet the needs of students across different educational levels. Our courses are led by experienced educators who focus on building strong foundational skills and confidence in learners.</div>
          </div>
          {/* <div className="btn-part wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <a className="readon2" href="#">Read More</a>
          </div> */}
        </div>
      </div>
      <div className="col-lg-6">
      <div className="img-part media-icon">
        {/* Video Element */}
        <video ref={videoRef} className="video-img" src="/assets/images/video 1.mp4" alt="Video Image" controls />

        {/* Play Button */}
        <a className="popup-videos" href="#" onClick={playVideo}>
          <i className="fa fa-play" />
        </a>

        {/* Additional Image */}
        <img className="dot-shape js-tilt" src="assets/images/about/dot-shape.png" alt="Shape" />
      </div>
    </div>
    </div>
  </div>
</div>

    {/* Popular Courses Section Start */}
    <section id='course'>
    <div id="rs-featured-courses" className="rs-featured-courses pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container">
        <div className="sec-title2 text-center">
          <div className="sub-title uppercase mb-10">
            Top Courses
          </div>
          <h2 className="title mb-30">Our Courses</h2>
        </div>
        <div className="rs-services style7 pt-100 md-pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 md-mb-30">
            <div className="services-item">
              <div className="img-part">
                <img src="assets/images/services/home7/bg/1.png" alt="images" /> 
              </div>
              <div className="content-part">
                <div className="icon-part mb-30 md-mb-15">
                  <img src="assets/images/services/home7/icon/1.png" alt="images" /> 
                </div>
                <h4 className="title"><a href="#">English</a></h4>
                <p className="desc">Grammar, Writing Skills, Speaking & Comprehension</p>
              </div>
            </div>
          </div> 
          <div className="col-lg-3 col-md-6 md-mb-30">
            <div className="services-item">
              <div className="img-part">
                <img src="assets/images/services/home7/bg/2.png" alt="images" /> 
              </div>
              <div className="content-part">
                <div className="icon-part mb-30 md-mb-15">
                  <img src="assets/images/services/home7/icon/2.png" alt="images" /> 
                </div>
                <h4 className="title"><a href="#">Arabic</a></h4>
                <p className="desc">Reading, Writing & Speaking for Beginners & Advanced Learners</p>
              </div>
            </div>
          </div> 
          <div className="col-lg-3 col-md-6 md-mb-30">
            <div className="services-item">
              <div className="img-part">
                <img src="assets/images/services/home7/bg/3.png" alt="images" /> 
              </div>
              <div className="content-part">
                <div className="icon-part mb-30 md-mb-15">
                  <img src="assets/images/services/home7/icon/3.png" alt="images" /> 
                </div>
                <h4 className="title"><a href="#">Malayalam</a></h4>
                <p className="desc">Native Language Training & Academic Support</p>
              </div>
            </div>
          </div> 
          <div className="col-lg-3 col-md-6">
            <div className="services-item">
              <div className="img-part">
                <img src="assets/images/services/home7/bg/4.png" alt="images" /> 
              </div>
              <div className="content-part">
                <div className="icon-part mb-30 md-mb-15">
                  <img src="assets/images/services/home7/icon/4.png" alt="images" /> 
                </div>
                <h4 className="title"><a href="#">Mathematics</a></h4>
                <p className="desc">Concept-Based Learning for Strong Fundamentals</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-10">
            <div className="services-item">
              <div className="img-part">
                <img src="assets/images/services/home7/bg/4.png" alt="images" /> 
              </div>
              <div className="content-part">
                <div className="icon-part mb-30 md-mb-15">
                  <img src="assets/images/services/home7/icon/4.png" alt="images" /> 
                </div>
                <h4 className="title"><a href="#">Hindi</a></h4>
                <p className="desc">Spoken & Written Hindi for All Levels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
      </div>
    </div>
    </section>
    

    {/* Popular Courses Section End */}        
    {/* CTA Section Start */}


    {/* CTA Section End */} 
    {/* Facilities Section Start */}
   
    {/* Facilities Section End */}
    {/* Counter Section Start */}
    {/* <div className="rs-counter style7 pb-100 md-pb-70">
      <div className="container">
        <div className="row couter-area">
          <div className="col-lg-3 col-md-6 md-mb-30">
            <div className="counter-item text-center">
              <h2 className="rs-count purple-color">2.958</h2>
              <h4 className="title mb-0">Finished Sessions</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 md-mb-30">
            <div className="counter-item text-center">
              <h2 className="rs-count plus blue-color">4.523</h2>
              <h4 className="title mb-0">Enrolled Learners</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-mb-30">
            <div className="counter-item text-center">
              <h2 className="rs-count plus pink-color">120</h2>
              <h4 className="title mb-0">Online Instructors</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="counter-item text-center">
              <h2 className="rs-count percent orange-color">100</h2>
              <h4 className="title mb-0">Satisfaction Rate</h4>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Counter Section Start */}
    {/* Team Section Start */}
  
   
    {/* Publication Section End */}
 

  
    {/* Newsletter section start */}
  
    <div className="why-choose-us gray-bg pt-110 pb-120 md-pt-70 md-pb-80">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 lg-pr-0 md-mb-50">
        <div className="choose-us-part">
          <div className="sec-title wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <h2 className="title mb-10">Why Choose Us</h2>
            <p className=" mb-35">
            At Leaders Advanced Studies, we are committed to providing high-quality, interactive, and accessible education to help students achieve academic success. Here’s why students and parents trust us:            </p>
          </div>
          <div className="facilities-part">
            <div className="single-facility wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
              <div className="icon-part one">
                <img className="shape-img" src="assets/images/about/one.png" alt="Shape Image" />
                <i className="flaticon-analysis" />
              </div>
              <div className="text-part">
                <h4 className="title">Expert Educators</h4>
                <p className="desc">Our teachers are industry experts with years of experience in their respective fields.</p>
              </div>
            </div>
            <div className="single-facility wow fadeInUp" data-wow-delay="400ms" data-wow-duration="2000ms">
              <div className="icon-part one">
                <img className="shape-img" src="assets/images/about/two.png" alt="Shape Image" />
                <i className="flaticon-document" />
              </div>
              <div className="text-part">
                <h4 className="title">WhatsApp Support</h4>
                <p className="desc">Quick communication and instant updates for students and parents.</p>
              </div>
            </div>
            <div className="single-facility wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">
              <div className="icon-part one">
                <img className="shape-img" src="assets/images/about/three.png" alt="Shape Image" />
                <i className="flaticon-tax" />
              </div>
              <div className="text-part">
                <h4 className="title">Affordable & Flexible Learning</h4>
                <p className="desc">We offer budget-friendly courses with flexible payment options.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offset-lg-1" />
      <div className="col-lg-6 lg-pl-0">
        <div className="free-course-contact">
          <span className="mb-30"></span>
    <div className="container">
      <div className="row">
        <div className="offset-lg-6" />
          <div className="sec-title3 mb-40">
            <h2  className="title  mb-16">Register Now & Start Learning!</h2>
            <div className="desc  pr-100 md-pr-0">Education is the key to success, and at Leaders Advanced Studies, we make learning easier and more accessible for you. By registering today, you’ll gain immediate access to expert-designed courses.</div>
          </div>
          <div className="btn-part">
            <a className="readon orange-btn transparent" href="https://docs.google.com/forms/d/e/1FAIpQLScZsFh8OgEEQ-1P40h_gLPdacWe04_UytXYMSvVZwiqLuE0-A/viewform">Register Now</a>
          </div>
      </div>
    </div>

        </div>
      </div>
    </div>
  </div>
</div>
<TestimonialCarousel></TestimonialCarousel>


<div className="contact-page-section pt-100 pb-100 md-pt-70 md-pb-70">
  <div className="container">
  <div className="sec-title3 text-center">
  <h2 className="title mb-30">Contact Us </h2>
  </div>
    <div className="row rs-contact-box mb-90 md-mb-50">
      <div className="col-lg-4 col-md-12-4 lg-pl-0 sm-mb-30 md-mb-30">
        <div className="address-item">
          <div className="icon-part">
            <img src="assets/images/contact/icon/1.png" alt />
          </div>
          <div className="address-text">
            <span className="label">Address</span>
            <span className="des">CHUNDAKKADAN BUILDING, opposite of Rajadani & Alankhar Furniture, Payayangadi, Kondotty, Kerala 673638</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
        <div className="address-item">
          <div className="icon-part">
            <img src="assets/images/contact/icon/2.png" alt />
          </div>
          <div className="address-text">
            <span className="label">Email Address</span>
            <span className="des"><a href="mailto:leaderskdy@gmail.com">leaderskdy@gmail.com</a></span>
          </div>
        </div>
      </div> 
      <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30">
        <div className="address-item">
          <div className="icon-part">
            <img src="assets/images/contact/icon/3.png" alt />
          </div>
          <div className="address-text">
            <span className="label">Phone Number</span>
            <span className="des"><a > +91 6282 380 478</a></span>
          </div>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6 md-mb-30">
        {/* Map Section Start */} 
        <div className="contact-map3">
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7658.422402334656!2d75.95950225373397!3d11.149462354615947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64fe708cc22cf%3A0x2f0a18220fe14513!2sLeaders%20academy!5e0!3m2!1sen!2sin!4v1741845668948!5m2!1sen!2sin"
    width="400"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps"
  ></iframe>        </div>
      </div>
      <div className="col-lg-6 pl-60 md-pl-15">
        <div className="contact-comment-box">
          <div className="inner-part">
            <h2 className="title mb-mb-15">Get In Touch</h2>
            <p>Have some suggestions or just want to say hi? Our  support team are ready to help you 24/7.</p>
          </div>
          {/* <div id="form-messages" /> */}
          <form onSubmit={handleSubmit} id="contact-form">
  <fieldset>
    <div className="row">
      <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
        <input className="from-control" type="text" name="name" placeholder="Name" required />
      </div> 
      <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
        <input className="from-control" type="email" name="email" placeholder="Email" required />
      </div>   
      <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
        <input className="from-control" type="text" name="phone" placeholder="Phone" required />
      </div>   
      <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
        <input className="from-control" type="text" name="subject" placeholder="Subject" required />
      </div>
      <div className="col-lg-12 mb-50">
        <textarea className="from-control" name="message" placeholder="Message" required />
      </div>
    </div>
    <div className="form-group mb-0">
      <input className="btn-send" type="submit" value="Submit Now" />
    </div>										   
  </fieldset>
</form>


          {/* <form id="contact-form" onSubmit={handleSubmit}>
            <input name='name' type="text" placeholder='Name' />
            <input name='email' type="text" placeholder='Email' />
            <button>add</button>
   
    </form> */}
        </div>
      </div>
    </div>
  </div>
</div>
   
  </div> 
 

</>
  )
}

export default Home