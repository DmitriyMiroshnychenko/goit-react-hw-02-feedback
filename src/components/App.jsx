import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (accumulator, value) => accumulator + value,
      0
    );
  };
  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    )}%`;
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={'Please leave feedback:'}>
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={options}
          />
        </Section>
        <Section title={'Statistics:'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="*There is no feedback*" />
          )}
        </Section>
      </div>
    );
  }
}
