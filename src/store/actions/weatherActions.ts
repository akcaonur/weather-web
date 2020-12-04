import {ThunkAction} from 'redux-thunk';
import {RootState}from '..';

import {WeatherAction,WeatherData,WeatherError,GET_WEATHER,SET_LOADİNG,SET_ERROR}from '../types';





export const getWeather=(city:string):ThunkAction<void,RootState,null,WeatherAction> =>{
    return async dispatch =>{
        try {
            
        const res =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f57944d9dd4122f54c55072ef691b147`);
            if(!res.ok){
            const resData:WeatherError=await res.json();
            throw new Error(resData.message);
        }
        const resData:WeatherData=await res.json();
        dispatch({
            type:GET_WEATHER,
            payload:resData 
        });
        }
        catch(err){
        dispatch({
            type:SET_ERROR,
            payload:err.message
        });
    }
        
    }
}
export const setLoading=():WeatherAction=>{
    return{
        type:SET_LOADİNG
    }
}
export const setError =() :WeatherAction => {
    return{
        type:SET_ERROR,
        payload:''
    }
}