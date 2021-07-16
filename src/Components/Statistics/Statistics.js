import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, totalPositive }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>totalPositive:{totalPositive}</li>
        </ul>
      )}
      {total === 0 && <Notification message="No Feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  totalPositive: PropTypes.number.isRequired,
};

export default Statistics;
