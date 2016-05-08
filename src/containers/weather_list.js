import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {

  renderWeather(item){
    const name = item.city.name;
    const temps = item.list.map(weather => weather.main.temp);

    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart color="red" data={temps} /></td>
      </tr>
    );
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
       <table className="table table-hover" >
        <thead>
          <tr>
            <th>City</th>
            <th>Tempature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
       </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
