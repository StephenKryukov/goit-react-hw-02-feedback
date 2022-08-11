import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import s from './FeedbackOptions/FeedbackOptions.module.css';

class App extends Component {
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

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave your feedback">
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

        <Section title="Statistics"></Section>
        {this.countTotalFeedback() > 0 ? (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />) : (<FeedbackOptions />)}
        
      </Section>
    );
  }
}
export default App;
