import "./ButtonCard.css";

const ButtonCard = ({ statusLamp, handleCommand }) => {
  return (
    <button
      className={`btn-card ${statusLamp ? "btn-card-on" : "btn-card-off"}`}
      onClick={handleCommand}
    >
      {statusLamp ? "Desligar" : "Ligar"}
    </button>
  );
};

export default ButtonCard;
