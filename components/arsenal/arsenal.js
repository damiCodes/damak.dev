import Section from "../ui/section/";
import Card from "./card";
import HtmlIcon from "../../public/svg/html-icon";
import CssIcon from "../../public/svg/css-icon";
import ScssIcon from "../../public/svg/scss-icon";
import JavascriptIcon from "../../public/svg/javascript-icon";
import ReactIcon from "../../public/svg/react-icon";
import NextjsIcon from "../../public/svg/nextjs-icon";
import Jquery from "../../public/svg/jquery-icon";
import GitIcon from "../../public/svg/git-icon";
import FirebaseIcon from "../../public/svg/firebase-icon";
import VercelIcon from "../../public/svg/vercel-icon";
import classes from "./arsenal.module.scss";

export default function Arsenal() {
  const cards = [
    {
      id: "programming-languages",
      icon: "</>",
      lists: [
        { icon: <HtmlIcon />, text: "HTML" },
        { icon: <CssIcon />, text: "CSS" },
        { icon: <ScssIcon />, text: "SCSS" },
        { icon: <JavascriptIcon />, text: "Javascript" },
      ],
    },
    {
      id: "libraries and frameworks",
      icon: "{ }",
      lists: [
        { icon: <ReactIcon />, text: "React" },
        { icon: <NextjsIcon />, text: "Next" },
        { icon: <Jquery />, text: "Jquery" },
      ],
    },
    {
      id: "tools and platforms",
      icon: "⚒️",
      lists: [
        { icon: <GitIcon />, text: "Git" },
        { icon: <FirebaseIcon />, text: "Firebase" },
        { icon: <VercelIcon />, text: "Vercel" },
      ],
    },
  ];

  return (
    <Section
      id="arsenal"
      heading="Arsenal"
      tagline="My Development Arsenal"
      bgText="arsenal"
    >
      <div className={classes.body}>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </Section>
  );
}
