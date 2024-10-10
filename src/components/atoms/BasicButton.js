import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({component, href, content}) {
  return (
    <Stack 
        spacing={2} 
        direction="column" 
        sx={{
            justifyContent: "space-between",
            margin: "5px 0",
            alignItems:"flex-end"}}
    >
        <Button 
            component={component}
            href={href}
            variant="contained"
        >{content}</Button>
    </Stack>
  );
}