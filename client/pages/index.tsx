import BestSellingBooks from "../components/BestSellingBooks";
import PopulerBooks from "../components/PopulerBooks";
import Services from "../components/Services";
import Slider from "../components/Slider";
import { CarouselData, SliderData } from "../components/SliderData";
import TopCategories from "../components/TopCategories";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="container content">
      <Slider slides={SliderData} />
      <Services />
      <TopCategories />
      <PopulerBooks />
      <BestSellingBooks />
    </div>
  );
}
