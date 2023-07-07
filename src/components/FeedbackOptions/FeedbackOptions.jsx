const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { onGood, onNeutral, onBad } = onLeaveFeedback;

  return (
    <>
      <button type="button" onClick={onGood}>
        {options[0]}
      </button>
      <button type="button" onClick={onNeutral}>
        {options[1]}
      </button>
      <button type="button" onClick={onBad}>
        {options[2]}
      </button>
    </>
  );
};

export default FeedbackOptions;









