import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.scss";

interface IImage {
  image: string;
}

type IProps = {
  slides: IImage[];
};

const Slider = ({ slides }: IProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <Image
        src="/left.svg"
        alt="arrowbtn"
        width={20}
        height={20}
        className="left-arrow"
        onClick={prevSlide}
      />
      <Image
        src="/right.svg"
        alt="arrowbtn"
        width={20}
        height={20}
        className="right-arrow"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                width={1100}
                height={450}
                alt="travel image"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
