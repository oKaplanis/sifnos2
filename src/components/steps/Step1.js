import React from "react";
import SifnosMap from "../SifnosMap";
import RadioButton from '../radio';
import inputs from "../../constants/formInputs";
const uuid = require('uuid');

function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    }
    return (
      <div className="form-group step-class">
        <div className="step-headers">
          <p>Μνημείο:</p>
          <p className="step-measure">{props.currentStep} - 8</p>
        </div>
        {Object.keys(props.monument).map((currState,index) =>
          <div key={index+1}>
             {Object.values(inputs.monument[index])[0] === true ? 
              <label key={uuid.v4()} className="sub-label">{Object.keys(inputs.monument[index])}
                  <small className="required-field">(Απαιτείται)</small>
                </label>
              : Object.keys(inputs.monument[index])[0] === "radio" ?  
              <RadioButton options={Object.values(inputs.monument[index])[0]} name={"published"} published={props.published} handleChange={props.handleChange} />
              : <label key={uuid.v4()} className="sub-label">{Object.keys(inputs.monument[index])}</label>            
            }
            {index !== 10 && Object.keys(inputs.monument[index])[0] !== "radio" ? <input
              className="form-control"
              key={index+1}
              data-title="monument"  
              name={`${currState}`}
              type="text"
              placeholder={`Πληκτρολογήστε ${Object.keys(inputs.monument[index])[0]}`}
              value={props.monument.currState}
              onChange={props.handleChange}
            /> : <></>}          
          </div>
        )}
        <div className="container mapContainer">
          <div className="row">
            <div className= "col-md-10" style={{margin: "auto"}}>
              <SifnosMap />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10" style={{margin: "18px auto"}}>
              <label className="polygon-label">Polygon Coordinates</label>
              <p className="text-center">
                <textarea
                  type="text"
                  rows="4"
                  spellCheck="false"
                  onChange={props.handleChange}
                  name="connectionWithMaps"
                />
              </p>
            </div>          
          </div>
        </div>
      </div>
    );
}

export default Step1