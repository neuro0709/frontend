import { createContext, useContext, useState } from "react";

const MyInfoContext = createContext()

const MyInfoProvider = ({children, employee}) => {
    const [content, setContent] = useState({employee
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
