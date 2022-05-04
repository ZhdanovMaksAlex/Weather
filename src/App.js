import { Component } from "react";

import Form from "./components/form";
import Weather from "./components/weather";
import Info from "./components/info";

let API_KEY = "0f08336ae4aae24f8b15f15b7c24624d";




class App extends Component {

  state = {
  temp: undefined,
  city: undefined,
  country: undefined,
  pressure: undefined,
  sunset: undefined,
  error: undefined

}

getWether = async (e) => {
  e.preventDefault();
  let city = e.target.elements.city.value;
  

if(city) {

let api_url = await 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  let data = await api_url.json();


  this.setState({
  temp: data.main.temp,
  city: data.name,
  country: data.sys.country,
  sunrise: data.sys.sunrise,
  sunset: data.sys.sunrise,
  error: undefined
});
  } else {
    this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города"
   })
  }
 }

  render() {
    return(
     <div className="wrapper">
       <div className="main">
       <div className="container">
         <div className="row">
           <div className="col-sm-5 info">
             <Info/>
           </div>
           <div className="col-sm-7 form">
              <Form weatherMetod={this.getWether}/>
       <Weather 
       temp={this.state.temp}
       city={this.state.city}
       country={this.state.country}
       sunrise={this.state.sunrise}
       sunset={this.state.sunset}
       error={this.state.error}
       />
           </div>
         </div>
       </div>
       
      </div>
     </div> 
    )
  }
}
export default App;