import React from "react";
import "../App.css";

// interface IconTypeProps {
//   width: number;
//   height: number;
//   color: string;
// }

// type IconType = (props: IconTypeProps) => JSX.Element;

interface Props {
  title: any;
  icons: any;
  image: any;
  genre: any;
  rating: any;
}

function Card({ title, icons, image, genre, rating }: Props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="Image" />
        <div className="card-body">
          <span className="lightg">{genre}</span>
          <h5 className="card-title">{title}</h5>
          <div className="row d-flex flex-row">
            <ul className="col d-flex gap-2 mt-2">
              {icons.map((icon: any) =>
                React.createElement(icon, {
                  width: 12,
                  height: 12,
                  color: "#eee",
                })
              )}
            </ul>
            <ul className="col d-flex flex-row-reverse">
              <a href="" className="btn btn-success">
                {rating}
              </a>
            </ul>
            <div className="btn"></div>
          </div>
          <div className="row gap-2 p-1">
            <a href="#" className="col btn btn-primary">
              Download
            </a>
            <a href="" className="col btn btn-secondary">
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
