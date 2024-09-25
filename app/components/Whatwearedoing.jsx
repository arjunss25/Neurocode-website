import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowUpRight } from "react-icons/go";
import { FaCode, FaMobileAlt, FaPaintBrush, FaTools } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Whatwearedoing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animation for the left section
      gsap.from('.left-section', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: '.left-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animation for the icons
      gsap.from('.minicard', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.icons-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Enhanced animation for the right section cards
      gsap.from('.card', {
        opacity: 0,
        y: 100,
        rotation: 5,
        scale: 0.9,
        stagger: 0.3,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.right',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Add a subtle hover animation
      gsap.utils.toArray('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px", duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", duration: 0.3 });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-auto p-5 lg:p-20 flex flex-col lg:flex-row">
      <div className="left-section w-full lg:w-1/2 h-full">
        <h1 className="text-[2rem] lg:text-[3.5rem] leading-[2rem] lg:leading-[4rem] font-semibold">
          <span className="text-[#e25b4a]">Empowering</span> Innovation Through <span className="text-[#029acd]">Expertise</span>
        </h1>

        <p className="w-full lg:w-[95%] text-[1rem] leading-[1.5] text-justify mt-10">
          At the core of our mission is a commitment to transforming ideas into digital realities. We specialize in crafting bespoke web and mobile solutions that are not just functional but also forward-thinking. Our team of experts leverages cutting-edge technologies to design and develop responsive websites, engaging mobile apps, and intuitive user interfaces. Beyond development, we provide ongoing maintenance and support to ensure that your digital presence remains robust and relevant. With our expertise, we empower businesses to innovate, grow, and thrive in the ever-evolving digital landscape.
        </p>

        <div className="icons-section flex flex-col gap-10 mt-10">
          {[
            { icon: FaCode, text: "Custom Web Solutions" },
            { icon: FaMobileAlt, text: "Mobile App Development" },
            { icon: FaPaintBrush, text: "UI/UX Design" },
            { icon: FaTools, text: "Maintenance & Support" },
          ].map((item, index) => (
            <div 
              key={index}
              className="minicard flex items-center gap-5 text-[1.5rem]"
            >
              <div className="w-10 h-10 rounded-full bg-[#029acd] text-white flex items-center justify-center">
                <item.icon />
              </div>
              <h3>{item.text}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="right w-full lg:w-1/2 h-full lg:p-5 mt-10 lg:mt-0 flex flex-col gap-5">
        {[
          { title: "Tailored Web Solutions", content: "We create responsive, high-performing websites that are custom-built to match your business needs and goals. From e-commerce platforms to corporate sites, our solutions are designed to engage and convert." },
          { title: "Engaging Mobile Experiences", content: "Our mobile app development services ensure that your app stands out in a crowded marketplace. We develop user-friendly, feature-rich apps for iOS and Android that deliver seamless experiences." },
          { title: "Intuitive & Attractive Design", content: "We craft visually stunning and intuitive user interfaces that enhance user experience. Our design approach prioritizes usability, ensuring that every interaction is smooth and meaningful." },
        ].map((card, index) => (
          <div 
            key={index}
            className="card w-full h-auto lg:h-[35vh] bg-white rounded-[3.5rem] flex flex-col justify-center gap-5 lg:gap-0 lg:justify-between p-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
          >
            <h1 className="text-[1.8rem] font-semibold leading-none">{card.title}</h1>
            <p>{card.content}</p>
            <div className="text-[2rem] flex justify-end">
              <GoArrowUpRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatwearedoing;