import React from "react";
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { changeCity } from '../../redux/actions/city'
import CommonHeader from "../../components/CommonHeader";
import CityList from "./CityList";
import CurrentCity from "./CurrentCity";
import './index.scss'

export default withRouter(function City ({ history }) {
  const city_list = ['北京', '上海', '深圳', '武汉', '广州', '长沙', '南昌', '西安', '南京', '天津', '成都', '重庆']
  // const [city, setCity] = useState('北京')
  const dispatch = useDispatch()
  const city = useSelector(state => state.city)

  const handleClickCity = (city) => {
    // setCity(city)
    dispatch(changeCity(city))
    history.push('/')
  }

  return (
    <div>
      <CommonHeader title={ '城市选择' } />
      <CurrentCity city={ city.cityName } />
      <CityList data={ city_list } onClickEvent={ handleClickCity } />
    </div>
  )
})
