import React from 'react';
import { Link } from 'react-router-dom';

import error from '../assets/404_image.jpg';

const NotFound = () => {
    return (
        <div className="error-page" style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${error})`,
                height: '100vh',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <span
                style={{
                    fontWeight: 'bold',
                    color: '#DEA000',
                    fontSize: '18px',
                    textAlign: 'center',
                    width: '85%'
                }}
            >   
                Oops, something's definitely wrong. But do not fret simply use any of the links above to    navigate anywhere on our website or click 
                <Link to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500"
                    }}
                >       HERE
                </Link> to go to the requests page
            </span>
        </div>
    )
}

export default NotFound;
