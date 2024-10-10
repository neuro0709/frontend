import { createContext, useContext, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children, employee, message }) => {
    const [employees, setEmployees] = useState(employee)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    return (
        <ListContext.Provider value={{employees, setEmployees, loading, setLoading, error, setError, message}} >
            {children}
        </ListContext.Provider>
    )
}

const useListContext = () => useContext(ListContext)

export {ListProvider, useListContext}

