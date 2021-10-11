import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    flex: "1",
    padding: "1%",
    textTransform: "none",
    fontSize: "20px",
    color: "#E1E8ED",
    overflow: "hidden",
    display: "block",
    overflowWrap: "break-word",
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
    <div style={{ display: "flex" }}>
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
