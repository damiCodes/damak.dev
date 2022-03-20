import { useEffect, useState } from "react";
import Link from "next/link";
import BeatLoader from "react-spinners/BeatLoader";
import Section from "../ui/section/";
import SocialIcons from "../ui/social-icons";
import classes from "./contact.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("Name cannot be blank");
  const [alertType, setAlertType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAlertType("");
    }, 3000);
    const timer2 = setTimeout(() => {
      setAlert("");
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [alert, alertType]);

  function submitHandler(event) {
    event.preventDefault();
    setLoading(true);

    if (name.trim() === "") {
      setLoading(false);
      setAlert("Name cannot be blank! ✖");
      setAlertType("error");
      return;
    }
    if (email.trim() === "" || !email.includes("@")) {
      setLoading(false);
      setAlert("Invalid email Address! ✖");
      setAlertType("error");
      return;
    }
    if (message.trim() === "") {
      setLoading(false);
      setAlert("Message cannot be blank! ✖");
      setAlertType("error");
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
        console.log(data);
        setAlert(data.message);
        setAlertType(data.type);
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      });
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
                <BeatLoader color="#ffffff" size={10} />
              ) : (
                `Send Message`
              )}
            </button>
          </div>
        </form>
        <div className={`${classes.alert} ${classes[alertType]}`}>{alert}</div>
      </div>
    </Section>
  );
}
