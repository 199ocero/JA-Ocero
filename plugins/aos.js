import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    // offset: 200,
    easing: "ease-in-out-cubic",
    once: true,
  }); // or any other options you need
};
