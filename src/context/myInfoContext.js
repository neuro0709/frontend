import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyInfoContext = createContext()

const MyInfoProvider = ({children, employee}) => {
    const [content, setContent] = useState(employee || {});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        if(employee){
            setContent(employee);
        }
        setLoading(false)
    }, [employee]);
    if(loading){
        return <div>loading now...</div>
    }

    const UpdateSubmitHandle = async(event) => {
        event.preventDefault();
        console.log(content)
        const response = await fetch("http://localhost:4000/employees/update",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(content)
            }
        )
        if(response.ok){
            alert("社員情報が編集されました")
            await router.push("/employees/list")
          }else{
            alert("登録に失敗しました")
          }
    }
    return(
        <MyInfoContext.Provider value={{content, setContent, UpdateSubmitHandle}}>
            {children}
        </MyInfoContext.Provider>
    )
}
const useMyInfoContext = () => useContext(MyInfoContext);

export {useMyInfoContext, MyInfoProvider}
