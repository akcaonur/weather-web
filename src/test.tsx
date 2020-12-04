import React, { useEffect ,FC} from 'react';

import{WeatherData} from './store/types'
import IndexedDb from './indexedDb'
import {WeatherProps} from './components/weather'







const abc = (a:string) => {
    
        const runIndexDb = async () => {
            const indexedDb = new IndexedDb('test');
            await indexedDb.createObjectStore(['ad']);
            await indexedDb.putValue('ad', { name: a });
            
        }
        runIndexDb();
    
    return (<React.Fragment></React.Fragment>)
}

export default abc;
