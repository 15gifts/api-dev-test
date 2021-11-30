import React from "react"
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import BeerComponent from "./BeerComponent"
import Button from 'react-bootstrap/Button'
class App extends React.Component {
  
  render(){
function loadDoc(){

  // getting the value of the input and saving it to a "stock" variable
    const beers = document.getElementById("beers").value;
  
    // api call :

    axios.get(`https://api.punkapi.com/v2/beers?beer_name=${beers}`)
    .then(function (response) {
      // handle success
      console.log(response);
    // interpolating stock  as explained above
    class Beers extends React.Component{
      render(){
          return (
              <>
              {response.data.map(item => <BeerComponent key={item.length} imglink={item.image_url} name={item.name} youknow={item.tagline} ipo={item.first_brewed} brew={item.description} />)}
              </>
          )
      }
  } ReactDOM.render(<Beers/>, document.getElementById("Mains"))

}

).catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});}
 
  function validateBtn (val)  {
    let btnDOM = document.getElementById("button")
   
    // IF THE INPUT HAS A VALUE LENGTH LESS THEN 1 BUTTON IS DISABLED 
    if( val.length <1 ) { 
        btnDOM.disabled = true 
        btnDOM.innerHTML="Enter a Beer Name"
  }  // ELSE BUTTON IS ENABLED WITH SOME ADDED TEXT
    else { btnDOM.disabled = false; btnDOM.innerHTML="Request Info" }
}




  return (
    <div className="Content" >
    <header  className="Content-header col-sm-10 col-md-9 col-lg-6 col-xl-3">
      <p id="results"> Beer Info </p>
      <div id="inputs">
      <input type="text" id="beers" onKeyUp={ (e) => validateBtn(e.target.value) } ></input>
      <Button variant="light" type="button" id="button"onClick={loadDoc} >Enter a Beer Name </Button>
     
      </div>
    </header> 
    <div id="Mains" ></div>
  </div>
  );
}}


export default App;
