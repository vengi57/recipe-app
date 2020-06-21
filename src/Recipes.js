import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";

const TooltipForRecipe = withStyles((theme) => ({
  tooltip: {
    fontSize: "13px",
    //   marginLeft:-235,
    // marginTop:30,
  },
}))(Tooltip);

const Recipes = ({ title, image, ingredients }) => {
  console.log("ingredients", ingredients);
  const [open, openDialog] = useState(false);
  const showRecipes = () => {
    openDialog(true);
  };
  const handleClose = () => {
    openDialog(false);
  };
  return (
    <div className="recipe">
      <h1 className="title-text">{title}</h1>
      <TooltipForRecipe
        title={"Click here to see the recipes"}
        arrow={true}
        placement="top"
      >
        <img
          className="image"
          onClick={showRecipes}
          src={image}
          loading="lazy"
          alt="recipe-image"
        />
      </TooltipForRecipe>
      <Dialog
        title={title}
        open={open}
        fullWidth={true}
        contentStyle={{
          width: "60%",
          maxWidth: "xl",
          height: "80%",
        }}
        bodyStyle={{
          padding: "0px",
          height: "80%",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <ul>
          <h1 className="title-text">{title}</h1>
          {ingredients.map((index) => (
            <li>{index.text}</li>
          ))}
        </ul>
        <button className="dialog-button-close" onClick={handleClose}>
          Close
        </button>
      </Dialog>
    </div>
  );
};
export default Recipes;
