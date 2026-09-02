"use server";
import { prisma } from "../../../../lib/prisma";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

// export async function getAction
export async function createContact(prevData: any, formData: FormData) {
  const inputData = {
    fullName: String(formData.get("full-name")),
    email: String(formData.get("email")),
    subject: String(formData.get("subject")),
    message: String(formData.get("message")),
  };

  type errorsType = {
    name_err_msg: null | string;
    email_err_msg: null | string;
    message_err_msg: null | string;
  };

  const errors: errorsType = {
    name_err_msg: null,
    email_err_msg: null,
    message_err_msg: null,
  };

  if (!inputData.fullName.length) {
    errors.name_err_msg = "This field is required";
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputData.email)) {
    errors.email_err_msg = "Invalid email";
  }

  if (!inputData.message.length) {
    errors.message_err_msg = "This field is required";
  }

  if (errors.email_err_msg || errors.message_err_msg || errors.name_err_msg)
    return { success: false, errors };

  const [ownerEmail, confirmationEmail] = await Promise.all([
    resend.emails.send({
      from: "Ahmad Alsoufi <contact@ahmadalsoufi.com>",
      to: ["ahmad.s.alsoufi@gmail.com"],
      subject: inputData.subject,
      replyTo: inputData.email,
      html: `<p>${inputData.message}</p>`,
    }),
    resend.emails.send({
      from: "Ahmad Alsoufi <contact@ahmadalsoufi.com>",
      to: [inputData.email],
      subject: "confirmation message",
      html: `<p>Thanks for reaching out. I've received your message and will get back to you soon.</p>`,
    }),
  ]);

  if (ownerEmail.error || confirmationEmail.error)
    return { success: false, message: "An error occured!" };

  await prisma.messages.create({
    data: {
      full_name: inputData.fullName,
      email: inputData.email,
      subject: inputData.subject.length > 0 ? inputData.subject : null,
      message: inputData.message,
    },
  });

  return { success: true, message: "Message was sent successfully." };
}
