import { useMyInfoContext } from "../context/myInfoContext";
import UpdataInput from "./updataInput";
export default function Myinfotable() {
    const {content, clickHandle} = useMyInfoContext();
    const handleSubmit = async () => {
            const response = await fetch(`http://localhost:4000/employees/update/${id}`,
                {
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify({ lastName, firstName, address, tel })
                }
            )
            if(response.ok){
                alert("社員情報を更新しました")
            }else{
                alert("社員情報の更新に失敗しました")
            }
    }
    return(
        <>
            <h2>社員情報詳細画面</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <UpdataInput title="ID" clickHandle={clickHandle} value={content.id} name="id"/>
                        <UpdataInput title="性" clickHandle={clickHandle} value={content.lastName} name="lastName"/>
                        <UpdataInput title="名" clickHandle={clickHandle} value={content.firstName} name="firstName"/>
                        <UpdataInput title="住所" clickHandle={clickHandle} value={content.address} name="address"/>
                        <UpdataInput title="電話番号" clickHandle={clickHandle} value={content.tel} name="tel"/>
                    </tbody>
                </table>
                <button className="submitBtn" type="submit">登録</button>
            </form>
        </>
    )
}