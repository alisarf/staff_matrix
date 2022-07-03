import { useState, useEffect } from "react";

import { Text } from "../../shared/elements/atoms/index";
import {
  Sidebar,
  GridWrapper,
  LayoutIntern,
  Header,
} from "../../shared/elements/organisms/index";
import { StyledDate } from "./style";

export const Dashboard = () => {
  const [date, setDate] = useState({});

  const today = new Date();

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

  useEffect(() => {
    getDate();
    // getTimestamp();
    // setData(unitDir[unit].patients);
  }, []);

  return (
    <GridWrapper>
      <Header />
      <Sidebar />
      <LayoutIntern>
        <StyledDate>
          <div>
            <Text tag="p" type="paragraph1">
              {date.dayOfWeek}
            </Text>
            <Text tag="p" type="paragraph1" className="mtrx-fw-bold">
              {date.today}
            </Text>
          </div>

          <div>
            <Text tag="p" type="paragraph1" className="mtrx-align-end">
              Sedona Medical Center
            </Text>
            <Text tag="h1" type="heading1" className="mtrx-orange-color">
              4N Behavioral Health
            </Text>
          </div>
        </StyledDate>
      </LayoutIntern>
    </GridWrapper>
  );
};
