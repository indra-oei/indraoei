import Grid from "@mui/material/Grid";

import PageTitle from "../../components/Layout/PageTitle/PageTitle";
import PageSubtitle from "../../components/Layout/PageSubtitle/PageSubtitle";
import Section from "../../components/Layout/Section/Section";
import Card from "../../components/Card/Card";
import CardTitle from "../../components/Card/CardTitle/CardTitle";
import CardBody from "../../components/Card/CardBody/CardBody";
import Labels from "../../components/Labels/Labels";

import { works } from "./works";

const WorksPage = () => {
  return (
    <>
      <PageTitle>Works</PageTitle>
      <PageSubtitle>
        {
          "A collection of projects/works I've been a part of, may it be diving deep as a developer or just to help the project run."
        }
      </PageSubtitle>
      <Section>
        <Grid container spacing={3}>
          {works.map((work) => {
            return (
              <Grid item key={work.project_name} xs={12} sm={6}>
                <Card>
                  <CardTitle>{work.project_name}</CardTitle>
                  <Labels items={work.tech} />
                  <CardBody>{work.description}</CardBody>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Section>
    </>
  );
};

export default WorksPage;
