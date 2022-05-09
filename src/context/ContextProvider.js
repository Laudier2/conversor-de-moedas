import React, { useEffect, useState } from 'react';
import api from '../api/api';
import ConsumeContextData from './ConsumeContextData'

const AppProvider = ({ children }) => {

    const [data, setDate] = useState([])

    useEffect(() => {
        (async () => {
            const req = await api.get("https://economia.awesomeapi.com.br/json/all")
            setDate(req.data)
        })()
    }, [])

    return (
        <ConsumeContextData.Provider value={{ data }}>
            {children}
        </ConsumeContextData.Provider>
    );
}

export default AppProvider;