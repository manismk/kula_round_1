import { useEffect, useState } from "react";

export const CurrentTabPannel = ({ country }) => {
  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${country.latitude}&lon=${country.longitude}&appid=${process.env.REACT_APP_API}
          `
        );
        const result = await data.json();
        const resultMain = result.main;

        setCurrentData({
          temp: resultMain.temp,
          maxTemp: resultMain.temp_max,
          minTemp: resultMain.temp_min,
          feelsLike: resultMain.feels_like,
        });
      } catch (err) {
        setError("Something went wrong, please try again");
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [country]);
  return (
    <>
      {!loading && (
        <div className="tab-panel-container">
          <div>
            <p className="temp-label">Current Temp</p>
            <p className="temp-data">{currentData.temp}</p>
          </div>
          <div>
            <p className="temp-label">Min Temp</p>
            <p className="temp-data">{currentData.minTemp}</p>
          </div>
          <div>
            <p className="temp-label">Max Temp</p>
            <p className="temp-data">{currentData.maxTemp}</p>
          </div>
          <div>
            <p className="temp-label">Feels like Temp</p>
            <p className="temp-data">{currentData.feelsLike}</p>
          </div>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </>
  );
};
