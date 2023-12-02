import React, { ReactNode } from "react";

interface CarouselCardProp {
  children: ReactNode;
}
const CarouselCard = ({ children }: CarouselCardProp): React.JSX.Element => {
  return <div className="carousel-card py-4 px-5">{children}</div>;
};

CarouselCard.Avatar = ({ children }: CarouselCardProp): React.JSX.Element => {
  return <div className="carousel-card-content-picture">{children}</div>;
};

CarouselCard.Content = ({ children }: CarouselCardProp): React.JSX.Element => {
  return <div className="carousel-card-content">{children}</div>;
};

CarouselCard.Rating = ({ children }: CarouselCardProp): React.JSX.Element => {
  return <div className="carousel-card-rating">{children}</div>;
};
CarouselCard.Bio = ({ children }: CarouselCardProp): React.JSX.Element => {
  return (
    <div className="carousel-card-content-bio body-14-light">{children}</div>
  );
};
CarouselCard.Borndate = ({ children }: CarouselCardProp): React.JSX.Element => {
  return <div className="carousel-card-borndate">{children}</div>;
};

export default CarouselCard;
