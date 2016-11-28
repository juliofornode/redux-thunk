import React, { Component } from 'react';
import { connect } from 'react-redux'
import SparklinesComponent from '../components/sparklines_component';
import GoogleMap from '../components/google_map';

class CityList extends Component {

    renderCities(city) {
        const name = city.city.name;
        const temps = city.list.map((ciudad) => ciudad.main.temp);
        const pressure = city.list.map((ciudad) => ciudad.main.pressure);
        const humidity = city.list.map((ciudad) => ciudad.main.humidity);
        const lat = parseFloat(city.city.coord.lat);
        console.log('lat: ' + lat);
        const lon = parseFloat(city.city.coord.lon);
        console.log('lon: ' + lon);

        return(
            <tr key={name}>
                <td>{name}</td>
                <td width="25%">
                    <SparklinesComponent data={temps} units="K" tonalidad="blue"/>
                </td>
                <td width="25%">
                    <SparklinesComponent data={pressure} units="hPa" tonalidad="red"/>
                </td>
                <td width="25%">
                    <SparklinesComponent data={humidity} units="%" tonalidad="orange"/>
                </td>
            </tr>
            )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa) </th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.cities.map(this.renderCities)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
    return {
        cities: state.fetchWeatherReducer
    };
}


export default connect(mapStateToProps)(CityList);
