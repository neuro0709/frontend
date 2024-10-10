import { createContext, useContext, useState } from "react";

const MyInfoContext = createContext()

const MyInfoProvider = ({children, employee}) => {
    const [content, setContent] = useState(employee);

    return(
        <MyInfoContext.Provider value={{content, setContent}}>
            {children}
        </MyInfoContext.Provider>
    )
}
const useMyInfoContext = () => useContext(MyInfoContext);

export {useMyInfoContext, MyInfoProvider}
