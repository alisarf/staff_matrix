import PropTypes from "prop-types";
// Import Content
import "../css/style.css";
import { scoreScale } from "../Objects";

// logo
import iconRefresh from "../images/refresh.svg";

// Styled-Components
import { Select } from "./styled-components/select.styled";

function Table({ data, setScoreValue, updateSpecificAcuity }) {
  return (
    <table className="PtTable">
      <tr className="PtTable__categories">
        <th className="Align__left Font-grey-categories">Name</th>
        {Object.keys(scoreScale).map((category, idx) => {
          return (
            <th
              key={idx}
              className="Align__left Font-grey-categories Capitalize"
            >
              {category}
            </th>
          );
        })}
        <th className="Align__left Font-grey-categories">Score</th>
        <th className="Align__center Font-grey-categories">Update</th>
      </tr>
      {data &&
        data.length > 0 &&
        data.map((item, idx) => (
          <tr key={idx} className="Rounded Font-grey-row">
            <td className="Capitalize Align__left">
              {item.firstName} {item.lastName}
            </td>
            <td className="Align__left">
              <Select
                color="#676767"
                value={item.intubated}
                onChange={(e) =>
                  setScoreValue(e.target.value, item.id, "intubated")
                }
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </td>
            <td className="Align__left">
              <Select
                color="#676767"
                value={item.mobility}
                onChange={(e) =>
                  setScoreValue(e.target.value, item.id, "mobility")
                }
              >
                <option value="ind">IND</option>
                <option value="sba">SBA</option>
                <option value="1pa">1PA</option>
                <option value="2pa">2PA</option>
              </Select>
            </td>
            <td className="Align__left">
              <Select
                color="#676767"
                value={item.incontinent}
                onChange={(e) =>
                  setScoreValue(e.target.value, item.id, "incontinent")
                }
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </td>
            <td className="Align__left">
              <Select
                color="#676767"
                value={item.alertOriented}
                onChange={(e) =>
                  setScoreValue(e.target.value, item.id, "alertOriented")
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </td>
            <td className="Align__left">
              <Select
                color="#676767"
                value={item.surgery}
                onChange={(e) =>
                  setScoreValue(e.target.value, item.id, "surgery")
                }
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </td>
            <td className="Align__left">
              <Select
                color="#676767"
                value={item.isolation}
                onChange={(e) =>
                  setScoreValue(e.target.value, item.id, "isolation")
                }
              >
                <option value="no">No</option>
                <option value="contact">Contact</option>
                <option value="droplet">Droplet</option>
                <option value="airborne">Airborne</option>
              </Select>
            </td>
            <td className="Align__left">{item.acuity}</td>
            <td className="Align__center">
              <button
                className="Button__refresh"
                onClick={() => {
                  updateSpecificAcuity(item);
                  // getAcuity();
                }}
              >
                <img src={iconRefresh} alt="refresh" />
              </button>
            </td>
          </tr>
        ))}
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  setScoreValue: PropTypes.func,
  updateSpecificAcuity: PropTypes.func,
};

export default Table;
