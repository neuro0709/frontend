import { useMyInfoContext } from "../../context/myInfoContext";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SubmitButtons from "../atoms/SubmitButton";
import MyInfoTblRows from "../atoms/MyInfoTblRow";


export default function Myinfotable() {
    const {content, setContent, UpdateSubmitHandle} = useMyInfoContext();
    const changeHandle = (e) => {
        const {name, value} = e.target;
        setContent((prevcontent) => ({
            ...prevcontent, [name]: value
        }))
    }
    const rows = MyInfoTblRows(content, changeHandle)

    return(
        <>
            <form onSubmit={UpdateSubmitHandle}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ height: "60px" ,'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="left" sx={{padding:"0",height: "60px" ,borderLeft: "none"}}>{row.item}</TableCell>
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
