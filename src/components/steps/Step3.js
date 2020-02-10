import React from "react";
import inputs from "../../constants/formInputs";
const uuid = require('uuid');

export default function Step3 (props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="form-group step-class">
            <div className="step-headers">
                <p>Λειτουργία / Χρήση:</p>
                <p className="step-measure">{props.currentStep} - 8</p>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className="btn btn-primary btn-sm"  style={{marginRight: "6px"}} onClick={props.addUsage} type="button">Προσθήκη</button>
                    <button className="btn btn-danger btn-sm" onClick={props.deleteUsage} type="button">Αφαίρεση</button>                
                </div>
            </div>
    
            <div className="usage">
                {props.functionalityUsage.arrayLength.map( (some,indexer) =>
                    Object.keys(inputs.functionalityUsage).map((currState,index) =>
                        <div key={uuid.v4()}>
                            {index === 0 ? <label key={uuid.v4()} className="sub-label" >Λειτουργία/Χρήση</label> : <></>}
                            <select
                            className="form-control"
                            key={uuid.v4()}
                            name={currState}
                            onChange={props.handleSelectChange}
                            >
                                {props.functionalityUsage[currState][indexer][0] !== 1 ?  
                                <option> {props.functionalityUsage[currState][indexer][0]}</option> : 
                                <option defaultValue={"Επιλογή"} >Επιλογή</option>
                                }
                                {inputs.functionalityUsage[currState].map(option=>
                                    <option key={uuid.v4()}>{option}</option>
                                )}
                            </select>
                        </div>
                    )      
                )}
            </div>
        </div>
    );
    
}
