// src/components/ContactForm.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import SendButton from './SendButton';
import GitHubSocialButton from './GitHubSocialButton';
import LinkedInSocialButton from './LinkedInSocialButton';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('🚀 Message sent!');
          formRef.current.reset();
        },
        () => {
          toast.error('❌ Failed to send. Try again.');
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 mb-8"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          required
          className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md placeholder-gray-400 text-white outline-yellow-500 focus:outline-2"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Email"
          required
          className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md placeholder-gray-400 text-white outline-yellow-500 focus:outline-2"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md placeholder-gray-400 text-white outline-yellow-500 focus:outline-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={4}
          className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md placeholder-gray-400 text-white outline-yellow-500 focus:outline-2 resize-none"
        />
        <SendButton />
      </form>

      <div className="flex justify-center items-center gap-4 flex-wrap mt-4">
        <GitHubSocialButton link="https://github.com/patel-aum-yorku" />
        <LinkedInSocialButton link="https://www.linkedin.com/in/aum-patel-/" />
        <a 
          href="/resume.pdf" 
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold rounded-full shadow-[0_0_15px_rgba(255,193,7,0.6)] hover:scale-105 transition-transform"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Resume
        </a>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
