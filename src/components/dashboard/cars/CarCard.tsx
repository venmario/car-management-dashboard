import { ReactNode } from "react";

interface CarCardProps {
  children: ReactNode;
}
const CarCard = ({ children }: CarCardProps) => (
  <div className="card border-0 card-shadow-car">{children}</div>
);
CarCard.Body = ({ children }: CarCardProps) => (
  <div className="card-body pb-2 px-0">{children}</div>
);
CarCard.List = ({ children }: CarCardProps) => (
  <div className="list-group list-group-flush border-0 body-14-light">
    {children}
  </div>
);
CarCard.ListItem = ({ children }: CarCardProps) => (
  <div className="list-group-item border-0 px-0">{children}</div>
);
CarCard.ListItem = ({ children }: CarCardProps) => (
  <div className="list-group-item border-0 px-0">{children}</div>
);
CarCard.CardFooter = ({ children }: CarCardProps) => (
  <div className="pt-2 pb-0">{children}</div>
);

export default CarCard;
