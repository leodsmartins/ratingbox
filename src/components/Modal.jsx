import Button from "./Button";

function Modal({ rating, onClick }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank you</h2>
        <p className="feedback">
          You rated us {rating} star{rating > 1 ? "s" : ""}!
        </p>
        <Button className="close-btn" onClick={onClick} children="Close" />
      </div>
    </div>
  );
}

export default Modal;
