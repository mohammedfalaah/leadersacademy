import React, { useContext, useRef, useState } from "react";
import { NavContext } from "../providers/NavContext";

 
function Header() {

    const { isNavExpanded, setIsNavExpanded } = useContext(NavContext);
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
  
      if (menuRef.current) {
        if (!isMenuOpen) {
          menuRef.current.classList.add("rs-menu-toggle-open");
          menuRef.current.classList.remove("rs-menu-toggle-close");
        } else {
          menuRef.current.classList.add("rs-menu-toggle-close");
          menuRef.current.classList.remove("rs-menu-toggle-open");
        }
      }
    }

    const scrollToAbout = (e) => {
      e.preventDefault();
      document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "start" });
    };
    
    const scrollToCourses = (e) => {
      e.preventDefault();
      document.getElementById("course").scrollIntoView({ behavior: "smooth", block:"start"})
    }

    
  return (
  <>
   {/*Full width header Start*/}
 <div className="full-width-header header-style1 home1-modifiy">
  {/*Header Start*/}
  <header id="rs-header" className="rs-header">
    {/* Topbar Area Start */}
    <div className="topbar-area dark-parimary-bg">
      <div className="container">
        <div className="row y-middle">
          <div className="col-md-7">
            <ul className="topbar-contact">
              <li>
                <i className="flaticon-email" />
                <a href="mailto:leaderskdy@gmail.com">leaderskdy@gmail.com</a>
              </li>
              <li>
                <i className="flaticon-phone" />
                +91 6282 380 478
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-right">
            <ul className="topbar-right">
              {/* <li className="login-register">
                <i className="fa fa-sign-in" />
                <a href="login.html">Login</a>/<a href="register.html">Register</a>
              </li> */}
              <li className="btn-part">
                <a className="apply-btn" href="#">Join Now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar Area End */}
    {/* Menu Start */}
    <div className="menu-area menu-sticky">
      <div className="container">
        <div className="row y-middle">
          <div className="col-lg-2">
            <div className="logo-cat-wrap">
              <div className="logo-part">
                <a href="index.html">
                  <img  src="assets/images/loogo.png" alt />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 text-right">
            <div className="rs-menu-area">
              <div className="main-menu">
                <div
                ref={menuRef}
                className="mobile-menu rs-menu-toggle-close">
                  <a className="rs-menu-toggle"  onClick={toggleMenu}>
                    <i className="fa fa-bars" />
                  </a>
                </div>
                <nav className="rs-menu"
                style={{
                  height: isMenuOpen ? "420px" : "0px",
                  overflow: "hidden",
                  transition: "height 0.3s ease",
                }}>
                  <ul className="nav-menu">
                    <li className="rs-mega-menu mega-rs  current-menu-item"> <a >Home</a>
                    {/* //.mega-menu */}
                    </li>
                    <li>
  <a href="#" onClick={scrollToAbout}>About</a>
</li>

                    <li >
                      <a href="#" onClick={scrollToCourses}>Courses</a>
                   
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    
                    </li>
                  </ul> {/* //.nav-menu */}
                </nav>                                         
              </div> {/* //.main-menu */}                                
            </div>
          </div>
          <div className="col-lg-2 text-right">
            <div className="expand-btn-inner" onClick={() => setIsNavExpanded(!isNavExpanded)}>
              
              <div className="expand-btn-inner" onClick={() => setIsNavExpanded(!isNavExpanded)}>
              <span>
                <a id="nav-expander" className="nav-expander style3">
                  <span className="dot1" />
                  <span className="dot2" />
                  <span className="dot3" />
                </a>
              </span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Menu End */} 
    {/* Canvas Menu start */}
    <nav className="right_menu_togle hidden-md">
      <div className="close-btn">
        <div id="nav-close" onClick={() => setIsNavExpanded(false)}>
          <div className="line">
            <span className="line1" /><span className="line2" />
          </div>
        </div>
      </div>
      <div className="canvas-logo">
        <a href="index.html"><img src="assets/images/loogo.png" alt="logo" /></a>
      </div>
      <div className="offcanvas-text">
        <p>We denounce with righteous indige nationality and dislike men who are so beguiled and demo  by the charms of pleasure of the moment data com so blinded by desire.</p>
      </div>
      <div className="offcanvas-gallery">
        <div className="gallery-img">
          <a className="image-popup" href="assets/images/gallery/1.jpg"><img src="assets/images/gallery/1.jpg" alt /></a>
        </div>
        <div className="gallery-img">
          <a className="image-popup" href="assets/images/gallery/2.jpg"><img src="assets/images/gallery/2.jpg" alt /></a>
        </div>
        <div className="gallery-img">
          <a className="image-popup" href="assets/images/gallery/3.jpg"><img src="assets/images/gallery/3.jpg" alt /></a>
        </div>
        <div className="gallery-img">
          <a className="image-popup" href="assets/images/gallery/4.jpg"><img src="assets/images/gallery/4.jpg" alt /></a>
        </div>
        <div className="gallery-img">
          <a className="image-popup" href="assets/images/gallery/5.jpg"><img src="assets/images/gallery/5.jpg" alt /></a>
        </div>
        <div className="gallery-img">
          <a className="image-popup" href="assets/images/gallery/6.jpg"><img src="assets/images/gallery/6.jpg" alt /></a>
        </div>
      </div>
      <div className="map-img">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7658.422402334656!2d75.95950225373397!3d11.149462354615947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64fe708cc22cf%3A0x2f0a18220fe14513!2sLeaders%20academy!5e0!3m2!1sen!2sin!4v1741845668948!5m2!1sen!2sin"
    width="400"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps"
  ></iframe>
</div>
      <div className="canvas-contact">
        <ul className="social">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
        </ul>
      </div>
    </nav>
    {/* Canvas Menu end */}
  </header>
  {/*Header End*/}
</div>

  {/*Full width header End*/}
  
  </>
  )
}

export default Header