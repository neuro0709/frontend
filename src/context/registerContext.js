
import React, { createContext, useContext, useState } from 'react';

const RegisterContext = createContext();

const RegisterProvider = ({children}) => {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [address, setAddress] = useState("")
    const [tel, setTel] = useState("")
    const handleSubmit = async(event) => {
        event.preventDefault();
        // 登録ボタンが押された時にはhttp://localhost:4000/employees/myInfo_register/にリクエストを送信
        const response = await fetch(`http://localhost:4000/employees/myInfo_register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lastName, firstName, address, tel }),
          }
        )
        // 正常にリクエストが送信された時とされなかったときにalert機能がそれぞれ実行
        if(response.ok){
          alert("社員が登録されました")
          setLastName("");
          setFirstName("");
          setAddress("");
          setTel("");
        }else{
          alert("登録に失敗しました")
        }
      }
    return (
        <RegisterContext.Provider value={{ lastName, setLastName, firstName, setFirstName, address, setAddress, tel, setTel, handleSubmit }}>
            {children}
        </RegisterContext.Provider>
    )
}
const useRegisterContext = () => useContext(RegisterContext);

export { RegisterProvider , useRegisterContext } ;