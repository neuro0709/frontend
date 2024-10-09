
import { MyInfoProvider } from "../../context/myInfoContext";
import MyInfoTable from "../../components/MyInfoTable";
import { notFound } from "next/navigation";

export default function EmployeeInfo({employee}) {
    return(
        <>
            <MyInfoProvider employee={employee}>
                <MyInfoTable/>
            </MyInfoProvider>
        </>
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