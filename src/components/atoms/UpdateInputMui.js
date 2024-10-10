import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function UpdataInputMui({changeHandle, name, defaultValue}) {
    return (
    <Box
        sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            required
            id={`input-${name}`}
            defaultValue={defaultValue}
            name={name}
            onChange={changeHandle}
            size='small'
            />
        </div>
    </Box>

  );
}
