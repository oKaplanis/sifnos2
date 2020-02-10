import React from "react";
import inputs from "../../constants/formInputs";
const uuid = require('uuid');

function Step7(props) {
    if (props.currentStep !== 7) {
      return null
    }
    return (
      <div className="form-group step-class">
        <div className="step-headers">
          <p>Αρχεία:</p>
          <p className="step-measure">{props.currentStep} - 8</p>
        </div>
        <div className="row">
           <div className="col-md-12 text-center">
                <button className="btn btn-primary btn-sm" style={{marginRight: "6px"}} onClick={''}>Προσθήκη (Φωτογραφική τεκμηρίωση)</button>
                <button className="btn btn-danger btn-sm">Αφαίρεση (Φωτογραφική τεκμηρίωση)</button>
            </div>
        </div>
        <InputFile labelTitle={'Φωτογραφική τεκμηρίωση:'}/>
        <div className="row">
           <div className="col-md-12 text-center">
                <button className="btn btn-primary btn-sm" style={{marginRight: "6px"}} onClick={''}>Προσθήκη (Σχεδιαστική τεκμηρίωση)</button>
                <button className="btn btn-danger btn-sm">Αφαίρεση (Σχεδιαστική τεκμηρίωση)</button>
            </div>
        </div>
        <InputFile labelTitle={'Σχεδιαστική τεκμηρίωση:'}/>
        <div className="row">
           <div className="col-md-12 text-center">
                <button className="btn btn-primary btn-sm" style={{marginRight: "6px"}} onClick={''}>Προσθήκη (Βίντεο)</button>
                <button className="btn btn-danger btn-sm">Αφαίρεση (Βίντεο)</button>
            </div>
        </div>
        <InputFile labelTitle={'Βίντεο:'}/>
      </div>
    );
  }

  function InputFile(props){
      return(
        <div>
            <label key={uuid.v4()} className="sub-label">{props.labelTitle}</label>            
            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                    <label style={{fontSize: "18px"}} className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                </div>
            </div>
        </div>
      );
  }
  export default Step7;