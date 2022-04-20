import { CHANGE_CITY, INIT_CITY } from "../constants";

const initCity = (cityName) => {
  return {
    type: INIT_CITY,
    cityName
  }
}

const changeCity = (cityName) => {
  return {
    type: CHANGE_CITY,
    cityName
  }
}

export {
  initCity,
  changeCity
}
