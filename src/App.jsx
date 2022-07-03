// import { useState, useEffect } from "react";

// import units from "./data/units.json";

import { Dashboard } from "./pages/Dashboard/index";
import { GlobalStyle, CustomStyle } from "./styles/base/index";

/** <
 *Ideas :
 * Add modal for users to add new staff type
 * User can change staff to patient ratio
 * backend with database we update to
 */

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CustomStyle />
      {/* This dashboard page component is temporal , we need to add routes component with react-router-dom 
      for example... */}
      <Dashboard />
    </div>
  );
}

export default App;
