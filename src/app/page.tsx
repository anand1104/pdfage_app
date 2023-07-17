import HeroSection from "./components/HeroSection";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";

const Page = () => {
  return (
    <>
      <HeroSection title={"We make PDF easy."} imageUrl={"/images/banner.png"} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};
export default Page;
