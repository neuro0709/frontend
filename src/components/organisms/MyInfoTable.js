import { useMyInfoContext } from "../../context/myInfoContext";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdataInputMui from "../atoms/UpdateInputMui";
import SubmitButtons from "../atoms/SubmitButton";
import { useRouter } from "next/router";

export default function Myinfotable() {
    const {content, setContent} = useMyInfoContext();
    const router = useRouter();
    const changeHandle = (e) => {
        const {name, value} = e.target;
        setContent((prevcontent) => ({
            ...prevcontent, [name]: value
        }))
    }

    const rows = [
        { name:"ID" , item: content.id},
        { name:"性" , item: <UpdataInputMui title="性" changeHandle={changeHandle} defaultValue={content.lastName} name="lastName"/>},
        { name:"名" , item: <UpdataInputMui title="名" changeHandle={changeHandle} defaultValue={content.firstName} name="firstName"/>},
        { name:"住所" , item: <UpdataInputMui title="住所" changeHandle={changeHandle} defaultValue={content.address}  name="address"/>},
        { name:"電話番号" , item: <UpdataInputMui title="電話番号" changeHandle={changeHandle} defaultValue={content.tel}  name="tel"/>},
        { name:"役職" , item: <UpdataInputMui title="役職" changeHandle={changeHandle} defaultValue={content.position}  name="position"/>},
    ]

    const UpdateSumbmitHandle = async(event) => {
        event.preventDefault();
        console.log(content)
        const response = await fetch("http://localhost:4000/employees/update",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(content)
            }
        )
        if(response.ok){
            alert("社員情報が編集されました")
            await router.push("/employees/list")
          }else{
            alert("登録に失敗しました")
          }
    }

    return(
        <>
            <form onSubmit={UpdateSumbmitHandle}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="left" sx={{borderLeft: "none"}}>{row.item}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <SubmitButtons contained="登録" position="flex-end"/>
            </form>
        </>

    )
}
