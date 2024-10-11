import UpdateInput from "../atoms/UpdateInput";
import SelectInput from "./SelectInput";
export default function MyInfoTblRows (content, changeHandle){
    const rows = [
        { name:"ID" , item: content.id},
        { name:"性" , item: <UpdateInput changeHandle={changeHandle} value={content.lastName} name="lastName"/>},
        { name:"名" , item: <UpdateInput changeHandle={changeHandle} value={content.firstName} name="firstName"/>},
        { name:"住所" , item: <UpdateInput changeHandle={changeHandle} value={content.address}  name="address"/>},
        { name:"電話番号" , item: <UpdateInput changeHandle={changeHandle} value={content.tel}  name="tel"/>},
        { name:"役職" , item: <SelectInput changeHandle={changeHandle} value={content.position}  name="position"/>},
    ]
    return rows;
}

