import Grid from "@mui/material/Grid";
import classes from "./SkillGrid.module.css";
import { useEffect } from "react";
import Card from "../Card/Card";

const SkillGrid = ({ skills }) => {
  useEffect(() => {
    console.log(skills);
  }, [skills]);

  return (
    <Grid container spacing={2}>
      {skills.length > 0 &&
        skills.map((skill) => {
          return (
            <Grid item key={skill.name} xs={6} sm={2.4} md={2.4}>
              <Card className={classes["skill-grid"]}>
                <img src={skill.image} className={classes["skill-grid__image"]} alt={skill.name} />
                <p className={classes["skill-grid__title"]}>{skill.name}</p>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

SkillGrid.propTypes = {
  skills: Array,
};

export default SkillGrid;
