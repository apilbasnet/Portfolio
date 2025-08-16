import React from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="flex flex-col snap-center bg-zinc-900">
      <div className="flex flex-col text-slate-100 py-16 text-2xl max-w-[1140px] m-auto">
        <div className="flex flex-col lg:w-1/2 m-2 px-4 justify-center">
          Contact <br />
          Interested in working together? Let&apos;s connect via email or
          LinkedIn
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-12/12 my-2 px-4"
        >
          <div className="flex flex-col lg:flex-row w-full gap-4">
            <div className="flex flex-col lg:w-1/2">
              <input
                name="user_name"
                placeholder="Name"
                className="mb-[1rem] py-[5px] px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50"
                required
              />
              <input
                name="user_email"
                type="email"
                placeholder="Email"
                className="mb-[1rem] py-[5px] px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50"
                required
              />
              <input
                name="subject"
                placeholder="Subject"
                className="mb-[1rem] py-[5px] px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50"
                required
              />
            </div>

            <div className="flex flex-col lg:w-1/2">
              <textarea
                name="message"
                className="px-[10px] bg-neutral-800 text-[1.2rem] text-slate-50"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-slate-50 rounded-none border-none box-border text-gray-900 cursor-pointer inline-block font-bold text-base min-h-11 min-w-10 outline-none overflow-hidden px-5 py-2 relative text-center select-none touch-manipulation hover:opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
