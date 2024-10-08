import { createContext, useContext, useState } from "react";

const MyInfoContext = createContext()

const MyInfoProvider = ({children, employee}) => {
    const [content, setContent] = useState({
        id: employee.id,
        lastName: employee.lastName,
        firstName: employee.firstName,
        address: employee.address,
        tel: employee.tel,
    });

    const clickHandle = (e) => {
        const {name, value} = e.target;
        setContent((prevContent) => ({
            ...prevContent, [name]: value
        }))
    }
    return(
        <MyInfoContext.Provider value={{content, setContent, clickHandle}}>
            {children}
        </MyInfoContext.Provider>
    )
}
const useMyInfoContext = () => useContext(MyInfoContext);

export {useMyInfoContext, MyInfoProvider}
