import RegisterInput from "../atoms/RegisterInput.js"
import { useRegisterContext } from "../../context/registerContext.js"

export default function Form() {
    const { lastName, setLastName, firstName, setFirstName, address, setAddress, tel, setTel, handleSubmit } = useRegisterContext();

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <RegisterInput title={"性"} content={lastName} setcontent={setLastName} />
                <RegisterInput title={"名"} content={firstName} setcontent={setFirstName} />
                <RegisterInput title={"住所"} content={address} setcontent={setAddress} />
                <RegisterInput title={"電話番号"} content={tel} setcontent={setTel} />
            </table>
            <p>※電話番号はハイフン(-)を除いた10桁以上11桁以下で入力してください</p>
            <button className="submitBtn" type="submit">登録</button>
        </form>
    )
}