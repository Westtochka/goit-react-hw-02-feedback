const Statistics=({good, neutral, bad, total, positivePercentage}) =>{
		return (
          <section>
            {/* <Title>Please leave feedback</Title>
              <button onClick={handleClickGood}>Good</button>
              <button onClick={handleClickNeutral}>Neutral</button>
              <button onClick={handleClickBad}>Bad</button>
            <Title>Statistics</Title> */}
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p >Total: {total}</p>
              <p >Positive feedback:{positivePercentage}  %</p>
          
          </section>
        )
        
}

export default Statistics