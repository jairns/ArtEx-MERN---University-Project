import React, { useState, useEffect } from 'react';
import CurrentConverter from '../Components/CurrencyConverter/CurrencyConverter';
import Hotel from '../Components/Hotel/Hotel';
import Spinner from '../Components/Spinner';

const Barcelona = () => {

    // API FROM: https://exchangeratesapi.io/

    const BASE_URL = 'https://api.exchangeratesapi.io/latest'

    const [hotels, setHotels] = useState([]);
    const [updatedCur, setUpdatedCur] = useState('GBP');
    const [loading, setLoading] = useState()
    const [rate, setRate] = useState(1)
    
    const onCurChange = (e) => {
        const value = [...e.target.selectedOptions].map(opt => opt.value).join(); 
        setUpdatedCur(value);
        fetch(`${BASE_URL}?base=GBP&symbols=${value}`)
        .then(res => res.json())
        .then(data => setRate(data.rates[value]))
    }
    
    useEffect(() => {
        const getHotels = async () => {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/hotels/barcelona/');
            const jsonResponse = await response.json();
            setHotels(jsonResponse);
            setLoading(true);
        }   
        getHotels();
    }, []);
        
    return (
        <div className='mt-3'>
            <CurrentConverter onChange={onCurChange} />
            {loading ? (
                (
                    hotels.map((hotel, index) => {
                        return (
                            <Hotel
                                key={index} 
                                image={hotel.image}
                                name={hotel.name}
                                price={hotel.price*rate}
                                abbrev={updatedCur}
                                distance={hotel.distance_from_venue}
                                booking={hotel.booking_url}
                            />
                        )
                    })
                ) 
            ) : (<Spinner />)}
        </div>
    )
}

export default Barcelona;