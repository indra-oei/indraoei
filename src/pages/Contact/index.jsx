import Grid from "@mui/material/Grid";
import { MdOutlineEmail, MdWorkOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

import PageTitle from "../../components/Layout/PageTitle/PageTitle";
import Section from "../../components/Layout/Section/Section";
import ContactCard from "../../components/ContactCard/ContactCard";
import PageSubtitle from "../../components/Layout/PageSubtitle/PageSubtitle";

const ContactPage = () => {
  return (
    <>
      <PageTitle>{`Let's build`}</PageTitle>
      <PageSubtitle>
        {
          "I believe digitalizing your business should be stress free. And I'm here to be your partner, let's build it together"
        }
      </PageSubtitle>
      <Section>
        <Grid container spacing={{ xs: 6, sm: 3 }}>
          <Grid item xs={12} sm={4}>
            <ContactCard
              title="Social"
              content="I share tips and experience regarding my work as well as projects discussion that I've worked on"
              href="https://instagram.com/codeby.io"
              href_label="Check out social"
              icon={<FaInstagram />}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ContactCard
              title="Contact"
              content="Let's create something awesome together, I'll help you with the technical side of things"
              href="mailto:hi.codebyio@gmail.com"
              href_label="Send me messages"
              icon={<MdOutlineEmail />}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ContactCard
              title="Work"
              content="Find me also at other socials where I focus on sharing my professional work journeys"
              href="https://linkedin.com/in/indraoei"
              href_label="See my journey"
              icon={<MdWorkOutline />}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default ContactPage;
