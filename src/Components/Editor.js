import React from 'react'
import {Box, styled} from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Heading = styled(Box)`
  background :  #1d1e22;
  display : flex;
  padding : 9px 12px ;
  gap : 5px;
`;

const Header = styled(Box)`
   display: flex;
   background : #060606;
   color : #AAAEBC;
   justify-content: space-between;
` ;

const Container = styled(Box)`
   flex-grow: 1;
   flex-basic: 0;
   display : flex;
   flex-direction : column;
   padding : 3px;
`

function Editor({heading,icon ,color,value,onChange}) {

  const handleChange = (editor,data,value)=>{
          onChange(value);
  }


  return (
    <Container >
        <Header>
           <Heading>
              <Box Components = "span" style={{
                background: color,
                height : 20,
                width : 20,
                display : 'flex',
                placeContent : 'center',
                borderRadius : 5,
                marginRight : 5,
                paddingBottom : 2,
                color: "#000",
                fontWeight: "bold",
              }}>{icon}</Box>
              {heading}
           </Heading>
           <CloseFullscreenIcon/>
        </Header>
        <CodeMirror 
        className='controlled-editor' 
        value = {value}
        onBeforeChange={handleChange}
        options={{
          theme: 'material',
          lineNumbers: true,
        }}
        
        />
    </Container>
  )
}

export default Editor