import React from 'react'
import Editor from './Editor'
import {Box,styled} from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';

const Container = styled(Box)`
   display : flex;
   height : auto;
   background : black;
   padding : 6px;
`


function Code() {
     
  const {HTML,setHTML,CSS,setCSS,JS,setJS} = useContext(DataContext);

  return (
    <Container>
    <Editor heading="HTML" icon="/" color="#FF3C41" value={HTML} onChange={setHTML}/>
    <Editor heading="CSS" icon="*" color="#0EBEFF" value={CSS} onChange={setCSS}/>
    <Editor heading="JS" icon="()" color="#FCD000" value={JS} onChange={setJS}/>
    </Container>
  )
}

export default Code