import React from "react";
import RadioButton from '../radio';
import inputs from "../../constants/formInputs";

function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    }
    return (
      <div className="form-group step-class">
        <div className="step-headers">
          <p>Χρονολόγηση:</p>
          <p className="step-measure">{props.currentStep} - 8</p>
        </div>
        <label className="sub-label">Περίοδος
          <small className="required-field">(Απαιτείται)</small>
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Από</span>
          </div>
          <input type="text" 
            data-dating="period"
            name="from"
            onChange={props.handleDateChange} 
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default" 
            className="form-control" 
            value={props.dating.period.from}
            />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Έως</span>
          </div>
          <input 
            type="text" 
            data-dating="period"
            name="until"
            onChange={props.handleDateChange} 
            aria-label="Default" 
            aria-describedby="inputGroup-sizing-default" 
            className="form-control" 
            value={props.dating.period.until}
          />
        </div>
        <label className="sub-label">Υποπερίοδος 
          <small className="required-field">(Απαιτείται)</small>
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Από</span>
          </div>
          <input 
            type="text" 
            data-dating="subperiod"
            name="from"
            onChange={props.handleDateChange} 
            aria-label="Default" 
            aria-describedby="inputGroup-sizing-default" 
            className="form-control" 
            value={props.dating.subperiod.from}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Έως</span>
          </div>
          <input 
            type="text" 
            data-dating="subperiod"
            name="until"
            onChange={props.handleDateChange} 
            aria-label="Default" 
            aria-describedby="inputGroup-sizing-default" 
            className="form-control" 
            value={props.dating.subperiod.until}
          />
        </div>
        <label className="sub-label">Χρονολογία 
          <small className="required-field">(Απαιτείται)</small>
        </label>      
        <input 
          className="form-control" 
          onChange={props.handleDateChange} 
          value={props.dating.date.data}
          name="data"
          data-dating="date"
        />
        <RadioButton 
          options={inputs.dating[3].radio} 
          name={"statusOfDate"}
          data-dating="statusOfDate"
          published={props.dating.statusOfDate} 
          handleChange={props.handleDateChange} 
        />    
      </div>
    );
  }

  export default Step2;