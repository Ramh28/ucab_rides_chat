import { Box, Button, Input } from '@chakra-ui/react';
import { useEffect, useHistory } from 'react';
import React from 'react'
import ChatBox from '../components/ChatBox';
import { ChatState } from '../context/chatProvider';
import {FaArrowRight, FaArrowCircleLeft} from 'react-icons/fa'

const Chat = () => {
  
  //const  { user } = ChatState()

  return (
      <div
        style={{ 
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",

        }}
      >
        <Box
          display={"flex"}
          backgroundColor={"#edebeb"}
          height={"100%"}
          width={"50%"}
          padding={"10px"}
          flexDirection={"column"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"left"}
            width={"100%"}
            height={"10%"}
          >
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={<FaArrowCircleLeft />}
              width={"5%"}
              onClick={() => window.location.href = '/'} 
            ></Button>
          </Box>
          <Box 
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            height={"80%"}
          >
            <ChatBox />
          </Box>
          <Box
            display={"flex"}
            alignContent={"space-between"}
            width={"100%"}
            height={"10%"}  
          >
            <Input borderColor={"#024052"} placeholder='Ingresa tu mensaje.' size={"md"} marginRight={"3"}></Input>
            <Button rightIcon={<FaArrowRight />} size={"md"}></Button>
          </Box>
        </Box>
      </div>
  );
}

export default Chat;