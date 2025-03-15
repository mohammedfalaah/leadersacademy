// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Layout/Header'
// import Footer from './Layout/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     


//      <div>
//   {/*Preloader area start here*/}
//   <div id="loader" className="loader">
//     <div className="loader-container">
//       <div className="loader-icon">
//         <img src="assets/images/pre-logo.png" alt />
//       </div>
//     </div>
//   </div>
//   {/*Preloader area End here*/}
//  <Header/>
//   {/* Main content Start */}
//   <div className="main-content">
//     {/* Banner Section Start */}            
//     <div id="rs-banner" className="rs-banner style7">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="banner-content">
//               <h1 className="banner-title white-color">Develop a Passion For Learning</h1>
//               <div className="desc white-color mb-50">
//                 Every act of conscious learning requires the willingness to suffer an injury 
//                 to one’s self-esteem. That is why young children 
//               </div>
//               <div className="btn-part">
//                 <a className="readon border-less" href="#">Get Started Now</a>
//               </div>
//             </div>
//             <div className="icons one up-down">
//               <img src="assets/images/banner/home7/icon/2.png" alt="Images" />
//             </div> 
//             <div className="icons two left-right">
//               <img src="assets/images/banner/home7/icon/1.png" alt="Images" />
//             </div> 
//             <div className="icons three left-right">
//               <img src="assets/images/banner/home7/icon/1.png" alt="Images" />
//             </div> 
//             <div className="icons four up-down">
//               <img src="assets/images/banner/home7/icon/2.png" alt="Images" />
//             </div>
//           </div>
//           <div className="offset-lg-6" />
//         </div>
//       </div>
//       <div className="img-part">
//         <img src="assets/images/banner/home7/img-1.png" alt="Images" />
//       </div>
//     </div>
//     {/* Banner Section End */}
//     {/* Services Section Start */}
//     <div className="rs-services style7 pt-100 md-pt-70">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-6 md-mb-30">
//             <div className="services-item">
//               <div className="img-part">
//                 <img src="assets/images/services/home7/bg/1.png" alt="images" /> 
//               </div>
//               <div className="content-part">
//                 <div className="icon-part mb-30 md-mb-15">
//                   <img src="assets/images/services/home7/icon/1.png" alt="images" /> 
//                 </div>
//                 <h4 className="title"><a href="#">Kindergarten</a></h4>
//                 <p className="desc">Lorem ipsum dolor sit amet,consectetur adipisic ing elit,
//                   sed eius .incididunt</p>
//               </div>
//             </div>
//           </div> 
//           <div className="col-lg-3 col-md-6 md-mb-30">
//             <div className="services-item">
//               <div className="img-part">
//                 <img src="assets/images/services/home7/bg/2.png" alt="images" /> 
//               </div>
//               <div className="content-part">
//                 <div className="icon-part mb-30 md-mb-15">
//                   <img src="assets/images/services/home7/icon/2.png" alt="images" /> 
//                 </div>
//                 <h4 className="title"><a href="#">Primary School</a></h4>
//                 <p className="desc">Lorem ipsum dolor sit amet,consectetur adipisic ing elit,
//                   sed eius .incididunt</p>
//               </div>
//             </div>
//           </div> 
//           <div className="col-lg-3 col-md-6 md-mb-30">
//             <div className="services-item">
//               <div className="img-part">
//                 <img src="assets/images/services/home7/bg/3.png" alt="images" /> 
//               </div>
//               <div className="content-part">
//                 <div className="icon-part mb-30 md-mb-15">
//                   <img src="assets/images/services/home7/icon/3.png" alt="images" /> 
//                 </div>
//                 <h4 className="title"><a href="#">High School</a></h4>
//                 <p className="desc">Lorem ipsum dolor sit amet,consectetur adipisic ing elit,
//                   sed eius .incididunt</p>
//               </div>
//             </div>
//           </div> 
//           <div className="col-lg-3 col-md-6">
//             <div className="services-item">
//               <div className="img-part">
//                 <img src="assets/images/services/home7/bg/4.png" alt="images" /> 
//               </div>
//               <div className="content-part">
//                 <div className="icon-part mb-30 md-mb-15">
//                   <img src="assets/images/services/home7/icon/4.png" alt="images" /> 
//                 </div>
//                 <h4 className="title"><a href="#">College/University</a></h4>
//                 <p className="desc">Lorem ipsum dolor sit amet,consectetur adipisic ing elit,
//                   sed eius .incididunt</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Services Section End */}
//     {/* About Section Start */}
//     <div className="rs-about style7 pt-100 pb-100 md-pt-70 md-pb-70">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 col-md-12 md-mb-30">
//             <div className="img-part js-tilt">
//               <img src="assets/images/about/home7/about.png" alt="images" />
//             </div>
//           </div>
//           <div className="col-lg-6 pl-50 md-pl-15 col-md-12">
//             <div className="sec-title2">
//               <div className="sub-title">
//                 About
//               </div>
//               <h2 className="title mb-30">Change is The End Result of All True Learning</h2>
//               <p className="desc mb-25">
//                 Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempor incididunt ut labore orem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempor incididunt ut labore incididunt.  incididunt ut labore orem ipsum dolor
//               </p>
//             </div>
//             <div className="btn-part">
//               <a className="readon banner-style uppercase" href="#">Read More</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* About Section End */}
//     {/* Popular Courses Section Start */}
//     <div id="rs-featured-courses" className="rs-featured-courses pt-100 pb-100 md-pt-70 md-pb-70">
//       <div className="container">
//         <div className="sec-title2 text-center">
//           <div className="sub-title uppercase mb-10">
//             Top Courses
//           </div>
//           <h2 className="title mb-30">Featured Courses</h2>
//         </div>
//         <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-autoplay-timeout={7000} data-smart-speed={2000} data-dots="true" data-nav="false" data-nav-speed="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="true">
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/1.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg1" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-singe.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/2.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg2" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/3.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg3" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div> 
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/1.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg1" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div> 
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/2.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg2" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div> 
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/3.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg3" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div> 
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/1.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg3" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div> 
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/2.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg2" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div> 
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/3.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg3" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div> 
//           <div className="courses-item">
//             <div className="img-part">
//               <img src="assets/images/courses/home7/3.png" alt />
//             </div>
//             <div className="content-part">
//               <span><a className="categories bg3" href="#">Web Development</a></span>
//               <ul className="meta-part">
//                 <li className="user"><i className="fa fa-user" /> 245</li>
//                 <li className="ratings">
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   <i className="fa fa-star" />
//                   (05)
//                 </li>
//               </ul>
//               <h3 className="title"><a href="course-single.html">Basic Mathemetics Studies and Accounting</a></h3>
//               <div className="images mb-32 md-mb-17">
//                 <div className="img-part">
//                   <img src="assets/images/courses/home7/4.png" alt />
//                 </div>
//                 <span>By Mark Anthoni in Mathemetics</span>
//               </div>
//               <div className="bottom-part">
//                 <div className="info-meta">
//                   <ul>                                                
//                     <li>$55.00</li>
//                   </ul>
//                 </div>
//                 <div className="btn-part">
//                   <a href="#">Get It Now<i className="flaticon-right-arrow" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Popular Courses Section End */}        
//     {/* CTA Section Start */}
//     <div className="rs-cta style7">
//       <div className="partition-bg-wrap">
//         <div className="container">
//           <div className="row pt-100 md-pt-70 pb-100 md-pb-70">
//             <div className="col-lg-6 pl-62 md-pl-15 col-md-12 md-pb-70">
//               <div className="sec-title2 mb-40">
//                 <h2 className="title white-color mb-16">Students Orientation 2020</h2>
//                 <div className="desc white-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis.</div>
//               </div>
//               <div className="btn-part">
//                 <a className="readon border-less" href="#">Apply Now</a>
//               </div>
//             </div>
//             <div className="col-lg-6 pl-62 md-pl-15 col-md-12 md-pt-70">
//               <div className="sec-title2 mb-40">
//                 <h2 className="title white-color mb-16">Admission Open for 2020</h2>
//                 <div className="desc white-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis.</div>
//               </div>
//               <div className="btn-part">
//                 <a className="readon border-less" href="#">Apply Now</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* CTA Section End */} 
//     {/* Facilities Section Start */}
//     <div className="rs-facilities pt-100 pb-100 md-pt-70 md-pb-70">
//       <div className="container">
//         <div className="relative">
//           <div className="img-part">
//             <img src="assets/images/facilities/bg-1.png" alt="images" />
//             <div className="media-icon ">
//               <a className="popup-videos" href="https://www.youtube.com/watch?v=atMUy_bPoQI">
//                 <i className="fa fa-play" />
//               </a>
//             </div>
//           </div>
//           <div className="choose-part">
//             <div className="sec-title2 md-mb-30">
//               <div className="sub-title uppercase mb-10">
//                 Top Courses
//               </div>
//               <h2 className="title mb-0">Our Facilities</h2>
//             </div>
//             <div className="our-facilities mb-15">
//               <div className="icon-part">
//                 <img src="assets/images/facilities/icon/1.png" alt="images" />
//               </div>
//               <div className="content-part pt-30 md-pt-0">
//                 <div className="text-part">
//                   <h2 className="title">Global Certificate</h2>
//                   <p className="desc">
//                     Lorem ipsum dolor sit amet, consectetur adipisic,<br />
//                     sed eius to mod tempor incididunt.
//                   </p>
//                 </div>
//               </div>
//             </div> 
//             <div className="our-facilities mb-40">
//               <div className="icon-part">
//                 <img src="assets/images/facilities/icon/2.png" alt="images" />
//               </div>
//               <div className="content-part pt-30 md-pt-0">
//                 <div className="text-part">
//                   <h2 className="title">Global Certificate</h2>
//                   <p className="desc">
//                     Lorem ipsum dolor sit amet, consectetur adipisic,<br />
//                     sed eius to mod tempor incididunt.
//                   </p>
//                 </div>
//               </div>
//             </div> 
//             <div className="our-facilities ">
//               <div className="icon-part">
//                 <img src="assets/images/facilities/icon/3.png" alt="images" />
//               </div>
//               <div className="content-part">
//                 <div className="text-part">
//                   <h2 className="title">Global Certificate</h2>
//                   <p className="desc">
//                     Lorem ipsum dolor sit amet, consectetur adipisic,<br />
//                     sed eius to mod tempor incididunt.
//                   </p>
//                 </div>
//               </div>
//             </div> 
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Facilities Section End */}
//     {/* Counter Section Start */}
//     <div className="rs-counter style7 pb-100 md-pb-70">
//       <div className="container">
//         <div className="row couter-area">
//           <div className="col-lg-3 col-md-6 md-mb-30">
//             <div className="counter-item text-center">
//               <h2 className="rs-count purple-color">2.958</h2>
//               <h4 className="title mb-0">Finished Sessions</h4>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 md-mb-30">
//             <div className="counter-item text-center">
//               <h2 className="rs-count plus blue-color">4.523</h2>
//               <h4 className="title mb-0">Enrolled Learners</h4>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 sm-mb-30">
//             <div className="counter-item text-center">
//               <h2 className="rs-count plus pink-color">120</h2>
//               <h4 className="title mb-0">Online Instructors</h4>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div className="counter-item text-center">
//               <h2 className="rs-count percent orange-color">100</h2>
//               <h4 className="title mb-0">Satisfaction Rate</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Counter Section Start */}
//     {/* Team Section Start */}
//     <div id="rs-team" className="rs-team style1 style7 gray-bg pt-100 pb-100 md-pt-70 md-pb-70">
//       <div className="container">
//         <div className="sec-title2 text-center mb-50 md-mb-30">
//           <div className="sub-title primary">Instructor</div>
//           <h2 className="title mb-0">Expert Teachers</h2>
//         </div>
//         <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="false" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
//           <div className="team-item">
//             <img src="assets/images/team/1.jpg" alt />
//             <div className="content-part">
//               <h4 className="name"><a href="team-single.html">Jhon Pedrocas</a></h4>
//               <span className="designation">Professor</span>
//               <ul className="social-links">
//                 <li><a href="#"><i className="fa fa-facebook" /></a></li>
//                 <li><a href="#"><i className="fa fa-twitter" /></a></li>
//                 <li><a href="#"><i className="fa fa-linkedin" /></a></li>
//                 <li><a href="#"><i className="fa fa-google-plus" /></a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="team-item">
//             <img src="assets/images/team/2.jpg" alt />
//             <div className="content-part">
//               <h4 className="name"><a href="team-single.html">Jesika Albenian</a></h4>
//               <span className="designation">Professor</span>
//               <ul className="social-links">
//                 <li><a href="#"><i className="fa fa-facebook" /></a></li>
//                 <li><a href="#"><i className="fa fa-twitter" /></a></li>
//                 <li><a href="#"><i className="fa fa-linkedin" /></a></li>
//                 <li><a href="#"><i className="fa fa-google-plus" /></a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="team-item">
//             <img src="assets/images/team/3.jpg" alt />
//             <div className="content-part">
//               <h4 className="name"><a href="team-single.html">Alex Anthony</a></h4>
//               <span className="designation">Professor</span>
//               <ul className="social-links">
//                 <li><a href="#"><i className="fa fa-facebook" /></a></li>
//                 <li><a href="#"><i className="fa fa-twitter" /></a></li>
//                 <li><a href="#"><i className="fa fa-linkedin" /></a></li>
//                 <li><a href="#"><i className="fa fa-google-plus" /></a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Team Section End */}
//     {/* Publication Section End */}
//     <div className="rs-publication pt-100 pb-100 md-pt-70 md-pb-70">
//       <div className="container">
//         <div className="sec-title2 text-center mb-50 md-mb-30">
//           <div className="sub-title">Our Products</div>
//           <h2 className="title mb-0">Our Publications</h2>
//         </div>
//         <div className="rs-carousel owl-carousel" data-loop="true" data-items={4} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
//           <div className="product-list">
//             <div className="image-product">
//               <img src="assets/images/publication/1.jpg" alt />
//               <div className="overley">
//                 <a href="#"><i className="flaticon-shopping-bag" /></a>
//               </div>
//             </div>
//             <div className="content-desc text-center">
//               <h2 className="product-title"><a href="#">Magazine</a></h2>
//               <span className="price">$25.00</span>
//             </div>
//           </div>
//           <div className="product-list">
//             <div className="image-product">
//               <img src="assets/images/publication/2.jpg" alt />
//               <div className="overley">
//                 <a href="#"><i className="flaticon-shopping-bag" /></a>
//               </div>
//             </div>
//             <div className="content-desc text-center">
//               <h2 className="product-title"><a href="#">Science Everything</a></h2>
//               <span className="price">$25.00</span>
//             </div>
//           </div>
//           <div className="product-list">
//             <div className="image-product">
//               <img src="assets/images/publication/3.jpg" alt />
//               <div className="overley">
//                 <a href="#"><i className="flaticon-shopping-bag" /></a>
//               </div>
//             </div>
//             <div className="content-desc text-center">
//               <h2 className="product-title"><a href="#">Man Cover</a></h2>
//               <span className="price">$30.00</span>
//             </div>
//           </div>
//           <div className="product-list">
//             <div className="image-product">
//               <img src="assets/images/publication/4.jpg" alt />
//               <div className="overley">
//                 <a href="#"><i className="flaticon-shopping-bag" /></a>
//               </div>
//             </div>
//             <div className="content-desc text-center">
//               <h2 className="product-title"><a href="#">The Headline</a></h2>
//               <span className="price">$40.00</span>
//             </div>
//           </div>
//           <div className="product-list">
//             <div className="image-product">
//               <img src="assets/images/publication/5.jpg" alt />
//               <div className="overley">
//                 <a href="#"><i className="flaticon-shopping-bag" /></a>
//               </div>
//             </div>
//             <div className="content-desc text-center">
//               <h2 className="product-title"><a href="#">Kids School</a></h2>
//               <span className="price">$40.00</span>
//             </div>
//           </div>
//           <div className="product-list">
//             <div className="image-product">
//               <img src="assets/images/publication/6.jpg" alt />
//               <div className="overley">
//                 <a href="#"><i className="flaticon-shopping-bag" /></a>
//               </div>
//             </div>
//             <div className="content-desc text-center">
//               <h2 className="product-title"><a href="#">Back School</a></h2>
//               <span className="price">$40.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Publication Section End */}
//     {/* Partner Start */}
//     <div className="rs-partner pb-100 md-pb-70">
//       <div className="container">
//         <div className="rs-carousel owl-carousel" data-loop="true" data-items={4} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="true" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={3} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={2} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={4} data-md-device-nav="true" data-md-device-dots="false">
//           <div className="partner-item">
//             <a href="#"><img src="assets/images/partner/style2/1.png" alt /></a>
//           </div>
//           <div className="partner-item">
//             <a href="#"><img src="assets/images/partner/style2/2.png" alt /></a>
//           </div>
//           <div className="partner-item">
//             <a href="#"><img src="assets/images/partner/style2/3.png" alt /></a>
//           </div>
//           <div className="partner-item">
//             <a href="#"><img src="assets/images/partner/style2/4.png" alt /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Partner End */}
//     {/* Newsletter section start */}
//     <div className="rs-newsletter style6 modify bg5 pt-100 pb-100 md-pb-70 md-pt-70">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="newsletter-wrap">
//               <div className="content-part md-mb-30">
//                 <h2 className="title mb-10 white-color">Subscribe To Our Newsletter!</h2>
//                 <div className="sub-title white-color">Subscribe Newsletter </div>
//               </div>      
//             </div> 
//           </div>    
//           <div className="col-lg-6">
//             <div className="newsletter-wrap">
//               <form className="newsletter-form">
//                 <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
//                 <button type="submit">Submit</button> 
//               </form>                        
//             </div> 
//           </div> 
//         </div>
//       </div>
//     </div>
//     {/* Newsletter section end */}
//     {/* Testiominals Section Start */}
//     <div className="rs-testimonial style3 style7 pt-100 pb-100 md-pt-70 md-pb-70">
//       <div className="container">
//         <div className="sec-title2 text-center mb-50">
//           <div className="sub-title">Student Reviews</div>
//           <h2 className="title">What Our Students Say</h2>
//         </div> 
//         <div className="rs-carousel owl-carousel" data-loop="true" data-items={2} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="true" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={2} data-md-device-nav="false" data-md-device-dots="true">
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/1.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/2.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/1.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/2.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/1.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/2.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/1.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/2.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/1.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>  
//           <div className="testi-item">
//             <div className="row y-middle no-gutter">
//               <div className="col-md-4">
//                 <div className="user-info">
//                   <img src="assets/images/testimonial/style7/2.png" alt />
//                   <h4 className="name">Saiko Najran</h4>
//                   <span className="designation">Student</span>
//                   <ul className="ratings">
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                     <li><i className="fa fa-star" /></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="desc">The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Testiominals Section End */}
//     {/* Blog Section Start */}
//     <div id="rs-blog" className="rs-blog style2 modify2 pt-100 pb-100 md-pt-70 md-pb-70">
//       <div className="container relative">
//         <div className="sec-title2 text-center mb-50">
//           <div className="sub-title"> News &amp; Article`s</div>
//           <h2 className="title"> Latest News &amp; Article`s</h2>
//         </div> 
//         <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
//           <div className="blog-item">
//             <div className="image-part">
//               <img src="assets/images/blog/style2/4.jpg" alt />
//             </div>
//             <div className="blog-content">
//               <span className="categories uppercase color-bg1">Primary</span>
//               <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
//               <ul className="blog-meta">
//                 <li><i className="fa fa-user-o" /> Admin</li>
//                 <li><i className="fa fa-calendar" />June 15, 2019</li>
//               </ul>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div className="image-part">
//               <img src="assets/images/blog/style2/5.jpg" alt />
//             </div>
//             <div className="blog-content">
//               <span className="categories uppercase color-bg2">High School</span>
//               <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
//               <ul className="blog-meta">
//                 <li><i className="fa fa-user-o" /> Admin</li>
//                 <li><i className="fa fa-calendar" />June 15, 2019</li>
//               </ul>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div className="image-part">
//               <img src="assets/images/blog/style2/6.jpg" alt />
//             </div>
//             <div className="blog-content">
//               <span className="categories uppercase color-bg3">University</span>
//               <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
//               <ul className="blog-meta">
//                 <li><i className="fa fa-user-o" /> Admin</li>
//                 <li><i className="fa fa-calendar" />June 15, 2019</li>
//               </ul>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div className="image-part">
//               <img src="assets/images/blog/style2/3.jpg" alt />
//             </div>
//             <div className="blog-content">
//               <span className="categories uppercase color-bg1">Primary</span>
//               <h3 className="title mt-10 mb-10"><a href="#">This is a great source of content for anyone...</a></h3>
//               <ul className="blog-meta">
//                 <li><i className="fa fa-user-o" /> Admin</li>
//                 <li><i className="fa fa-calendar" />June 15, 2019</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Blog Section End */}
//   </div> 
//   {/* Main content End */} 
//   {/* Footer Start */}
//  <Footer/>
//   {/* Footer End */}
//   {/* start scrollUp  */}
//   <div id="scrollUp">
//     <i className="fa fa-angle-up" />
//   </div>
//   {/* End scrollUp  */}
//   {/* Search Modal Start */}
//   <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex={-1}>
//     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//       <span className="flaticon-cross" />
//     </button>
//     <div className="modal-dialog modal-dialog-centered">
//       <div className="modal-content">
//         <div className="search-block clearfix">
//           <form>
//             <div className="form-group">
//               <input className="form-control" placeholder="Search Here..." type="text" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     </>
//   )
// }

// export default App
