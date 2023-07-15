import { Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { onGood, onNeutral, onBad } = onLeaveFeedback;

  return (
    <>
      <Button type="button" onClick={onGood}  >
        {options[0]}
      </Button>
      <Button type="button"
      style={{        
        color: '#48cef3'
      }}      
      onClick={onNeutral}>
        {options[1]}
      </Button>
      <Button type="button"
      style={{        
        color: '#747471'
      }}
       onClick={onBad}>
        {options[2]}
      </Button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.shape({
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired,
  }).isRequired,
};











