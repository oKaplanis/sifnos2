import React from "react";
import inputs from "../../constants/formInputs";
import RadioButton from '../radio';
const uuid = require('uuid');

function Step6(props) {
    if (props.currentStep !== 6) {
      return null
    }
    return (
      <div className="form-group step-class">
        <div className="step-headers">
          <p>Θεσμικό πλαίσιο:</p>
          <p className="step-measure">{props.currentStep} - 8</p>
        </div>
        <div className="row">
           <div className="col-md-12 text-center">
                <button className="btn btn-primary btn-sm" style={{marginRight: "6px"}} onClick={()=>props.addThesmikoPlaisio('kiriksi')}>Προσθήκη (Κήρυξη)</button>
                <button className="btn btn-danger btn-sm">Αφαίρεση (Κήρυξη)</button>
            </div>
        </div>
        {props.thesmikoPlaisio.kiriksi.arrayLength.map((some,index)=>
            <Kiriksi handleThesmikoPLaisio={props.handleThesmikoPLaisio} index={index} kiriksi={props.thesmikoPlaisio.kiriksi}/>
        )}
        <div className="row loipaStoixeia">
           <div className="col-md-12 text-center">
                <button className="btn btn-primary btn-sm" style={{marginRight: "6px"}} onClick={()=>props.addThesmikoPlaisio('foreasProstasias')}>Προσθήκη (Φορέας Προστασίας)</button>
                <button className="btn btn-danger btn-sm">Αφαίρεση (Φορέας Προστασίας)</button>
            </div>
        </div>
        {/* EDW PROSTHIKI FOREA PROSTASIA*/ }
        {props.thesmikoPlaisio.foreasProstasias.arrayLength.map((e,index)=>
            <ForeasProstasias key={index+4} handleThesmikoPLaisio={props.handleThesmikoPLaisio} index={index} foreasProstasias={props.thesmikoPlaisio.foreasProstasias}/>
        )}
        <label key={uuid.v4()} className="sub-label">Ιδιοκτησιακό καθεστώς χώρου</label>
        <select
            className="form-control"
            >
            {inputs.thesmikoPlaisio.idioktisiakoKathestws.data.map(option => 
                <option key={uuid.v4()}>{option}</option>    
            )} 
        </select>         
        <label key={uuid.v4()} className="sub-label">Στοιχεία ιδιοκτησίας
            <small className="required-field">(Απαιτείται)</small>
        </label>
        <input 
            className="form-control"
            placeholder="Στοιχεία ιδιοκτησίας"
        />

        <label key={uuid.v4()} className="sub-label">Σχόλια/παρατηρήσεις</label>
        <input 
            className="form-control"
            placeholder="Σχόλια/παρατηρήσεις"
        />

        <label key={uuid.v4()} className="sub-label">Οργανωμένος αρχ/κός χώρος</label>
        {/* <RadioButton options={inputs.thesmikoPlaisio.organized.radio}/> */}

        <label key={uuid.v4()} className="sub-label">Επισκέψιμος αρχ/κός χώρος</label>
        {/* <RadioButton options={inputs.thesmikoPlaisio.visitable.radio}/> */}
      </div>
    );
  }

  function Kiriksi(props){
    return(
        <div>
            <label key={uuid.v4()} className="sub-label">Κήρυξη
            {props.index === 0 ?
                <small className="required-field">(Απαιτείται)</small> : <></>
            }
            </label>            
            <input 
                className="form-control"
                placeholder="Κήρυξη"
                name = "kiriksi"
                onChange={props.handleThesmikoPLaisio}
            />
        </div>
    );
  }

  function ForeasProstasias(props){
      const foreas = props.foreasProstasias;
      return(
          <div>
            <label key={uuid.v4()} className="sub-label">Φορέας Προστασίας</label>
            <select
            key={uuid.v4()}
            className="form-control"
            name="foreasProstasias"
            onClick={props.handleThesmikoPLaisio}
            data-foreas={props.index}
            >            
            {foreas.data[props.index] !== 1 ?  
              <option >{foreas.data[props.index]}</option> : 
              <option disabled defaultValue={"Επιλογή"} >Επιλογή</option> 
            }
            {inputs.thesmikoPlaisio.foreasProstasias.data.map(option => 
                <option key={uuid.v4()}>{option}</option>    
            )} 
            </select>
          </div>
      );
  }
  export default Step6;