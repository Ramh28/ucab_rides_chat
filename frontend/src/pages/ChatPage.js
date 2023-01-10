import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/chatProvider";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {

  const { user } = ChatState();

  return (
    <div style = {{width : '100%' }}>
      {user && <ChatBox />}
    </div>
  );
};

export default ChatPage;