import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

import { db } from "./utils/firebase/firebase";
import { ref, onValue, set } from "firebase/database";
import CardSensors from "./components/CardSensors";

function App() {
  const [statusLamp, setStatusLamp] = useState(0);
  const [temp, setTemp] = useState(0);
  const [umidade, setUmidade] = useState(0);

  useEffect(() => {
    const query = ref(db, "led_1");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        console.log(data);
        setStatusLamp(data);
      }
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "temp");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        console.log(data);
        setTemp(data);
      }
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "umidade");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        console.log(data);
        setUmidade(data);
      }
    });
  }, []);

  const handleCommand = () => {
    const refC = ref(db, "c_led_1");
    set(refC, statusLamp ? 0 : 1);
  };

  return (
    <>
      <h1>Home IoT</h1>
      <p>Controle seus dispositivos de qualquer lugar!</p>
      <div className="main-content">
        {/* <AddClientForm httpConfig={httpConfig} loading={loading} /> */}
        <div className="container-card">
          <Card
            statusLamp={statusLamp}
            textAlt="Status da lâmpada"
            devName="Luz do Quarto"
            handleCommand={handleCommand}
          />
          <CardSensors temp={temp} umidade={umidade} />
        </div>
      </div>
    </>
  );
}

export default App;
