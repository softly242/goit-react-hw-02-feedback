import Notification from 'components/Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <h1 className={css.title}>Statistics</h1>
      {total > 0 ? (
        <ul className={css.statsList}>
          <li className={css.statsItem}>Good: {good}</li>
          <li className={css.statsItem}>Neutral: {neutral}</li>
          <li className={css.statsItem}>Bad: {bad}</li>
          <li className={css.statsItem}>Total: {total} </li>
          <li className={css.statsItem}>Positive feedback: {positive} % </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
export default Statistics;

Statistics.protoTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
}