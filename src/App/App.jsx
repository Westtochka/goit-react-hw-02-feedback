import { Component } from 'react'
import Statistics from 'components/Statistics/Statistics'

class App extends Component {
  state = {
    good: 10,
    neutral: 8,
    bad: 3
} 
// handleClickGood=() =>{
//   // this.setState({good: 5})
//   this.setState((prevState)=>{
//     return {good: prevState.good+1}
//   })
// }
// handleClickNeutral=() =>{
//   this.setState((prevState)=>{
//     return {neutral: prevState.neutral+1}
//   })
// }
// handleClickBad=() =>{
//   this.setState((prevState)=>{
//     return {bad: prevState.bad+1}
//   })
// }
countTotalFeedback = () => {
  const total = this.state.good + this.state.neutral + this.state.bad;
  return total;
};

countPositiveFeedbackPercentage=()=>{
  const positivePercentage = this.state.good/(this.state.good+this.state.neutral+this.state.bad)*100;
  if ((this.state.good+this.state.neutral+this.state.bad)>0) {return Math.round(positivePercentage)}
  else{return 0 };
}
 
render() {
  const total=this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     
       <Statistics 
       good={this.state.good} 
       neutral={this.state.neutral} 
       bad={this.state.bad} 
       total={total} 
       positivePercentage={positivePercentage}
     />
          
       
       {/* <Section title="">
       <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
       </Section>
       <Section title="">
       <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}></Statistics>
       </Section> */}

    </div>
  );
}}
export default App
