import { createContext, useContext, useEffect, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children, employee, message }) => {
    const [employees, setEmployees] = useState(employee)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=> {
        if(employees){
            setEmployees(employees)
        }
        setLoading(false)
    },[employees])
    if(loading){
        return <div>Loading Now...</div>
    }
    return (
        <ListContext.Provider value={{employees, setEmployees, loading, setLoading, error, setError, message}} >
            {children}
        </ListContext.Provider>
    )
}

const useListContext = () => useContext(ListContext)

export {ListProvider, useListContext}

