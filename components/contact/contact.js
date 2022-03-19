import { useState } from "react";
import Link from "next/link";
import Section from "../ui/section/";
import SocialIcons from "../ui/social-icons";
import classes from "./contact.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Section id="contact" heading="get in touch." tagline="let's Talk!">
      <div className={classes.body}>
        <div className={classes.text}>
          <p>
            My inbox is always open. You can shoot me a mail at{" "}
            <span>
              <Link href="mailto:damak.dev@gmail.com">damak.dev@gmail.com</Link>{" "}
            </span>
            or send a message via the form.
          </p>
          <SocialIcons />
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes["form-group"]}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              aria-required="true"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>

            <input
              type="text"
              placeholder="Email"
              name="email"
              aria-required="true"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={classes["form-group"]}>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              aria-required="true"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </Section>
  );
}
