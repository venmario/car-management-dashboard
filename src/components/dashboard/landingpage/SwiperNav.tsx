import { useSwiper } from "swiper/react";
import iPrev from "../../../assets/icons/navPrev.svg";
import iNext from "../../../assets/icons/navNext.svg";
export default function SwiperNav() {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav">
      <a onClick={() => swiper.slidePrev()} className="cursor">
        <img src={iPrev} alt="prevButton" />
      </a>
      <a onClick={() => swiper.slideNext()} className="cursor">
        <img src={iNext} alt="nextButton" />
      </a>
    </div>
  );
}
