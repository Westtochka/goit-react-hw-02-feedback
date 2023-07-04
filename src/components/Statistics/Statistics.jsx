import { Component } from 'react'
import { Title } from "./Statistics.styled";
// import {Button} from

class Counter extends Component {
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
// countTotalFeedback=()=>this.setState((prevState)=>({total:this.state.good+this.state.neutral+this.state.bad}))

render() {
		return (<section>
            <Title>Please leave feedback</Title>
              <button onClick={this.handleClickGood}>Good</button>
              <button onClick={this.handleClickNeutral}>Neutral</button>
              <button onClick={this.handleClickBad}>Bad</button>
            <Title>Statistics</Title>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              {/* <p>Total: {this.state.good+this.state.neutral+this.state.bad}</p>
              <p>Positive feedback: {Math.round(this.state.good/(this.state.good+this.state.neutral+this.state.bad)*100)} %</p> */}
          <p>Total:</p>
          
          </section>
        )
        }
}

export default Counter