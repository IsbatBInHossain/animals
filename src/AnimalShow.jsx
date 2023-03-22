import { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    if (clicks < 15) setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className="animal-show">
      <img src={svgMap[type]} alt="animal-name" className="animal" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{
          width: `${10 + 10 * clicks}px`,
          height: `${10 + 10 * clicks}px`,
        }}
      />
    </div>
  );
};
export default AnimalShow;
