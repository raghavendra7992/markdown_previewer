import React, { useState } from 'react'
import "../App.css";
import { TbArrowsMaximize } from "react-icons/tb";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {
  Text,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


export default function Previewer() {

  const placeholder = `
  # Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '...' && lastLine == '...') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

    const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);
    const [isSecondDivVisible, setIsSecondDivVisible] = useState(true);
    const [isFirstDivExpanded, setIsFirstDivExpanded] = useState(false);
    const [isSecondDivExpanded, setIsSecondDivExpanded] = useState(false);
  
    const toggleFirstDiv = () => {
        if (!isFirstDivExpanded) {
          setIsFirstDivVisible(true);
          setIsSecondDivVisible(false);
        } else {
          setIsFirstDivVisible(true);
          setIsSecondDivVisible(true);
        }
        setIsFirstDivExpanded(!isFirstDivExpanded);
        setIsSecondDivExpanded(false);
      };
  
      const toggleSecondDiv = () => {
        if (!isSecondDivExpanded) {
          setIsSecondDivVisible(true);
          setIsFirstDivVisible(false);
        } else {
          setIsFirstDivVisible(true);
          setIsSecondDivVisible(true);
        }
        setIsSecondDivExpanded(!isSecondDivExpanded);
        setIsFirstDivExpanded(false);
      };
    const firstDivStyle = {
      
        width: isFirstDivExpanded ? '80vh' : '600px',
        height: isFirstDivExpanded ? '95vh' : '300px',
        backgroundColor: 'lightblue',
        margin: '2px 70px 10px',
        display: isFirstDivVisible ? 'block' : 'none',
        cursor: 'pointer',
        
      };
    
      const secondDivStyle = {
        width: isSecondDivExpanded ? '100vh' : '80vh',
        height: isSecondDivExpanded ? '95vh' : '65vh',
        backgroundColor: 'lightgreen',
        margin: '10px',
        display: isSecondDivVisible ? 'block' : 'none',
        cursor: 'pointer',
        overflow:"scroll",
      };
      const show={
        height:isFirstDivExpanded? "85vh" :"250px"
      }

      const [editorState, setEditorState] = useState(placeholder);
      function handleChange(event) {
        setEditorState(event.target.value);
      }

      return (
        <div>
          <div style={firstDivStyle} id='firstbx'>
            <button onClick={toggleFirstDiv}><TbArrowsMaximize/></button>
            <Box >
        <Text fontSize="2xl" fontWeight="bold">
          Markdown Editor
        </Text>
        <Textarea
          value={editorState}
          onChange={handleChange}
          color="gray.700"
          style={show}
        ></Textarea>
      </Box>
          </div>
          <div style={secondDivStyle} id="secondbx">
            <button onClick={toggleSecondDiv}><TbArrowsMaximize/></button>
            <Box>
        <Text
          fontWeight="medium"
          p={4}
          boxShadow="md"
          rounded={4}
          fontSize="xl"
        >
          Preview
        </Text>
        <ReactMarkdown
          components={ChakraUIRenderer()}
          children={editorState}
          skipHtml
        />
      </Box>
          </div>
        </div>
      );
}
