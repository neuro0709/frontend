import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {PositionChoices} from './PositionChoices';

const choices = PositionChoices 

export default function SelectInput({changeHandle, name, value}) {
  return (
    <Box
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          select
          id={`input-${name}`}
          value={value}
          name={name}
          onChange={changeHandle}
          size='small'
        >
          {choices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
