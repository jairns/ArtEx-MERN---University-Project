import React from 'react';
import { BeatLoader } from 'react-spinners';

const Spinner = () => {
    return(
        <div style={{
            minHeight: '100vh',
            width: '100%',
            zIndex: '20',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
        }}>
            <BeatLoader loading />
        </div>
    )
}

export default Spinner;