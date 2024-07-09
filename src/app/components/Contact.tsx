import { Resend } from 'resend';
import Email from '@/components/Email';
import styles from '@/styles/Contact.module.css'

const resend = new Resend('re_123456789');

async function sendEmail(formData: FormData) {
  'use server'

  console.log(formData)

  // await resend.emails.send({
  //   from: 'you@example.com',
  //   to: 'user@gmail.com',
  //   subject: 'hello world',
  //   react: <Email msg={"msg"} />,
  // });
}

const Contact = async () => {
  return (
    <div className={styles["contact"]}>
      <form action={sendEmail}>
        <label htmlFor="email">Email </label>
        <input type="text" id="email" name="email" placeholder="Enter your email"/>

        <label htmlFor="message">Message </label>
        <textarea id="message" name="message" rows={6} placeholder="Enter your message ..."/>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default Contact