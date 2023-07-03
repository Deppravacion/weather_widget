import React from "react";

export const DegreeToggle = ({ updateUnits, unitType }) => {

  return(
    <>
      <div className="form-check form-check-inline">
        <input type="radio"
        className="form-check-input"
        name='degree-type'
        id='celsius'
        value='celsius'
        onChange={updateUnits}
        checked={unitType == 'celsius'}
        />
        <label htmlFor="celsius">Celsius</label>
      </div>
      <div className="form-check form-check-inline">
        <input type="radio"
        className="form-check-input"
        name='degree-type'
        id='fahrenheit'
        value='fahrenheit'
        onChange={updateUnits }
        checked={unitType == 'fahrenheit'}
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </>
  )
}