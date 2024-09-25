// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import './Swiperstyle.css';
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Testimonialcards = ({ testimonials = [] }) => {
//   const taglineRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       gsap.from(taglineRef.current, {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         ease: 'power2.out',
//       });
//     }
//   }, []);

//   return (
//     <div className='w-full h-[70vh] p-20 relative'>
//       <div className="tagline" ref={taglineRef}>
//         <h2 className='text-xl font-semibold absolute left-0 top-10'>
//           Drag to view
//         </h2>
//       </div>
//       <Swiper
//         slidesPerView={'auto'}
//         centeredSlides={true}
//         spaceBetween={30}
//         className="mySwiper"
//       >
//         {testimonials.length > 0 ? (
//           testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index} className="swiper-slide">
//               <div className="testimonial-card bg-white p-5 rounded-lg shadow-lg">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full mx-auto"
//                 />
//                 <p className="text-lg mt-4">{testimonial.review}</p>
//                 <h3 className="text-md font-bold mt-2">{testimonial.name}</h3>
//                 <p className="text-sm text-gray-600">{testimonial.designation}</p>
//               </div>
//             </SwiperSlide>
//           ))
//         ) : (
//           <p>No testimonials available.</p>
//         )}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonialcards;
