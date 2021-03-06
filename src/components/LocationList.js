import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';



const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }

    const strToComponents = cities => {
        return cities.map((city) =>
            (
                <WeatherLocation
                    city={city}
                    key={city}
                    onWeatherLocationClick={() => { handleWeatherLocationClick(city) }}
                />)
        );
    }
    return (
        <div className='locationList'>
            {strToComponents(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;