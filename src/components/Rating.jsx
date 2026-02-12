import { useState } from "react";
import Star from "./Star";
import Button from "./Button";
import Modal from "./Modal";

const Rating = ({ heading = "How do you feel about React?", color = "gold" }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ["Very poor", "Poor", "Average", "Good", "Excellent"];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

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
        {rating > 0 && (
          <p className="feedback" style={{ color: "white" }}>
            {feedbackMessages[rating - 1]}
          </p>
        )}
        <Button
          className="submit-btn"
          rating={rating}
          disabled={rating === 0}
          onClick={handleSubmit}
          children="Submit"
        />
        <Modal isOpen={submitted} rating={rating} onClick={closeModal} />
      </div>
    </>
  );
};

export default Rating;
