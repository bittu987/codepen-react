import React from 'react';
import {Box,styled} from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';

function Result() {
 
 const {HTML,CSS,JS} = useContext(DataContext);

 const srcDoc = `
   <html>
     <body>${HTML}</body>
     <style>${CSS}</style>
     <script>${JS}</script>
   </html>
 
 `

  return (
    <Box >
       <iframe srcDoc={srcDoc} width="99.5%" height="auto" frameBorder={0} sandbox='allow-scripts'/>
    </Box>
  )
}

export default Result