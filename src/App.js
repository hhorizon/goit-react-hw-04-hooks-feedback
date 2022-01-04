import { useState } from "react";
import styled from "styled-components";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const leaveFeedback = (event) => {
    const { name } = event.target.dataset;

    switch (name) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Section>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin-left: 100px;
`;
