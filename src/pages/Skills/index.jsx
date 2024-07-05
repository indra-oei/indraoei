import Grid from "@mui/material/Grid";

import PageTitle from "../../components/Layout/PageTitle/PageTitle";
import PageSubtitle from "../../components/Layout/PageSubtitle/PageSubtitle";
import Section from "../../components/Layout/Section/Section";
import Card from "../../components/Card/Card";
import SkillList from "../../components/SkillList/SkillList";
import CardTitle from "../../components/Card/CardTitle/CardTitle";
import SkillGrid from "../../components/SkillGrid/SkillGrid";

import { skills } from "./skills";

const SkillsPage = () => {
  const otherTechnologies = [
    { name: "Laravel", value: 95 },
    { name: "ExpressJS", value: 80 },
    { name: "NextJS", value: 90 },
    { name: "ReactJS", value: 90 },
    { name: "Angular", value: 80 },
  ];

  const programmingLanguages = [
    { name: "PHP", value: 95 },
    { name: "NodeJS", value: 80 },
    { name: "Python", value: 80 },
    { name: "Java", value: 60 },
    { name: "Javascript", value: 95 },
    { name: "SQL", value: 95 },
  ];

  return (
    <>
      <PageTitle>Skills</PageTitle>
      <PageSubtitle>
        {"A collection of technologies I've applied throughout my career, highlighting my proficiency and experience."}
      </PageSubtitle>
      <Section>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardTitle>Technologies</CardTitle>
              <SkillList skills={programmingLanguages} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardTitle>Libraries/Framework</CardTitle>
              <SkillList skills={otherTechnologies} />
            </Card>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <SkillGrid skills={skills} />
      </Section>
    </>
  );
};

export default SkillsPage;
