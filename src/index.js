const Covid19 = require("./Covid19");

const data = [
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-14T00:00:00Z",
    Cases: 2,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-15T00:00:00Z",
    Cases: 10,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-16T00:00:00Z",
    Cases: 17,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-17T00:00:00Z",
    Cases: 33,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-18T00:00:00Z",
    Cases: 36,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-19T00:00:00Z",
    Cases: 42,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-20T00:00:00Z",
    Cases: 42,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-21T00:00:00Z",
    Cases: 70,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-22T00:00:00Z",
    Cases: 70,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-23T00:00:00Z",
    Cases: 77,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-24T00:00:00Z",
    Cases: 84,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-25T00:00:00Z",
    Cases: 91,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-26T00:00:00Z",
    Cases: 107,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-27T00:00:00Z",
    Cases: 107,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-28T00:00:00Z",
    Cases: 119,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-29T00:00:00Z",
    Cases: 119,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-30T00:00:00Z",
    Cases: 135,
    Status: "confirmed"
  },
  {
    Country: "Venezuela",
    Province: "",
    Lat: 6.4238,
    Lon: -66.5897,
    Date: "2020-03-31T12:46:33Z",
    Cases: 135,
    Status: "confirmed"
  }
];

const covid = new Covid19(data);

covid.calcIncrementoPorDia();
covid.calcFactor();
covid.proyeccionRango();

const infectadosHoy = 135;
const infectadosAyer = 119;
