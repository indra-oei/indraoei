import Chip from "@mui/material/Chip";
import classes from "./Labels.module.css";

const Labels = ({ items = [] }) => {
  return (
    <div className={classes["labels"]}>
      {items.map((item) => {
        return <Chip key={item} className={classes["label-chip"]} label={item} size="small" />;
      })}
    </div>
  );
};

Labels.propTypes = {
  items: Array,
};

export default Labels;
