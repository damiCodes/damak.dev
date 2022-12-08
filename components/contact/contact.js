import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PuffLoader } from "react-spinners";
import Section from "../ui/section/";
import SocialIcons from "../ui/social-icons";
import classes from "./contact.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("Name cannot be blank");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  function submitHandler(event) {
    event.preventDefault();
    setAlert(false);
    setLoading(true);

    if (name.trim() === "") {
      setLoading(false);
      setAlertMessage("Name cannot be blank! ✖");
      setAlertType("failed");
      return;
    }
    if (email.trim() === "" || !email.includes("@")) {
      setLoading(false);
      setAlertMessage("Invalid email Address! ✖");
      setAlertType("failed");
      return;
    }
    if (message.trim() === "") {
      setLoading(false);
      setAlertMessage("Message cannot be blank! ✖");
      setAlertType("failed");
      return;
    }

    fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAlertMessage(data.message);
        setAlertType(data.status);
        setAlert(true);
        setLoading(false);
        if (data.status === "success") {
          setName("");
          setEmail("");
          setMessage("");
        }
      });
  }

  return (
    <Section id="contact" heading="get-in-touch" tagline="let's Talk!">
      <div className={classes.body}>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className={classes.text}
        >
          <p>
            My inbox is always open. You can shoot me a mail at{" "}
            <span>
              <Link href="mailto:damak.dev@gmail.com">damak.dev@gmail.com</Link>{" "}
            </span>
            or send a message via the form.
          </p>
          <SocialIcons delay={0} />
        </motion.div>
        <motion.form
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className={classes.form}
          onSubmit={submitHandler}
        >
          <div className={classes["form-group"]}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-required="true"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>

            <input
              type="email"
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

            <button>
              {loading ? (
                <PuffLoader color="#ffffff" size={25} />
              ) : (
                `Send Message`
              )}
            </button>
          </div>
          <AnimatePresence>
            {alert && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  color:
                    alertType === "success"
                      ? "var(--accent-color)"
                      : "var(--text-white)",
                }}
              >
                {alertMessage}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </Section>
  );
}
