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

      <div className="flex justify-center items-center gap-4">
        <GitHubSocialButton link="https://github.com/patel-aum-yorku" />
        <LinkedInSocialButton link="https://www.linkedin.com/in/aum-patel-/" />
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
