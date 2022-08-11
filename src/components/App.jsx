import React, { Component } from 'react';
import Counter from './Statistics/Counter';
import Statistics from './Statistics/Statistics';
import Buttons from './Statistics/Buttons';

export const App = () => {
  return (
    <div style={{}}>
      <Buttons
      // good={} neutral={} bad={} total={} positivePercentage={}
      />
      <Statistics
      // good={good}
      // neutral={neutral}
      // bad={bad}
      // total={countTotalFeedback()}
      // positivePercentage={countPositiveFeedbackPercentage()}
      />
      <Counter />
      {/* <Controls />
      <Value /> */}
    </div>
  );
};
