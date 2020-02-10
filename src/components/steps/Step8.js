import React from "react";
import inputs from "../../constants/formInputs";
const uuid = require('uuid');

function Step8(props) {
    if (props.currentStep !== 8) {
      return null
    }
    return (
      <React.Fragment>
        <div className="form-group step-class">
          <div className="step-headers">
            <p>Σχέση με άλλα μνημεία \ Βιβλιογραφία:</p>
            <p className="step-measure">{props.currentStep} - 8</p>
          </div>
          {Object.keys(props.relationships).map((currState,index) =>
            <div key={uuid.v4()}>
              <label key={uuid.v4()} className="sub-label" htmlFor={`${currState}`}>{inputs.relationships[index]}</label>
              <input
                className="form-control"
                key={uuid.v4()}
                id={currState}
                name={currState}
                data-title="relationships"
                type="text"
                placeholder={`Πληκτρολογήστε ${inputs.relationships[index]}`}
                value={props.relationships.currState}
                onChange={props.handleChange}
              />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-primary">Submit</button>   
          </div>
        </div>
      </React.Fragment>
    );
  }

  export default Step8;