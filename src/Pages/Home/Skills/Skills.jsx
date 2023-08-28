import { Slide } from "react-awesome-reveal";
import { BsCodeSlash } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import ImageWithTitle from "../../../Components/ImageWithTitle/ImageWithTitle";
import figmaLogo from "../../../assets/Image/logo-app-figma.webp";
import reactLogo from "../../../assets/Image/React-icon.svg.png";
import mongoDBLogo from "../../../assets/Image/mongodb-svgrepo-com.svg";
import nodeLogo from "../../../assets/Image/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text-removebg-preview (1).png";
import expressLogo from "../../../assets/Image/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png";
import firebaseLogo from "../../../assets/Image/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle-thumbnail-removebg-preview (1).png";

const Skills = () => {
  return (
    <div id="skills">
      <Slide>
        <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-4 md:ms-28 mb-5 md:mb-10">
          <BsCodeSlash style={{ fontSize: "1.44rem" }} />{" "}
          <span className="ms-2">SKILLS</span>
        </h5>
      </Slide>

      <div className="md:w-9/12 mx-auto ">
        <h3
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-3xl md:text-6xl ms-2"
        >
          My <span className="text-green-500">Advantages</span>
        </h3>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10 mx-2">
          <div data-aos="fade-right" data-aos-duration="2000">
            <ImageWithTitle
              image={mongoDBLogo}
              title={"Mongo DB"}
              percentage={"93"}
            />
          </div>

          <div data-aos="fade-right" data-aos-duration="2000">
            <ImageWithTitle
              image={expressLogo}
              title={"Express Js"}
              percentage={"85"}
            />
          </div>

          <div data-aos="fade-down" data-aos-duration="3000">
            <ImageWithTitle
              image={reactLogo}
              title={"React"}
              percentage={"90"}
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <ImageWithTitle
              image={nodeLogo}
              title={"Node Js"}
              percentage={"87"}
            />
          </div>
          <div data-aos="fade-up-right" data-aos-duration="2000">
            <ImageWithTitle
              image={figmaLogo}
              title={"Figma"}
              percentage={"89"}
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="3000">
            <ImageWithTitle
              image={firebaseLogo}
              title={"Firebase"}
              percentage={"95"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;