import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {}from './indexedDb'



import { RootState } from './store';
import Search from './components/search';
import Alert from './components/Alert';
import Weather from './components/weather';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';









const App: FC =() =>{

    
    

    

    const dispatch=useDispatch();
    const weatherData=useSelector((state:RootState)=> state.weather.data);
    const loading=useSelector((state:RootState)=>state.weather.loading);
    const error=useSelector((state:RootState)=>state.weather.error);
    const alertMsg=useSelector((state:RootState)=>state.alert.message);
    return(
        <div className="has-text-centered">
            <Search title="Enter city name and press search button"/>
                {loading ? <h2 className="is-size-3 py-2">loading...</h2>:weatherData && <Weather data={weatherData}/>}
                {alertMsg && <Alert message={alertMsg}onClose={()=>dispatch(setAlert(''))}/>}
                {error&& <Alert message={error}onClose={()=> dispatch(setError())}/>}
            
        </div>
        

        
    );
    
    
}


export default App;



