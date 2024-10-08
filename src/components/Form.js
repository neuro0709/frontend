import InputArea from "./input.js"
import { useRegisterContext } from "../context/registerContext.js"

export default function Form() {
    const { lastName, setLastName, firstName, setFirstName, address, setAddress, tel, setTel, handleSubmit } = useRegisterContext();

    return (
        <form onSubmit={handleSubmit}>
            <InputArea title={"性："} content={lastName} setcontent={setLastName} />
            <InputArea title={"名："} content={firstName} setcontent={setFirstName} />
            <InputArea title={"住所："} content={address} setcontent={setAddress} />
            <InputArea title={"電話番号："} content={tel} setcontent={setTel} />
            <p>※電話番号はハイフン(-)を除いた10桁以上11桁以下で入力してください</p>
            <button className="submitBtn" type="submit">登録</button>
        </form>
    )
}