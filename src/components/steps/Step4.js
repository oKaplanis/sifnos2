import React from "react";
import inputs from "../../constants/formInputs";
const uuid = require('uuid');

function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    }
    return (
      <div className="form-group step-class">
        <div className="step-headers">
          <p>Στοιχεία κατασκευής:</p>
          <p className="step-measure">{props.currentStep} - 8</p>
        </div>

        {Object.keys(props.detailsOfConstruction).map((currState,index) => 
        <div key={currState+index}>
          { Object.values(inputs.detailsOfConstruction)[index] === true ? 
                <label key={uuid.v4()} className="sub-label" htmlFor={`${currState}`}>
                  {Object.keys(inputs.detailsOfConstruction)[index]}
                  <small className="required-field">(Απαιτείται)</small>
                </label> :
              <label key={uuid.v4()} className="sub-label" htmlFor={`${currState}`}>{Object.keys(inputs.detailsOfConstruction)[index]}</label>
            }
           { index > 3 ?
          <input 
            className="form-control"
            key={currState+index}
            id={currState}
            name={currState}
            data-title="detailsOfConstruction"
            type="text"
            placeholder={`Πληκτρολογήστε ${currState}`}
            value={props.detailsOfConstruction.currState}
            onChange={props.handledetailsOfConstructionChange}
          /> :
            <select
                className="form-control"
                key={uuid.v4()}
                name={currState}   
                onChange={props.handledetailsOfConstructionChange}   
                value={currState}                          
            >           
                {props.detailsOfConstruction[currState] === '' ?  
                  <option defaultValue={"Επιλογή"} >Επιλογή</option> :
                  <option disable>{props.detailsOfConstruction[currState]}</option>
                }     
                {inputs.detailsOfConstruction[Object.keys(inputs.detailsOfConstruction)[index]].map(option=> 
                    <option key={uuid.v4()}>{option}</option>
                )}
            </select>
            }            
          </div>
        )}
      </div>
    );
  }

  export default Step4;