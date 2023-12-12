import Avatar from "./Avatar";
import ButtonCard from "./ButtonCard";
import "./Card.css";

const Card = ({ statusLamp, textAlt, devName, handleCommand }) => {
  return (
    <div className="card">
      <Avatar statusLamp={statusLamp} textAlt={textAlt} devName={devName} />
      <ButtonCard statusLamp={statusLamp} handleCommand={handleCommand} />
    </div>
  );
};

export default Card;
