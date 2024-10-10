import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SubmitButtons({contained, position }) {
  return (
    <Stack 
        spacing={2} 
        direction="row"
        sx={{
            justifyContent: position,
            margin: "5px 0",
            alignItems:"center",

        }}
    >
      <Button 
        variant="contained"
        type='submit'
        >{contained}</Button>
    </Stack>
  );
}