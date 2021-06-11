import styled from "styled-components";

import CheckCircle from "@components/Icons/check-circle";

const Step = ({ title, description }) => (
  <StepWrapper>
    <StepLeft>
      <CheckCircle className="icon" />
    </StepLeft>
    <StepRight>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </StepRight>
  </StepWrapper>
);

export default function Timeline() {
  return (
    <>
      <Year>2021</Year>
      <StepContainer>
        <Step
          title="Portfolio &#x1F525;"
          description="I made my new portfolio using Next, MDXRemote &amp; Styled Components, where I decided to add my Blogs and Snippets."
        />

        <Step
          title="Test Driven Development &#x1F399;"
          description="I gave tech talk on TDD using React Testing Library, where we did live coding and made a form in React using TDD."
        />
        <Step
          title="Error Boundary Blog &#x1F4C3;"
          description="I wrote a blog for Expedia telling how Error Boundaries have improved customer experience for our project."
        />
        <Step title="GYM &#x1F4AA;" description="I joined gym again." />
        <Step
          title="Warzone &amp; FIFA &#x1F3AE;"
          description="I played lot of Warzone and FIFA in lockdown, I became very god at Warzone and reached divison one on FIFA."
        />
      </StepContainer>
      <Divider />
      <Year>2020</Year>
      <StepContainer>
        <Step
          title="React Testing Library &#x1F399;"
          description="I took initiative of introducting React Testing Library in our office codebase and we migrated lots of components from Enzyme to RTL."
        />
        <Step
          title="OS: Backstage &#x1F5A5;"
          description="I started doing open source for spotify/backstage where I fixed bugs, improved codebase and wrote lots of test cases using RTL."
        />
        <Step
          title="OS: Gatsby &#x1F5A5;"
          description="I started doing open source and made my first contribution to Gatsby, I immproved lot of things related to UI and migrated lots of components to hooks and function components."
        />
        <Step
          title="Testing JavaScript &#x1F3C6;"
          description="I realised how much important is testing, I purchased Testing JavaScript course by Kent C Dodds and completed it."
        />
        <Step
          title="Tech Talk &#x1F399;"
          description="I gave my first tech talk on React hooks, where I explained how hooks solve a wide variety of problems. Also, I gave a glimpse about all the available hooks."
        />
      </StepContainer>
      <Divider />
      <Year>2019</Year>
      <StepContainer>
        <Step
          title="Joined Expedia &#x1F4BC;"
          description="I started working as UI Developer for VRBO, Expedia."
        />
        <Step
          title="Hiking &#x26F0;"
          description="I went to Triund trek with my college friends, this was first time I went on a hike, I was very tired but I enjoyed a lot."
        />
        <Step
          title="Ladoo &#x1F415;"
          description="We adopted Ladoo when he was 1 month old, he is a street dog but now he lives with us."
        />
      </StepContainer>
      <Divider />
      <Year>2018</Year>
      <StepContainer>
        <Step
          title="Graduation &#x1F393;"
          description="I graduated from ITM University."
        />
        <Step
          title="Joined Yatra &#x1F4BC;"
          description="I got PPO from Yatra while doing Internship and I continued working on my internship project as a full time employee."
        />
        <Step
          title="React"
          description="I started learning React this year, it was best decision of my life."
        />
        <Step
          title="Third Internship &#x1F4BB;"
          description="I got my final semester internship at Yatra, where I learned a lot about UI/UX design and Frontend development."
        />
      </StepContainer>
      <Divider />
      <Year>2017</Year>
      <StepContainer>
        <Step
          title="Road Trip &#x1F698;"
          description="I went on my first road trip to Jodhpur, Mount Abu &amp; Jaisalmer with my school friends, we traveled 2200 KM in fours days."
        />
        <Step
          title="Second Internship &#x1F4BB;"
          description="I started doing another internship with Muses alongside my college, in the day I used to attend college and after college I used to work for Muses. I learned more Frontend development here."
        />
        <Step
          title="First Internship &#x1F4BB;"
          description="I managed to get my first internship at Edustoke. I spent my college summer break here. I got my first salary. I learned lot of Frontend development here."
        />
        <Step
          title="Dubai &#x1F30D;"
          description="I travelled first time out of my country, I travelled Dubai to meet my father."
        />
      </StepContainer>
      <Divider />
      <Year>2016</Year>
      <StepContainer>
        <Step
          title="Treehouse"
          description="My cousing gave me subscription of team treehouse, I started learning HTML, CSS &amp; JavaSript from there and I got very passionate about frontend development."
        />
      </StepContainer>
      <Divider />
      <Year>2014</Year>
      <StepContainer>
        <Step
          title="Started my college at ITM Gurgaon &#x1F392;"
          description="I decided to pursue Bachelor of Computer Science, because I had lot of interest in computers through gaming."
        />
        <Step
          title="Graduated from High School"
          description="I never changed my school and city, I took admission here in 1999 and graduated from here."
        />
      </StepContainer>
      <Divider />
      <Year>1996</Year>
      <StepContainer>
        <Step title="Born &#x1F476;" />
      </StepContainer>
    </>
  );
}

const Year = styled.h3`
  font-size: 1.8rem;
  color: var(--color-gray-800);
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  border-top: 1px solid var(--color-gray-200);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 4rem 0;
`;

const StepContainer = styled.ul`
  padding-left: 0.8rem;
`;

const StepWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const StepLeft = styled.div`
  display: flex;
  margin-right: 0.8rem;
  padding-top: 2.4px;
`;

const StepRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 500;
  color: var(--color-gray-800);
  margin-bottom: 0.4rem;
`;

const Description = styled.p`
  font-weight: 400;
  color: var(--color-gray-600);
  max-width: 95%;
`;
