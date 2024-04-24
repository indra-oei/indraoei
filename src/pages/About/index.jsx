import Grid from "@mui/material/Grid";

import PageTitle from "../../components/Layout/PageTitle/PageTitle";
import Section from "../../components/Layout/Section/Section";
import SectionTitle from "../../components/Layout/SectionTitle/SectionTitle";
import SectionText from "../../components/Layout/SectionText/SectionText";

import classes from "./About.module.css";

const AboutPage = () => {
  return (
    <>
      <PageTitle>Who am I?</PageTitle>
      <Section>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={4}>
            <img src="/Images/avatar.jpg" className={classes["avatar"]} alt="Indra Oei" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <SectionTitle>{"I'm a Software Engineer from the beautiful Nusantara"}</SectionTitle>
            <SectionText>
              {
                "Over the past 6+ years, I've worked on various projects from simple websites to a more complex systems. Diving deep on both Front End and Back End side of the development."
              }
            </SectionText>
            <SectionText withMargin={false}>
              {
                "I'm currently working in developing an ERP system that focuses on easing business owner in controlling the nook and crannies of their business flow."
              }
            </SectionText>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <SectionTitle>{"Let's Collaborate"}</SectionTitle>
        <SectionText withMargin={false}>
          {
            "I believe digitalizing your business should be stress free. If you're looking for someone to help you do the technical stuff or help you maintain the running of your project. I'd love to talk."
          }
        </SectionText>
      </Section>
    </>
  );
};

export default AboutPage;
