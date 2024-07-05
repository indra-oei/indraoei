import LinearProgress from "@mui/material/LinearProgress";
import classes from "./SkillList.module.css";

const SkillList = ({ skills }) => {
  return (
    <>
      {skills.length > 0 &&
        skills.map((skill) => {
          return (
            <div key={skill.name}>
              <p className={classes["skill-label"]}>{skill.name}</p>
              <LinearProgress variant="determinate" className={classes["skill-bar"]} value={skill.value || 0} />
            </div>
          );
        })}
    </>
  );
};

SkillList.propTypes = {
  skills: Array,
};

export default SkillList;
