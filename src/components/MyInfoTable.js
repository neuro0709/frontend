import { useMyInfoContext } from "../context/myInfoContext";
import UpdataInput from "./updataInput";
export default function Myinfotable() {
    const {content, clickHandle} = useMyInfoContext();

    return(
        <>
            <h2>社員情報詳細画面</h2>
            <form >
                <table>
                    <tbody>
                        <td>ID</td><td>{content.id}</td>
                        <UpdataInput title="性" clickHandle={clickHandle} value={content.lastName} name="lastName"/>
                        <UpdataInput title="名" clickHandle={clickHandle} value={content.firstName} name="firstName"/>
                        <UpdataInput title="住所" clickHandle={clickHandle} value={content.address} name="address"/>
                        <UpdataInput title="電話番号" clickHandle={clickHandle} value={content.tel} name="tel"/>
                        <UpdataInput title="役職" clickHandle={clickHandle} value={content.position} name="position"/>
                    </tbody>
                </table>
                <button className="submitBtn" type="submit">登録</button>
            </form>
        </>
    )
}