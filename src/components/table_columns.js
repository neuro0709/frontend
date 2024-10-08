import Link from 'next/link'
import BasicButtons from './button';

const tableColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'lastName', headerName: '性', width: 130 },
    { field: 'firstName', headerName: '名', width: 130 },
    { field: 'address', headerName: '住所', width: 250 },
    { field: 'tel', headerName: '電話番号', width: 100 },
    { field: "link", headerName: "詳細" , width: 80 , renderCell: (params) => (
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