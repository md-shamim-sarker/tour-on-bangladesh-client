import React, {createContext, useEffect, useState} from 'react';

export const DivisionContext = createContext();

const UserContext = ({children}) => {

    const [divisions, setDivisions] = useState([]);

    useEffect(() => {
        fetch('https://tour-on-bangladesh-server.vercel.app/divisions')
            .then(response => response.json())
            .then(json => setDivisions(json))
            .catch(error => console.log(error));
    }, []);

    const contextInfo = {divisions};

    return (
        <DivisionContext.Provider value={contextInfo}>
            {children}
        </DivisionContext.Provider>
    );
};

export default UserContext;