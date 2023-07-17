import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import 'react-notifications/lib/notifications.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleButtonClick = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }));
  };


  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: '#eeeee9',
          padding: '50px 50px'
        }}
      >
        <Section title="Statistics">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Please leave feedback">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} // Нужно исправить эту строку
            />
          ) : (
            <h3 style={{ color: '#e01b1b' }}>There is no feedback</h3>
          )}
        </Section>
      </div>
    );
  }
}

export default App;