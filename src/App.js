import "./App.css";
import { CountrySelect } from "./components/country-select/CountrySelect";
import { TabContainer } from "./components/tab-container/TabContainer";
import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  console.log(selectedCountry);

  return (
    <div className="App">
      <CountrySelect countryChange={(country) => setSelectedCountry(country)} />
      <TabContainer country={selectedCountry} />
    </div>
  );
}

export default App;
