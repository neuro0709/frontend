import UpdateInput from "../atoms/UpdateInput";
import SelectInput from "./SelectInput";
export default function MyInfoTblRows (content, changeHandle){
    const rows = [
        { name:"ID" , item: content.id},
        { name:"性" , item: <UpdateInput changeHandle={changeHandle} value={content.employees_lastName} name="employees_lastName"/>},
        { name:"名" , item: <UpdateInput changeHandle={changeHandle} value={content.employees_firstName} name="employees_firstName"/>},
        { name:"住所" , item: <UpdateInput changeHandle={changeHandle} value={content.employees_address}  name="employees_address"/>},
        { name:"電話番号" , item: <UpdateInput changeHandle={changeHandle} value={content.employees_tel}  name="employees_tel"/>},
        { name:"役職" , item: <SelectInput changeHandle={changeHandle} value={content.employees_position}  name="employees_position"/>},
    ]
    return rows;
}

