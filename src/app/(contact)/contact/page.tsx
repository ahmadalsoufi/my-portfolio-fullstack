"use client";
import { useActionState, useState, useEffect } from "react";

import { RiMessage3Fill } from "react-icons/ri";
import { createContact } from "./ContactProvider";

const ContactPage = () => {
  const [state, action, pending] = useActionState(createContact, undefined);

  // controlled input fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state?.success) {
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [state]);

  return (
    <>
      <form
        onSubmit={(e) => e.target.scrollIntoView({ behavior: "smooth" })}
        action={action}
        className="relative bg-slate-100 dark:bg-slate-800 sm:my-15 px-5 py-15 sm:py-10 sm:px-10 sm:rounded-md shadow-md w-180 sm:mx-10 space-y-4"
      >
        <div className="absolute -top-10 -left-10 text-8xl text-blue-400 dark:text-blue-300 hidden sm:block">
          <RiMessage3Fill />
        </div>

        <h1 className={`text-center`}>Contact Me</h1>
        {state?.success && (
          <h2
            className={`${state?.success ? "bg-green-600" : "bg-red-600"} py-3 text-center px-4 rounded-md text-slate-50 shadow-md w-full font-medium text-lg`}
          >
            {state?.message}
          </h2>
        )}

        <div className="flex flex-col gap-y-2">
          <label htmlFor="full-name" className="font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`${state?.errors?.name_err_msg ? "border-red-500" : "dark:border-slate-300 border-slate-100"} bg-slate-50 outline-none rounded-sm py-1.5 px-3 text-slate-700  border-3 shadow-md`}
          />
          {state?.errors?.name_err_msg && (
            <div className="text-red-500">{state.errors.name_err_msg}</div>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${state?.errors?.email_err_msg ? "border-red-500" : "dark:border-slate-300 border-slate-100"} bg-slate-50 outline-none rounded-sm py-1.5 px-3 text-slate-700  border-3 shadow-md`}
          />
          {state?.errors?.email_err_msg && (
            <div className="text-red-500">{state.errors.email_err_msg}</div>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="subject" className="font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-slate-50 outline-none rounded-sm py-1.5 px-3 text-slate-700 dark:border-slate-300 border-slate-100 border-3 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${state?.errors?.message_err_msg ? "border-red-500" : "dark:border-slate-300 border-slate-100"} bg-slate-50 outline-none rounded-sm py-1.5 px-3 text-slate-700  border-3 shadow-md`}
          />
          {state?.errors?.message_err_msg && (
            <div className="text-red-500">{state.errors.message_err_msg}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className={`${pending ? "bg-slate-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 cursor-pointer hover:text-slate-100"} text-slate-50 py-1.5 px-4 rounded-md bg-blue-500 shadow-md font-medium w-full transition-colors duration-200`}
        >
          {pending ? "sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactPage;
