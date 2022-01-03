import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import { StatisticsList, StatisticsItem } from "./Statistics.style";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  };

  return (
    <>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticsList>
          <StatisticsItem className="stat-item">Good: {good}</StatisticsItem>
          <StatisticsItem className="stat-item">
            Neutral: {neutral}
          </StatisticsItem>
          <StatisticsItem className="stat-item">Bad: {bad}</StatisticsItem>
          <StatisticsItem className="stat-item">Total: {total}</StatisticsItem>
          <StatisticsItem className="stat-item">
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </StatisticsItem>
        </StatisticsList>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
