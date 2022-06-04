import "./App.css";
import { CountrySelect } from "./components/country-select/CountrySelect";
import { TabContainer } from "./components/tab-container/TabContainer";
import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="App">
      <h1 className="message">Weather App</h1>
      <CountrySelect countryChange={(country) => setSelectedCountry(country)} />
      <TabContainer country={selectedCountry} />
    </div>
  );
}

export default App;
