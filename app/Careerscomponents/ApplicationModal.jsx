import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiFile, FiX } from 'react-icons/fi';
import Link from 'next/link';

const ApplyPage = ({ jobTitle = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({ ...prev, resume: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="h-auto lg:h-screen bg-gray-100 flex items-center justify-center py-8 px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-[2rem] p-6 w-full lg:w-[60vw] relative my-8 max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-[1.8rem] uppercase underline-offset-[5px] font-semibold underline mb-4">
          YOU CAN APPLY HERE
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-[2rem]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-[2rem]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-[2rem]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Experience (years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded-[2rem]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Resume</label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
                accept=".pdf,.doc,.docx"
                required
              />
              <label
                htmlFor="resume-upload"
                className="flex items-center justify-center w-full p-2 border-2 border-dashed border-gray-300 rounded-[2rem] cursor-pointer hover:border-gray-400 transition-colors"
              >
                {formData.resume ? (
                  <div className="flex items-center">
                    <FiFile className="mr-2" />
                    <span className="text-sm">{formData.resume.name}</span>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <FiX />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <FiUpload className="text-2xl mb-2" />
                    <span className="text-sm">Click to upload your resume</span>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-4">

            <Link href={'/careers'} className="px-4 py-2 rounded-[2rem] text-black hover:text-white hover:bg-black border-zinc-500 border-2">Cancel</Link>
            {/* <button
              type="button"
              className="px-4 py-2 rounded-[2rem] text-black hover:text-white hover:bg-black border-zinc-500 border-2"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="px-3 md:px-4 py-1 md:py-2 border-2 border-zinc-500 rounded-full text-black hover:text-white hover:bg-black font-light"
            >
              Submit Application
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ApplyPage;
