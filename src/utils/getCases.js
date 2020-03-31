const axios = require("axios");

const getCases = () => {
  return new Promise(async (resolve, reject) => {
    const url =
      "https://api.covid19api.com/country/venezuela/status/confirmed/live";
    await axios.default
      .get(url)
      .then(response => {
        resolve({ Cases: response.data });
      })
      .catch(err => {
        reject({ error: err });
      });
  });
};

module.exports = getCases;
