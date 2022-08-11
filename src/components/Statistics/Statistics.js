import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { Component } from 'react';

class Statistics extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positivePercentage: this.props.initialValue,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <section className={s.statistics}>
        <h2 className={s.title}>Please leave your feedback</h2>
        <button className={s.item} type="button" onClick={this.goodIncrement}>
          Good
        </button>
        <button
          className={s.item}
          type="button"
          onClick={this.neutralIncrement}
        >
          Bad
        </button>
        <button className={s.item} type="button" onClick={this.badIncrement}>
          Neutral
        </button>
        <button
          className={s.item}
          type="button"
          onClick={this.countTotalFeedback}
        >
          Total
        </button>
        <button
          className={s.item}
          type="button"
          onClick={this.countPositiveFeedbackPercentage}
        >
          %
        </button>
        <h2 className={s.title}>Statistics</h2>
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>Positive Percentage: {positivePercentage}%</li>
        </ul>
      </section>
    );
  }
}

export default Statistics;

// export default function Statistics({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) {
// return (
//   <section className={s.statistics}>
//     <h2 className={s.title}>Statistics</h2>
//     <ul className={s.list}>
//       <li className={s.item}>Good: {good}</li>
//       <li className={s.item}>Neutral: {neutral}</li>
//       <li className={s.item}>Bad: {bad}</li>
//       <li className={s.item}>Total: {total}</li>
//       <li className={s.item}>Positive Percentage: {positivePercentage}%</li>
//     </ul>
//   </section>
// );
// }

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
