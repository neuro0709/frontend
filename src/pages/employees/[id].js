"use client"
import { useState, useEffect } from "react"

export default function EmployeeInfo({ id}) {
    const [data , setData ] = useState({});
    const [error, setError ] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchEmployees = async () => {
            try{
                const response = await fetch(`http://localhost:4000/employees/${id}`)
                if(!response.ok){
                    throw new Error("ネットワークエラー")
                }   
                const EmployeeData = await response.json()
                setData(EmployeeData)
            }catch(err){
                console.log(err)
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        fetchEmployees();
    },[id])    
    return(
        <>
            <h2>社員情報詳細画面</h2>
            <p>ID: {data.id}</p>
            <p>性: {data.lastName}</p>
            <p>名: {data.firstName}</p>
            <p>住所: {data.address}</p>
            <p>電話番号: {data.tel}</p>
        </>
        
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    return { props: { id } };
  }
  