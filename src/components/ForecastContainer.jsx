import React, { Component } from "react";
import { DayCard } from "./DayCard";
import { DegreeToggle } from "./DegreeToggle";
import { WEATHER_API, WEATHER_URL } from "../constants";
import { WeatherService } from "../services";

const weather = new WeatherService()
export class ForecastContainer extends Component {
  state = {
    data: [],
    unitType: 'fahrenheit',
    loading: false,
    error: false,
  }



  async componentDidMount() {
    this.setState({ loading: true })
    weather.fetchFiveDayForecast()
      .then((res) => {
      if (res && res.response.ok) {
        this.setState({ 
          data: res.data,
          loading: false,
        })
      } else {
        this.setState({ loading: false})
      }
    }, (error) => {
      console.log(error)
      this.setState({
        loading: false, 
        error: true,
      })
    })
  }

  updateUnits = (e) => {
    this.setState({ unitType: e.target.value})
    console.log(e.target.value)
  } 

  render(){
    const { loading, error, data, unitType } = this.state


    return(
     <div className="container mt-5 text-center justify-content-center">
      <h1 className="display-1 bg-light py-5 mb-5"> 5- Day Forecast</h1>
      <h5 className=" text-muted">Denver, CO</h5>
      <DegreeToggle
        updateUnits={this.updateUnits}
        unitType={unitType}
      />
      <div className="row justify-content-center" > 
      {!loading 
      ? data.map((item) => (
          <DayCard
            data={item}
            key={item.dt}
            unitType={unitType}
          />
        ))
      : <div>LOADING...</div>
      }
      </div>
     { error && <h3 className="text-danger">Error Loading data</h3>}

     </div>
    )
  }
}