import {Paragraph, SectionStatistics} from "./Statistics.styled";

const Statistics=({good, neutral, bad, total, positivePercentage}) =>{
		return (
          <SectionStatistics>
              <Paragraph>Good: {good}</Paragraph>
              <Paragraph>Neutral: {neutral}</Paragraph>
              <Paragraph>Bad: {bad}</Paragraph>
              <Paragraph >Total: {total}</Paragraph>
              <Paragraph >Positive feedback: {positivePercentage}   %</Paragraph>
          
          </SectionStatistics>
        )
        
}

export default Statistics