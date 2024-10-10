"use client"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { tableColumns,paginationModel } from "../atoms/TableColumns"
import { useListContext } from '../../context/listContext';

export default function DataTable() {
    const {employees, message, loading} = useListContext();

    if(message){
      return <div>{message}</div>
    }

    return (
      <Paper sx={{ height: "auto", width: '100%' }}>
        <DataGrid
          rows={employees}
          columns={tableColumns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20]}
          sx={{ border: 0 }}
        />
      </Paper>
    );
  }