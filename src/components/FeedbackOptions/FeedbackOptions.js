import PropTypes from "prop-types";
import {
  FeedbackOptionsList,
  FeedbackOptionsItem,
  FeedbackBtn,
} from "./FeedbackOptions.style";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map((option) => {
        const buttonName = option[0].toUpperCase() + option.slice(1);

        return (
          <FeedbackOptionsItem key={option}>
            <FeedbackBtn
              type="button"
              data-name={option}
              onClick={(event) => {
                onLeaveFeedback(event);
              }}
            >
              {buttonName}
            </FeedbackBtn>
          </FeedbackOptionsItem>
        );
      })}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
