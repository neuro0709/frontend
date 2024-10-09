"use client"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { tableColumns,paginationModel } from "./TableColumns"

export default function DataTable({employee, message}) {
    const employees = employee;
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
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    );
  }