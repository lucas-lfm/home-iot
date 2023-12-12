import "./CardSensors.css";
import "./Card.css";
import sensorImg from "./../assets/temperature_sensor.png";

const CardSensors = ({ temp, umidade }) => {
  return (
    <div className="card">
      <img className="img-sensor" src={sensorImg} alt="ícone de sensor" />
      <div className="data-sensors">
        <p>
          <span>Temperatura: </span>
          {temp} °C
        </p>
        <p>
          <span>Umidade: </span>
          {umidade} %
        </p>
      </div>
    </div>
  );
};

export default CardSensors;
