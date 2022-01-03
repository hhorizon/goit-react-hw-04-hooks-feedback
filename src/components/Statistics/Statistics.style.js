import styled from "styled-components";

const StatisticsList = styled.ul`
  list-style-type: none;
`;

const StatisticsItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export { StatisticsList, StatisticsItem };
