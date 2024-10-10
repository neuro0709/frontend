
import { MyInfoProvider } from "../../context/myInfoContext";
import MyInfoTable from "../../components/organisms/MyInfoTable";
import BasicButtons from "../../components/atoms/PathButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function EmployeeInfo({employee}) {
    return(
        <div className="myinfo">
            <h2>社員情報詳細画面</h2>
            <MyInfoProvider employee={employee}>
            <BasicButtons
                    component = {Link}
                    href={`./list`}
                    content="戻る"
                    />
            <MyInfoTable/>                
            </MyInfoProvider>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    // 現在のサーバーにアクセスしてる情報がcontextに含まれるので、http://localhost:3000/employees/12としたらidは12となる
    const response = await fetch(`http://localhost:4000/employees/${id}`)
    if(!response.ok){
        if(response.status === 404){
            return{
                notFound: true
            }
        }
        throw new Error("ネットワークエラー")
    }
    const data = await response.json()
    return {
        props: {employee: data}
    }
}