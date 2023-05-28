import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './FeedbackOptions/Statistics';
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
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
       //return (Object.values(this.state).reduce((total, value) => total + value, 0))
      };

      countPositiveFeedbackPercentage = () => {
        if (this.countTotalFeedback()) {
          const { good, neutral, bad } = this.state;
          const totalFeedback = good + neutral + bad;
          const goodFeedbackPercantage = Math.round((100 * good) / totalFeedback);
          return goodFeedbackPercantage;
        }
    
        return 0;
      };

      render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
     
        return (
          <div>
            <Section title={'Please leave feedback 📝'}>
              <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
            </Section>
    
            <Section title={'Statistics 📈'}>
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