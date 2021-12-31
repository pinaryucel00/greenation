import TopBar from "./components/TopBar";
import { useState } from "react";

function App() {
  const [state, setstate] = useState(0);

  let link;

  if (state === 0) {
    link =
      "https://drive.google.com/file/d/1p1G7TuzBoZZBWArJOSdnO2712AhQmO-g/preview";
  }
  if (state === 1) {
    link =
      "https://drive.google.com/file/d/1Bl-8UB5A7VCgka79zwGaaa0bW-_p9fEm/preview";
  }
  if (state === 2) {
    link =
      "https://drive.google.com/file/d/1JpQXqLQvAYwybRDd1yko3fCVTKQR5YVR/preview";
  }

  return (
    <div>
      <TopBar state={state} setstate={setstate} />
      <div>
        <iframe src={link} width="100%" height="1000px" />
      </div>
    </div>
  );
}

export default App;
