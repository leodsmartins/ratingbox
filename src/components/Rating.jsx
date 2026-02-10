import { useState } from "react";
import Star from "./Star"

const Rating = ({ heading = "How do you feel about React?", color = "gold" }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <>
      <div className="rating-container">
        <h2>{heading}</h2>
        <div className="stars">
          {stars.map((star) => (
            <Star 
              key={star}
              star={star}
              stars={stars}
              color={color}
              rating={rating}
              hover={hover}
              handleRating={setRating}
              handleHover={setHover}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rating;
