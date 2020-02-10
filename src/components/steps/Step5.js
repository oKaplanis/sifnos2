import React from "react";
import inputs from "../../constants/formInputs";
const uuid = require('uuid');


// TODO: ADD KAI DELETE LEITOURGEIES
function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    }
    return (
      <div className="form-group step-class">
        <div className="step-headers">
          <p>Στοιχεία διακόσμησης \ Λοιπά στοιχεία:</p>
          <p className="step-measure">{props.currentStep} - 8</p>
        </div>
        <div className="row">
            <div className="col-md-12 text-center">
                <button type="button" className="btn btn-primary btn-sm" style={{marginRight: "6px"}} onClick={()=>props.addDecoration('detailsOfDecoration')}>Προσθήκη (Στοιχεία Διακόσμησης)</button>
                <button type="button" className="btn btn-danger btn-sm" onClick={()=>props.deleteDecoration('detailsOfDecoration')}>Αφαίρεση (Στοιχεία Διακόσμησης)</button>
            </div>
        </div>
        {/*EDW RENDER TA STOIXEIA DIAKOSMISIS*/}
        {props.decorations.detailsOfDecoration.arrayLength.map((some,index)=>
          <StoixeiaDiakosmisis      
          key={index}
          handleSelectChangeDecoration={props.handleSelectChangeDecoration}
          detailsOfDecoration={inputs.decorations.detailsOfDecoration}
          index={index}
          decorations={props.decorations}
          />         
        )}
        
        
        <div className="row loipaStoixeia">
            <div className="col-md-12 text-center">
                <button type="button" className="btn btn-primary btn-sm" style={{marginRight: "6px"}} onClick={()=>props.addDecoration('otherDetails')}>Προσθήκη (Λοιπά στοιχεία)</button>
                <button type="button" className="btn btn-danger btn-sm" onClick={()=>props.deleteDecoration('otherDetails')}>Αφαίρεση (Λοιπά στοιχεία)</button>
            </div>
        </div>
        {/*EDW RENDER TA LOIPA STOIXEIA*/}
          {props.decorations.otherDetails.arrayLength.map((some,index)=>
            <LoipaStoixeia 
            otherDetails={inputs.decorations.otherDetails}
            key={index}
            handleSelectChangeDecoration={props.handleSelectChangeDecoration}
            index={index}
            decorations={props.decorations}
            />
          )}
             
        <label key={uuid.v4()} className="sub-label">Κατάσταση διατήρησης</label>
        <select 
        className="form-control"      
        name="preservationStatus"         
        value={props.decorations.preservationStatus}
        onChange={props.handleDecorationsInputs}
        >
            {props.decorations.preservationStatus === '' ?  
              <option defaultValue={"Επιλογή"} >Επιλογή</option> :
              <option disabled>{props.decorations.preservationStatus}</option> 
            }
            {inputs.decorations.preservationStatus.map(option => 
                <option key={uuid.v4()}>{option}</option>    
            )} 
        </select>
        <label key={uuid.v4()} className="sub-label">Επεμβάσεις συντήρησης</label>
        <input 
            className="form-control"
            placeholder="Επεμβάσεις συντήρησης"
            name= "operation"
            onChange={props.handleDecorationsInputs}
        />
      </div>
    );
  }

function LoipaStoixeia(props){
  const other = props.decorations.otherDetails;

    return(
      <div>
        <label key={uuid.v4()} className="sub-label">Λοιπά στοιχεία:</label>
        <select 
        className="form-control"         
        onChange={props.handleSelectChangeDecoration('otherDetails')}      
        name="select"
        data-index = {props.index}
        value={other.data[props.index][0] }
        >
            {other.data[props.index][0] === 1 ?  
            <option defaultValue={"Επιλογή"} >Επιλογή</option> :
            <option disabled>{other.data[other.currentIndex][0]}</option> 
            }
            {props.otherDetails.data.map(option => 
                <option key={uuid.v4()}>{option}</option>    
            )} 
        </select>
        <label key={uuid.v4()} className="sub-label">Παρατηρήσεις:</label>
        <textarea  
          name="textarea" 
          style={{fontSize: "18px"}} 
          width={"100%"} 
          rows="2" 
          key={props.index+1}
          placeholder="Παρατηρήσεις"
          data-index = {props.index}      
          value = {other.observations.length !== 0 ? other.observations[props.index] : ''}    
          onChange={props.handleSelectChangeDecoration('otherDetails')}      
        />
    </div>
    );
}
  
function StoixeiaDiakosmisis(props){
  const details = props.decorations.detailsOfDecoration;
    return(
      <div>
        <label key={uuid.v4()} className="sub-label">Στοιχεία διακόσμησης:</label>
        <select 
        className="form-control"         
        onChange={props.handleSelectChangeDecoration('detailsOfDecoration')}      
        name="select"
        data-index = {props.index}
        value={details.data[props.index][0] }
        >
           {details.data[props.index][0] === 1 ?  
            <option defaultValue={"Επιλογή"} >Επιλογή</option> :
            <option disabled>{details.data[details.currentIndex][0]}</option> 
            }
            {props.detailsOfDecoration.data.map(option => 
                <option key={uuid.v4()}>{option}</option>    
            )} 
        </select>
        <label key={uuid.v4()} className="sub-label">Παρατηρήσεις:</label>
        <textarea  
          name="textarea" 
          style={{fontSize: "18px"}} 
          width={"100%"} 
          rows="2" 
          key={props.index+1}
          placeholder="Παρατηρήσεις"
          data-index = {props.index}
          onChange={props.handleSelectChangeDecoration('detailsOfDecoration')}      
        />
      </div>
    );
}
  export default Step5;