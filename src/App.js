import "./App.css";
import Card from "./components/Card";
import "./index.css";
import { useState } from "react";

function App() {
  const [timeData, setTimeData] = useState({
    hour: "00",
    min: "00",
    sec: "00",
    ap: "AM",
  });
  setTimeout(() => {
    const data = new Date();
    let h = data.getHours();
    const m = data.getMinutes();
    const s = data.getSeconds();
    let aop = "";
    if (h >= 12) {
      aop = "PM";
      h -= 12;
    } else {
      aop = "AM";
    }
    setTimeData({ hour: h, min: m, sec: s, ap: aop });
  }, 100);
  return (
    <div className="main">
      <Card time={timeData.hour} text="hours" />
      <Card time={timeData.min} text="minutes" />
      <Card time={timeData.sec} text="seconds" />
      <Card text={timeData.ap} />
    </div>
  );
}

export default App;
