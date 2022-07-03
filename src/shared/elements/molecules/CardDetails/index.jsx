import PropTypes from "prop-types";
import { CardDetailsContainer } from "./style";

export const CardDetails = ({ title, number }) => {
  return (
    <CardDetailsContainer>
      <h4>{title}</h4>
      <h4>{number}</h4>
    </CardDetailsContainer>
  );
};

CardDetails.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
};
