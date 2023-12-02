import { Swiper, SwiperSlide } from "swiper/react";
import CarouselCard from "./CarouselCard";
import { Image } from "react-bootstrap";
import iRate from "/icons/Rate.svg";
import "swiper/css";
import "swiper/css/navigation";
import SwiperNav from "./SwiperNav";
export default function Testimonials(): React.JSX.Element {
  return (
    <section id="testimonials" className="testimonial-section">
      <h1 className="text-center heading-24-bold">Testimonial</h1>
      <p className="text-center body-14-light">
        Berbagai review positif dari para pelanggan kami
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: true,
          },
        }}
        className="mySwiper px-3"
      >
        <SwiperSlide>
          <CarouselCard>
            <CarouselCard.Avatar>
              <Image
                src="https://i.ibb.co/vvDxbdh/img-photo.png"
                rounded
                fluid
                className="border-0"
              />
            </CarouselCard.Avatar>
            <CarouselCard.Content>
              <CarouselCard.Rating>
                <Image src={iRate} />
              </CarouselCard.Rating>
              <CarouselCard.Bio>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod"
              </CarouselCard.Bio>
              <CarouselCard.Borndate>
                <p className="fw-bolder body-14-reguler">Slide 1, Bromo</p>
              </CarouselCard.Borndate>
            </CarouselCard.Content>
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard>
            <CarouselCard.Avatar>
              <Image
                src="https://i.ibb.co/vvDxbdh/img-photo.png"
                rounded
                fluid
                className="border-0"
              />
            </CarouselCard.Avatar>
            <CarouselCard.Content>
              <CarouselCard.Rating>
                <Image src={iRate} />
              </CarouselCard.Rating>
              <CarouselCard.Bio>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod"
              </CarouselCard.Bio>
              <CarouselCard.Borndate>
                <p className="fw-bolder body-14-reguler">Slide 2, Bromo</p>
              </CarouselCard.Borndate>
            </CarouselCard.Content>
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard>
            <CarouselCard.Avatar>
              <Image
                src="https://i.ibb.co/vvDxbdh/img-photo.png"
                rounded
                fluid
                className="border-0"
              />
            </CarouselCard.Avatar>
            <CarouselCard.Content>
              <CarouselCard.Rating>
                <Image src={iRate} />
              </CarouselCard.Rating>
              <CarouselCard.Bio>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod"
              </CarouselCard.Bio>
              <CarouselCard.Borndate>
                <p className="fw-bolder body-14-reguler">Slide 3, Bromo</p>
              </CarouselCard.Borndate>
            </CarouselCard.Content>
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard>
            <CarouselCard.Avatar>
              <Image
                src="https://i.ibb.co/vvDxbdh/img-photo.png"
                rounded
                fluid
                className="border-0"
              />
            </CarouselCard.Avatar>
            <CarouselCard.Content>
              <CarouselCard.Rating>
                <Image src={iRate} />
              </CarouselCard.Rating>
              <CarouselCard.Bio>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod"
              </CarouselCard.Bio>
              <CarouselCard.Borndate>
                <p className="fw-bolder body-14-reguler">Slide 4, Bromo</p>
              </CarouselCard.Borndate>
            </CarouselCard.Content>
          </CarouselCard>
        </SwiperSlide>
        <SwiperNav />
      </Swiper>
    </section>
  );
}
