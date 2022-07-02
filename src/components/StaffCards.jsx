import PropTypes from "prop-types";
import { Card } from "./styled-components/card.styled";

function StaffCards({ staff }) {
  return (
    <section className="Container__staff">
      {Object.keys(staff).map((title, value) => {
        return (
          <Card key={value}>
            <h4 title={value}>{title}</h4>
            <h4 title={staff[title]}>{staff[title]}</h4>
          </Card>
        );
      })}
    </section>
  );
}

StaffCards.propTypes = {
  staff: PropTypes.object,
};

export default StaffCards;
