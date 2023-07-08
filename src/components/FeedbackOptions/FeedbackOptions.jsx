import { Button } from "./FeedbackOptions.styled";

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









