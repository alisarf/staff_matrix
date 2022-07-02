import { useState, useEffect } from "react";
// Import Content
import Header from "./components/Header";
import Table from "./components/Table";
import Time from "./components/Time";
import units from "./data/units.json";
import "./css/style.css";
import { scoreScale } from "./Objects";

// Styled-Components
import { Button } from "./components/styled-components/button.styled";
import { Card } from "./components/styled-components/card.styled";

/**
 *Ideas :
 * Add modal for users to add new staff type
 * User can change staff to patient ratio
 * backend with database we update to
 */

function App() {
  // variable declarations
  var unitDir = units.units;
  const today = new Date();

  // useState hook declarations
  const [unit, setUnit] = useState("bhu");
  const [data, setData] = useState([unitDir[unit].patients]);
  const [acuityTotal, setTotal] = useState(0);
  const [date, setDate] = useState({});
  const [timestamp, setTimestamp] = useState();
  const [staff, setStaff] = useState({
    provider: 2,
    nurse: 6,
    tech: 3,
    "social worker": 3,
    "physical therapy": 2,
  });

  // function declarations
  const getStaff = () => {
    const roundUp = (divider) => Math.ceil(acuityTotal / divider);
    setStaff({
      provider: roundUp(10),
      nurse: roundUp(16),
      tech: roundUp(30),
      "social worker": roundUp(20),
      "physical therapy": roundUp(4),
    });
  };

  const getScoreScale = (caretype, value) => {
    // get corresponding scalescore
    return parseInt(scoreScale[caretype][value]);
  };

  const setScoreValue = (score, id, careType) => {
    // loop over the todos list and find the provided id.
    const updatedList = data.map((item) => {
      if (item.id === id) {
        return { ...item, [careType]: score };
      }
      return item; // else return unmodified item
    });
    setData(updatedList);
  };

  const getAcuity = () => {
    // update total acuity
    var newAcuity = 0;
    data.forEach((item) => {
      newAcuity = newAcuity + item.acuity;
    });

    setTotal(newAcuity);
  };

  const updateIndAcuity = () => {
    // update ind acuity of all patients
    const careTypeArr = Object.keys(scoreScale);
    const updatedListAcuity = data.map((item) => {
      let total = 0;

      careTypeArr.forEach((careType) => {
        // iterate through each caretype in a row
        const refScore = getScoreScale(careType, item[careType]);
        total += refScore;
      });
      return { ...item, acuity: total };
    });

    setData(updatedListAcuity);
  };

  const updateSpecificAcuity = (patient) => {
    // update ind acuity of one patient of refresh click
    const careTypeArr = Object.keys(scoreScale);
    const newArr = [...data];
    let total = 0;
    careTypeArr.forEach((careType) => {
      const refScore = getScoreScale(careType, patient[careType]);
      total += refScore;
    });
    newArr[patient.id] = { ...newArr[patient.id], acuity: total };
    console.log(newArr);
    setData(newArr);
  };

  const changeUnit = (targetUnit) => {
    // stop the units from pulling from json
    if (targetUnit !== unit) {
      setUnit(targetUnit);
      setData(unitDir[targetUnit].patients);
    }
  };

  const getDate = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[today.getMonth()];
    const dd = String(today.getDate()).padStart(2, "0");
    const yyyy = today.getFullYear();

    setDate({
      today: month + " " + dd + ", " + yyyy,
      dayOfWeek: days[today.getDay()],
    });
  };

  const getTimestamp = () => {
    setTimestamp(today.toLocaleString());
  };

  // useEffect hook declarations
  useEffect(() => {
    // when unit changes and intial render
    updateIndAcuity(); // acuityInd
  }, [data[0].firstName]);

  useEffect(() => {
    // initial and unit render
    getAcuity();
    getStaff();
  }, [data[0].acuity]);

  useEffect(() => {
    getStaff();
    // if the staff button is clicked display the new value
    // inital run present data  ->> watch for data change and count that increments
  }, [acuityTotal]); // acuitytotal works but updates everytime the total changes, unit would be better

  useEffect(() => {
    updateIndAcuity();
    getAcuity();
  }, [unit]);

  // set times
  useEffect(() => {
    getDate();
    getTimestamp();
    setData(unitDir[unit].patients);
  }, []);

  return (
    <div className="App">
      <div className="Container">
        <section className="Container__header">
          <Time loc="top" date={date} timestamp={timestamp} />
          <h2 className="Flex Flex__col Flex__center Align__right Font-grey-med">
            <span className="Font-grey-med Capitalize">Hospital XYZ</span>
            <span className="Font-bold-lrg Capitalize">
              {unitDir[unit].unitName}
            </span>{" "}
            {/* could just use {unit} */}
          </h2>
        </section>
        <Header unitD={unitDir} changeU={changeUnit} />
        <main className="Container__patients">
          <Table
            data={data}
            setScoreValue={setScoreValue}
            updateSpecificAcuity={updateSpecificAcuity}
          />
        </main>
        <section className="Container__lower">
          <Button
            onClick={() => {
              updateIndAcuity();
              getAcuity();
              getStaff();
              getTimestamp();
            }}
          >
            Get Staff
          </Button>
          {acuityTotal}
          <p>
            Last Updated: <Time loc="bottom" timestamp={timestamp} />
          </p>
          <div className="Hidden">{acuityTotal}</div>
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
        </section>
      </div>
    </div>
  );
}

export default App;
