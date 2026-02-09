import { useState } from "react";

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
            <span
              className="star"
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              style={{ color: star <= (rating || hover) ? color : "#ccc" }}
            >
              {"\u2605"}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rating;
