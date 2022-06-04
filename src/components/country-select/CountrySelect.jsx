import Select from "react-select";

const countriesList = [
  { name: "Andorra", latitude: "42.546245", longitude: "1.601554" },
  {
    name: "United Arab Emirates",
    latitude: "23.424076",
    longitude: "53.847818",
  },
  { name: "Afghanistan", latitude: "33.93911", longitude: "67.709953" },
];

export const CountrySelect = ({ countryChange }) => {
  const changeHandler = (option) => {
    console.log(option);
    countryChange(option);
  };
  return (
    <Select
      onChange={changeHandler}
      options={countriesList}
      getOptionLabel={(country) => country.name}
    />
  );
};
