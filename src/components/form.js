import { Component } from "react";

class Form extends Component {
    render() {
        return(
            <form onSubmit={this.props.weatherMetod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Узнай погоду!</button>
            </form>
        );
    }
}

export default Form;