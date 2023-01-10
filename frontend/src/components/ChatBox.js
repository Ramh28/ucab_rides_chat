import React, { useState } from 'react';
import { ChatState } from '../context/chatProvider';

const ChatBox = () => {

    const { loggedUser, setLoggedUser } = useState();

    const { user, chats, setChats } = ChatState();

    const toast = useToast();
    return ( 
    <div> My chats </div> 
    )
};

export default ChatBox;