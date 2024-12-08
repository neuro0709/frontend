import Link from 'next/link'
import BasicButtons from './PathButton';

const tableColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'employees_lastName', headerName: '性', width: 130 },
    { field: 'employees_firstName', headerName: '名', width: 130 },
    { field: 'employees_address', headerName: '住所', width: 250 },
    { field: 'employees_tel', headerName: '電話番号', width: 100 },
    { field: "employees_link", headerName: "詳細" , width: 80 , renderCell: (params) => (
        // paramsはrow内のデータにアクセスすることができる。params.rowは現在のデータオブジェクトにアクセス可能
        // params.row.idはデータオブジェクトのidにアクセスすることになる
        <BasicButtons
            component={Link}
            href={`/employees/${params.row.id}`}
            content="詳細"
        >
        </BasicButtons>
    )}
  ];    
  
const paginationModel = { page: 0, pageSize: 10 };

export{ tableColumns,paginationModel } ;