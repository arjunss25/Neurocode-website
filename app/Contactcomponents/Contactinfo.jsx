import { useState } from 'react';
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Contactinfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    message: '',
    newsletter: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.source) newErrors.source = "Please select an option";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        source: '',
        message: '',
        newsletter: false
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center p-5 lg:p-20">
      <h1 className=" text-[4rem] lg:text-[6rem] leading-none">Let's talk</h1>

      <div className="max-w-7xl mx-auto p-4 mt-10 lg:mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-medium mb-4">Get in Touch</h2>
            {/* <p className="mb-4">
              For general enquiries, please fill out the form to get in touch. Alternatively, if you know your
              project details
            </p> */}
            
            <h2 className='mt-5 text-[#e25b4a] text-[1.3rem]'>Call Us</h2>
            <h3 className=' text-[1.5rem]'>@ +91-6235540087</h3>

            <h2 className='mt-5 text-[#e25b4a] text-[1.3rem]'>Visit Us</h2>
            <h3 className=' text-[1.5rem]'>@ Second Floor Hari Sree Building, <br/>Gowari Nagar Sreekariyam, <br/>Trivandrum Kerala, 695017</h3>

            <p className="mt-4">
              Hate contact forms? Email us at{' '} 
              <Link  href="mailto:hello@madebyshape.co.uk" className="text-blue-600 hover:underline text-[1.5rem]">
                info@neurocode.in
              </Link>
            </p>
          </div>

          {/* Right section - Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                className={`w-full p-2 border rounded-[1rem] px-5 py-2 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                className={`w-full p-2 border rounded-[1rem] px-5 py-2 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (Optional)" 
                className="w-full p-2 rounded-[1rem] px-5 py-2"
              />
              
              <select 
                name="source"
                value={formData.source}
                onChange={handleChange}
                className={`w-full p-2 border rounded-[1rem] px-5 py-2 ${errors.source ? 'border-red-500' : ''}`}
              >
                <option value="" disabled>How did you hear about us?</option>
                <option value="Google">Google</option>
                <option value="Friends">Friends</option>
                <option value="Linkedin">Linkedin</option>
                <option value="Instagram">Instagram</option>
              </select>
              {errors.source && <p className="text-red-500 text-sm">{errors.source}</p>}
              
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project" 
                className={`w-full p-2 border rounded-[1rem] px-5 py-2 h-32 ${errors.message ? 'border-red-500' : ''}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              
              <p className="text-sm">
                By submitting this form I accept the Privacy Policy of this site.
              </p>
              
              <button 
                type="submit" 
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-5 "
              >
                Send Message <span className='w-5 h-5 rounded-full bg-white text-black flex items-center justify-center'>
                <GoArrowUpRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactinfo