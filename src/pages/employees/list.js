import Link from 'next/link';
import EmployeeTabel from "../../components/EmployeeTabel.js"
import BasicButtons from '../../components/button.js';
import { ListProvider } from '../../context/listContext.js';

export default function EmployeeList({ employee, message }) {
    return (
        <div>
            <ListProvider>
                <h1>個人情報一覧画面</h1>
                <BasicButtons
                    component = {Link}
                    href={`./new_employee`}
                    content="新しい個人情報を登録"
                    >
                </BasicButtons>
                <EmployeeTabel employee={employee} message={message} />
            </ListProvider>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const response = await fetch(`http://localhost:4000/employees/`)
        if(!response.ok){
            throw new Error("ネットワークエラー")
        }
        const data = await response.json()
        return {
            props: {employee: data}
        }
    }catch(err){
        return {
            props: {message: err.message}
        }
    }
}