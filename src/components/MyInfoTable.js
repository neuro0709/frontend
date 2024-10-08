import { useMyInfoContext } from "../context/myInfoContext";
import UpdataArea from "./updata";

export default function Myinfotable() {
    const {content, setContent, clickHandle} = useMyInfoContext();
    return(
        <>
            <h2>社員情報詳細画面</h2>
            <table>
                <tbody>
                    <UpdataArea title="ID" clickHandle={clickHandle} value={content.id} name="id"/>
                    <UpdataArea title="性" clickHandle={clickHandle} value={content.lastName} name="lastName"/>
                    <UpdataArea title="名" clickHandle={clickHandle} value={content.firstName} name="firstName"/>
                    <UpdataArea title="住所" clickHandle={clickHandle} value={content.address} name="address"/>
                    <UpdataArea title="電話番号" clickHandle={clickHandle} value={content.tel} name="tel"/>
                </tbody>
            </table>
        </>
    )
}