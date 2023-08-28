import { Slide } from "react-awesome-reveal";
import { AiOutlineDatabase } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Slide>
        <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-4 md:ms-28 mb-5 md:mb-10">
          <AiOutlineDatabase style={{ fontSize: "1.44rem" }} />{" "}
          <span className="ms-2">PORTFOLIO</span>
        </h5>
      </Slide>

      <div className="md:w-9/12 mx-auto ">
        <h3
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-3xl md:text-6xl ms-2"
        >
          Featured <span className="text-green-500">Projects</span>
        </h3>
        <section>
            
        </section>
      </div>
    </div>
  );
};

export default Portfolio;