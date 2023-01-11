import { Box } from '@chakra-ui/react';
import { useEffect, useHistory } from 'react';
import React from 'react'
import ChatBox from '../components/ChatBox';
import { ChatState } from '../context/chatProvider';

const Chat = () => {
  
  //const  { user } = ChatState()

  return (
      <div>
        <h1> CHAT </h1>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"#F5F5F5"}
          height={"85%"}
          width={"100%"}
          padding={"10px"}
        >  
        </Box>
      </div>
  );
}

export default Chat;