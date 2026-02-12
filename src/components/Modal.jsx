import Button from "./Button";

function Modal({ isOpen, rating, onClick }) {
  if (!isOpen) return null;

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
