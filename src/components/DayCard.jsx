import React from "react";
import moment from "moment/moment";
export const DayCard = (props) => {
  const { temp, dt, imgID, description, feels, humidity } = props.data
  const unitType  = props.unitType
  const newDate = new Date()
  newDate.setTime(dt *1000)

  const fahrenheit = (Math.round(temp))
  const celsius = (Math.round((fahrenheit - 32) * (5/9)))
  return(

    <div className="col-sm-3 ">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        < i className={`owf owf-${imgID} owf-3x`}></i>
        
        <h2>{unitType == 'celsius' ? `${celsius}\u00B0C` : `${fahrenheit}\u00B0F`}</h2>
        <p className="text-muted">Feels Like: { Math.round(feels)}</p>
        <p className="text-muted">Humidity: { humidity}%</p>
        <div className="card-body">
          <p className="card-text"> {description} </p>
        </div>
      </div>
    </div>
  )
}