import { Slide } from "react-awesome-reveal";
import { AiOutlineDatabase } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsShowOff from "../../../Components/ProjectsShowOff/ProjectsShowOff";
import mealMasterImg from "../../../assets/WebImages/meal-master-007.web.app.jpeg";
import vapeCafeImg from "../../../assets/WebImages/VapeCafeImage.jpeg";
import toyfinityImg from "../../../assets/WebImages/toyfinity.jpeg";
AOS.init();

const Portfolio = () => {
  return (
    <div id="portfolio" className="p-2 mt-8 md:mt-14">
      <Slide>
        <h5 className="border flex rounded-3xl py-2 px-5 w-min ms-2 md:ms-28 mb-5 md:mb-10">
          <AiOutlineDatabase style={{ fontSize: "1.44rem" }} />{" "}
          <span className="ms-2">PORTFOLIO</span>
        </h5>
      </Slide>

      <div className="md:w-9/12 mx-auto">
        <h3
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-3xl md:text-6xl ms-2 mb-5"
        >
          Featured <span className="text-green-500">Projects</span>
        </h3>
        <section>
         
          <div className="md:flex flex-wrap gap-">
           <div data-aos="fade-right" data-aos-duration="2000" className="mx-auto">
           <ProjectsShowOff
              img={vapeCafeImg}
              name={"Vape Cafe"}
              link={"https://vape-cafe-007.web.app/"}
            />
           </div>
           <div data-aos="fade-left" data-aos-duration="2000" className="mx-auto">
           <ProjectsShowOff
              img={mealMasterImg}
              name={"Meal Master"}
              link={"https://meal-master-007.web.app/"}
            />
           </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="md:flex justify-center">
         <ProjectsShowOff
            img={toyfinityImg}
            name={"Toyfinity"}
            link={"https://toyfinity-f87b3.web.app/"}
          />
         </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
