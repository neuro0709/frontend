import { createContext, useContext, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    return (
        <ListContext.Provider value={{employees, setEmployees, loading, setLoading, error, setError}} >
            {children}
        </ListContext.Provider>
    )
}

const useListContext = () => useContext(ListContext)

export {ListProvider, useListContext}