import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  {
    id: 1,
    name: "Ayesha K., Parent of Grade 8 Student",
    designation: "Parent",
    // image: "assets/images/testimonial/style8/1.png",
    text: "Leaders Advanced Studies has been a game-changer for my son. The interactive online classes and expert teachers have helped him improve his English skills tremendously. Highly recommended!",
  },
  {
    id: 2,
    name: "Rahul S., Grade 10 Student",
    designation: "Student",
    // image: "assets/images/testimonial/style8/2.png",
    text: "I struggled with Mathematics before joining this platform, but the structured lessons and one-on-one support have made a huge difference. Now, I feel much more confident in solving problems!",
  },
  {
    id: 3,
    name: "Farah M.",
    designation: "Student",
    // image: "assets/images/testimonial/style8/3.png",
    text: "The best part of Leaders Advanced Studies is the WhatsApp integration for quick support. The teachers are always available to guide students, and the Google Docs feature makes assignment submissions so easy!",
  },
  {
    id: 4,
    name: "Mahadi Monsura",
    designation: "Student",
    // image: "assets/images/testimonial/style8/4.png",
    text: "As a non-native English speaker, I found it difficult to learn new languages. But this platform offers Arabic, Hindi, Malayalam, and English courses, making learning so much easier!",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="rs-testimonial style8 pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container">
        <div className="sec-title3 text-center">
          <div className="sub-title uppercase mb-10">Testimonial</div>
          <h2 className="title mb-30">What Our Students & Parents Say</h2>
        </div>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          autoplay
          autoplayTimeout={7000}
          smartSpeed={2000}
          dots
          nav={false}
          responsive={{
            0: { items: 1, dots: true },
            768: { items: 2, dots: true },
            1024: { items: 3, dots: true },
          }}
        >
          {testimonials.map((testi) => (
            <div className="testi-item" key={testi.id}>
              <div className="author-desc">
                <div className="desc">{testi.text}</div>
                <div className="author-img">
                  {/* Uncomment this if you have images */}
                  {/* <img src={testi.image} alt={testi.name} onError={(e) => e.target.style.display = 'none'} /> */}
                </div>
              </div>
              <div className="author-part">
                <a className="name" href="javascript:void(0);">{testi.name}</a>
                <span className="designation">{testi.designation}</span>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
