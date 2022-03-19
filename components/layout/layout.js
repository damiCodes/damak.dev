import Navigation from "../navigation";
import Wrapper from "../ui/wrapper";
import Footer from "../footer";
import classes from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Navigation />
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </div>
  );
}
