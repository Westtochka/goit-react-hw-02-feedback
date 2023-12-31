import {Paragraph, SectionStatistics} from "./Statistics.styled";
import PropTypes from 'prop-types'

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};