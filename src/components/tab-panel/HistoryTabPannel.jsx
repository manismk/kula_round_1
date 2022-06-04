import { useEffect, useState } from "react";

export const HistoryTabPannel = ({ country }) => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${country.latitude}&lon=${country.longitude}&appid=${process.env.REACT_APP_API}
          `
        );

        const result = await data.json();
        const dailyData = result.daily;
        setHistoryData(dailyData);
      } catch (err) {
        console.log(err);
        setError("Something went wrong, please try again");
      } finally {
        setLoading(false);
      }
    })();
  }, [country]);
  return (
    <div className="history-pannel">
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp Min</th>
              <th>Temp max</th>
              <th>Feels like</th>
            </tr>
          </thead>
          <tbody>
            {historyData?.map((dateData) => {
              return (
                <tr key={dateData.dt}>
                  <td>{new Date(dateData.dt * 1000).toLocaleDateString()}</td>

                  <td>{dateData.temp.min}</td>
                  <td>{dateData.temp.max}</td>
                  <td>{dateData.feels_like.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {loading && <p>Loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </div>
  );
};
