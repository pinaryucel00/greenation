import TopBar from "./components/TopBar";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  divStyle: {
    marginTop: "1%",
    width: "100%",
    height: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  iframeStyle: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function App() {
  const classes = useStyles();
  const [state, setstate] = useState(0);

  let link;

  if (state === 0) {
    link =
      "https://drive.google.com/file/d/1p1G7TuzBoZZBWArJOSdnO2712AhQmO-g/preview";
  }

  return (
    <div>
      <TopBar state={state} setstate={setstate} />
      <div className={classes.divStyle}>
        <iframe
          src={link}
          width="50%"
          height="100%"
          className={classes.iframeStyle}
        />
      </div>
    </div>
  );
}

export default App;
