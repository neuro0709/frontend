import { useState, useEffect } from "react"
import UpdataArea from "../../components/updata";
import { MyInfoProvider, useMyInfoContext } from "../../context/myInfoContext";
import MyInfoTable from "../../components/MyInfoTable";

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
    const response = await fetch(`http://localhost:4000/employees/${id}`)
    if(!response.ok){
        throw new Error("ネットワークエラー")
    }
    const data = await response.json()
    return {
        props: {employee: data}
    }
}