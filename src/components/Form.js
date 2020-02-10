import React from "react";
import arrow from '../images/arrow.png';
import names from '../constants/names';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';
import Step8 from './steps/Step8';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      functionality:{
        progressbar: 12.5,
        currentStep: 1,
        checked: ""
      },
      monument: {
        nameOfMonument: '',
        kindOfMonuments: '',
        subKindOfMonument: '',
        shortDescriptionOfMonument: '',
        published: '',
        region: '',
        location: '',
        access: '',
        coordinates: '',
        height: '',
        connectionWithMaps: '',
      },
      dating: {
        period: {
          from: '',
          until: '',
        },
        subperiod: {
          from: '',
          until: '',
        },
        date: {
          data: ''
        },
        statusOfDate: '',
      },
      functionalityUsage: {        
        functionality: [ [1] ],
        usage: [ [1] ],
        arrayLength: [1],
        currentIndex: 0,
      },
      detailsOfConstruction: {
        architecturalType: '',
        katopsi: '',
        stegasi: '',
        wallmaking: '',
        dimensions: '',
        observations: ''
      },
      decorations: {
        detailsOfDecoration: {          
            arrayLength: [1],
            currentIndex: 0,
            data: [[1]],
            observations: [],          
        },        
        otherDetails: {          
            arrayLength: [1],
            currentIndex: 0,
            data: [[1]],
            observations: [],          
        },
        preservationStatus: '',
        operation: ''
      },
      thesmikoPlaisio: {
        kiriksi: {
          arrayLength: [1],
          currentIndex: 0,
          data: [],
        },
        foreasProstasias: {
          arrayLength: [1],
          foreasIndex: 0,
          data: [1],
        },
        idioktisiakoKathestws: '',
        stoixeiaIdiokthsias: '',
        comments: '',
        organized: '',
        visitable: ''
      },
      files: {
        photo: '',
        planning: '',
        video: ''
      },
      relationships: {
        kinitaMnhmeia: '',
        vivliographia: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);   
    this.handleSelectChangeDecoration = this.handleSelectChangeDecoration.bind(this);   
    this.handledetailsOfConstructionChange = this.handledetailsOfConstructionChange.bind(this);   
    this.handleDecorationsInputs = this.handleDecorationsInputs.bind(this);
    this.handleThesmikoPLaisio = this.handleThesmikoPLaisio.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);     
    this.addUsage = this.addUsage.bind(this);    
    this.deleteUsage = this.deleteUsage.bind(this);
    this.addDecoration = this.addDecoration.bind(this);
    this.deleteDecoration = this.deleteDecoration.bind(this);
    
  }

  handleChange = event => {
    const { name, value } = event.target
    const { monument } = { ...this.state }
    const currentState = monument;
    currentState[name] = value;

    this.setState({
      monument: currentState
    })
  }
  handledetailsOfConstructionChange = (event) => {
    const { name, value } = event.target
    const { detailsOfConstruction } = { ...this.state }
    const currentState = detailsOfConstruction;
    currentState[name] = value;

    this.setState({
      detailsOfConstruction: currentState
    })
  }
  handleDateChange = event => {
    const { name, value ,dataset} = event.target
    const { dating } = { ...this.state }
    const currentState = dating;
    if(event.target.type === "radio"){
      currentState[name] = value
      this.setState({
        dating: currentState
      })
    }else{
        currentState[dataset.dating][name] = value;
        this.setState({
        dating: currentState
      })
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }
  handleSelectChange = event => {
    const { value, name } = event.target
    const { functionalityUsage } = { ...this.state }
    const currentState = functionalityUsage;
    event.target.selected = true
    currentState[name][currentState.currentIndex][0] = value
    this.setState({
      functionalityUsage: currentState
    })
  }
  handleSelectChangeDecoration = (obj) => (event) => {
    const { value, name,dataset } = event.target
    const {decorations} = { ...this.state }
    const currentState = decorations;    
    if(name === "textarea")
      currentState[obj].observations[dataset.index] = value    
    else 
      currentState[obj].data[dataset.index][0] = value
    
    this.setState({
      decorations: currentState
    })
    console.log(currentState[obj])

  } 
  handleDecorationsInputs = event => {
    const { name, value } = event.target
    const { decorations } = { ...this.state }
    const currentState = decorations;
    currentState[name] = value;

    this.setState({
      decorations: currentState
    })
    console.log(decorations)
  }
  handleThesmikoPLaisio = event => {
    const { name, value, dataset } = event.target;
    const { thesmikoPlaisio } = {...this.state};
    const currentState = thesmikoPlaisio;

    if(name === 'kiriksi' )
      currentState[name].data[currentState[name].currentIndex] = value;
    else if(name === 'foreasProstasias'){      
      currentState[name].data[dataset.foreas] = value;
      currentState[name].foreasIndex = dataset.foreas
    }

    console.log(currentState[name].data[currentState[name].foreasIndex])

  }
  addUsage = () => {    
    const { functionalityUsage } = { ...this.state }
    const currentState = functionalityUsage;
    currentState.arrayLength.push(1);
    currentState.functionality.push([1]);
    currentState.usage.push([1]);
    currentState.currentIndex += 1
    this.setState({functionalityUsage: currentState})
  }
  deleteUsage = () => {
    const { functionalityUsage } = { ...this.state }
    const currentState = functionalityUsage;
    currentState.arrayLength.pop();
    currentState.functionality.pop();
    currentState.usage.pop();
    currentState.currentIndex -= 1
    this.setState({functionalityUsage: currentState})
  }
  addDecoration = (obj) => {
    const { decorations } = { ...this.state }
    const currentState = decorations;
    currentState[obj].arrayLength.push(1);
    currentState[obj].data.push([1]);
    currentState[obj].observations.push(1);
    currentState[obj].currentIndex += 1
    this.setState({decorations: currentState})
    console.log(this.state.decorations)
  }
  addThesmikoPlaisio = (obj) => {
    const { thesmikoPlaisio } = { ...this.state }
    const currentState = thesmikoPlaisio;
    currentState[obj].arrayLength.push(1);
    currentState[obj].data.push(1);
    obj === 'kiriksi' ? currentState[obj].currentIndex += 1 : currentState[obj].foreasIndex += 1
    this.setState({thesmikoPlaisio: currentState})
    console.log(this.state.thesmikoPlaisio)
  }
  deleteDecoration = (obj) => {
    const { decorations } = { ...this.state }
    const currentState = decorations;
    currentState[obj].arrayLength.pop();
    currentState[obj].data.pop();
    currentState[obj].observations.pop();
    currentState.currentIndex -= 1
    if(currentState[obj].arrayLength.length === 0){
      currentState[obj].arrayLength.push(1);
      currentState[obj].data.push([1]);
      currentState[obj].observations = [];
      currentState[obj].currentIndex = 0
    }
    this.setState({decorations: currentState})
  }
  componentDidMount(){
    this.refs[`arrow-1`].style.backgroundColor = "#d28700";
    this.refs[`arrow-1`].style.border = "8px solid #da8d00";
    this.state.functionality.currentStep !== 1 ? this.refs[`arrow-text-1`].style.color = "lightgrey" :
    this.refs[`arrow-text-1`].style.color = "#007bff"
  }
  _next = () => {
    let currentStep = this.state.functionality.currentStep
    currentStep = currentStep >= 7 ? 8 : currentStep + 1
    
    const { functionality } = { ...this.state }
    const currentState = functionality;
    currentState.progressbar = this.state.functionality.progressbar + 12.5
    currentState.currentStep = currentStep

    this.setState({
      functionality: currentState,
    })

    this.refs[`arrow-${currentStep}`].style.backgroundColor = "#d28700";
    this.refs[`arrow-${currentStep}`].style.border = "8px solid #da8d00";
    this.refs[`arrow-text-${currentStep}`].style.color = "#007bff"
  }
  _prev = () => {
    let currentStep = this.state.functionality.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    
    const { functionality } = { ...this.state }
    const currentState = functionality;
    currentState.progressbar = this.state.functionality.progressbar - 12.5
    currentState.currentStep = currentStep

    this.setState({
      functionality: currentState,
    })

    this.refs[`arrow-${currentStep+1}`].style.backgroundColor = "rgb(47, 47, 47)";
    this.refs[`arrow-${currentStep+1}`].style.border = "8px solid rgb(47, 47, 47)";
    this.refs[`arrow-text-${currentStep+1}`].style.color = "lightgrey"  
  }
  previousButton() {
    let currentStep = this.state.functionality.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  }
  nextButton() {
    let currentStep = this.state.functionality.currentStep;
    if (currentStep < 8) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }

  render() {    
    return (
      <div className="container" id="form-container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="progress top-progress-bar" style={{height: "2px"}}>
                  <ul className="arrow-list">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => {
                      return (
                          <li className="arrow-li" key={num + arrow} ><img className="arrow img-responsive" ref={`arrow-${num}`} src={arrow} width={"50px"} />
                            <p className="arrow-text" ref={`arrow-text-${num}`}>{names[num-1]}</p>                
                          </li>
                      );
                    })}
                  </ul>
                  <div className="progress-bar" style={{ width: `${this.state.functionality.progressbar}%` }} >
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="progress">
                  <div className="progress-bar" style={{ width: `${this.state.functionality.progressbar}%` }}></div>
                </div>
              </div>
            </div>
            <React.Fragment>
              <form onSubmit={this.handleSubmit}>          
                <Step1
                  currentStep={this.state.functionality.currentStep}
                  handleChange={this.handleChange}
                  monument={this.state.monument}
                  published={this.state.monument.published}
                />
                <Step2
                  currentStep={this.state.functionality.currentStep}
                  handleDateChange={this.handleDateChange}
                  handleChange={this.handleChange}
                  dating={this.state.dating}
                />
                <Step3
                  currentStep={this.state.functionality.currentStep}
                  handleSelectChange={this.handleSelectChange}
                  functionalityUsage={this.state.functionalityUsage}
                  addUsage={this.addUsage}
                  deleteUsage={this.deleteUsage}
                />
                <Step4
                  currentStep={this.state.functionality.currentStep}
                  handledetailsOfConstructionChange={this.handledetailsOfConstructionChange}
                  detailsOfConstruction={this.state.detailsOfConstruction}
                />
                <Step5
                  currentStep={this.state.functionality.currentStep}
                  handleSelectChangeDecoration={this.handleSelectChangeDecoration}
                  handleDecorationsInputs={this.handleDecorationsInputs}
                  decorations={this.state.decorations}
                  addDecoration={this.addDecoration}
                  deleteDecoration={this.deleteDecoration}
                />
                <Step6
                  currentStep={this.state.functionality.currentStep}
                  handleThesmikoPLaisio={this.handleThesmikoPLaisio}
                  thesmikoPlaisio={this.state.thesmikoPlaisio}
                  addThesmikoPlaisio={this.addThesmikoPlaisio}
                />
                <Step7
                  currentStep={this.state.functionality.currentStep}
                  handleChange={this.handleChange}
                  files={this.state.files}
                />
                <Step8
                  currentStep={this.state.functionality.currentStep}
                  handleChange={this.handleChange}
                  relationships={this.state.relationships}
                />
                <div className="row">
                  <div className="col-md-12 next-previous">
                    {this.previousButton()}
                    {this.nextButton()}
                  </div>
                </div>

              </form>
            </React.Fragment>
          </div>
        </div>     
      </div>
    );
  }
}

