import { Component } from 'react'
import Statistics from 'components/Statistics/Statistics'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import 'react-notifications/lib/notifications.css';

// import { Notification } from 'notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
} 
 handleClickGood=() =>{
  // this.setState({good: 5})
  this.setState((prevState)=>{
    return {good: prevState.good+1}
  })
}
handleClickNeutral=() =>{
  this.setState((prevState)=>{
    return {neutral: prevState.neutral+1}
  })
}

handleClickBad=() =>{
  this.setState((prevState)=>{
    return {bad: prevState.bad+1}
     })
}
countTotalFeedback = () => {
  const total = this.state.good + this.state.neutral + this.state.bad;
  return total;
};

countPositiveFeedbackPercentage=()=>{
  const positivePercentage = this.state.good/
  (this.state.good+this.state.neutral+this.state.bad)*100;
  if ((this.state.good+this.state.neutral+this.state.bad)>0) 
  {return Math.round(positivePercentage)}
  else{return 0 };
}
 
render() {
  const options = Object.keys(this.state);
  // eslint-disable-next-line no-unused-vars
  const onLeaveFeedback={
    onGood: this.handleClickGood,  
    onNeutral: this.handleClickNeutral, 
    onBad: this.handleClickBad
  }
  
  const total=this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
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
        backgroundColor:'#eeeee9',
        padding:'50px 50px'
      }}
    >
     <Section title="Please leave feedback">
     {this.countTotalFeedback() > 0 ? (
       <Statistics 
       good={this.state.good} 
       neutral={this.state.neutral} 
       bad={this.state.bad} 
       total={total} 
       positivePercentage={positivePercentage}
     />): "There is no feedback" }
     </Section>
     {/* <Notification message="There is no feedback"/> */}
         <Section title="Statistics">
         <FeedbackOptions
  options={options}
  onLeaveFeedback={{
    onGood: this.handleClickGood,
    onNeutral: this.handleClickNeutral,
    onBad: this.handleClickBad
  }}
/>
</Section>       
</div>
  );
}}
export default App
