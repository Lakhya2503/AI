const getWeatherDetails = (city = "") => {
  if (city.toLocaleLowerCase() === "amalner") return "35°C";
  if (city.toLocaleLowerCase() === "jalgaon") return "40°C";
  if (city.toLocaleLowerCase() === "sinnar") return "25°C";
  if (city.toLocaleLowerCase() === "nashik") return "20°C";
};



export default getWeatherDetails;
