import React,{FC} from 'react';
import{WeatherData} from '../store/types'
import abc from'../test';

export interface WeatherProps{
    data:WeatherData;
    
}







const Weather:FC <WeatherProps>=({data})=>{
    const fahrenheit =(data.main.temp*1.8-459.67).toFixed(2);
    const celsius:string=(data.main.temp-273.15).toFixed(2);
    const ulkeAdı:string=(data.sys.country);

    abc(ulkeAdı);
    
    
    
    
    
    
    return(
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered"style={{marginBottom:50}}>
                    {ulkeAdı}
                </h1>
                <div className="level" style={{alignItems:'flex-start'}}>
                    <div className="level item has-text-centered">
                        <p className="p heading">
                            {data.weather[0].description}
                        </p>
                        <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
                    </div>
                
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">temp</p>
                        <div className="title">
                        <p className="mb-2">{data.main.temp}K</p>
                        <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                        <p className="mb-2">{celsius}<sup>&#8451;</sup></p>
                        </div>
                    </div>
                </div>
                <div className="level-item has-text-centeret">
                    <p className="heading">humidity</p>
                    <p className="title">{data.main.humidity}</p>
                </div>
                <div className="level-item has-text-centeret">
                    <p className="heading">pressure</p>
                    <p className="heading">{data.main.pressure}</p>
                </div>
                <div className="level-item has-text-centeret">
                <p className="heading">wind</p>
                <p className="title">{data.wind.speed}m/s</p>
                </div>

            </div>
        </section>
    );
    
}



export default Weather;
