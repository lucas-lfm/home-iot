import lampImgOff from "./../assets/bulb_off_removebg-preview.png";
import lampImgOn from "./../assets/bulb_on-removebg-preview.png";
import "./Avatar.css";

const Avatar = ({ statusLamp, textAlt, devName }) => {
  return (
    <>
      <img
        className="avatar"
        src={statusLamp ? lampImgOn : lampImgOff}
        alt={textAlt}
      />
      <h2 className="avatar-name">{devName}</h2>
    </>
  );
};

export default Avatar;
