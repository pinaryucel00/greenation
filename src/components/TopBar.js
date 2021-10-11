import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "auto",
    width: "20%",
    padding: "1%",
    textTransform: "none",
    fontSize: "25px",
    color: "#E1E8ED",
  },
}));

const selected = {
  backgroundColor: "#505358",
};

const REPORT_TYPES = [
  "Project Specifications",
  "Analysis Report",
  "High-Level Design Report",
  "Low-Level Design Report",
  "Final Report",
];

export default function TopBar({ state, setstate }) {
  const classes = useStyles();

  return (
    <div>
      {REPORT_TYPES.map((reportType, index) => (
        <Button
          key={index}
          className={classes.button}
          style={state === index ? selected : undefined}
          onClick={() => {
            setstate(index);
          }}
        >
          {reportType}
        </Button>
      ))}
    </div>
  );
}
