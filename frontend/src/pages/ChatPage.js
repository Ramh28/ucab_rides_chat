import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/chatProvider";
import ChatBox from "../components/ChatBox";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const ChatPage = () => {

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      history.push("/Chat")
    }
  }, [History]);

  const { user } = ChatState();

  return (
    <div style = {{width : '100%' }}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"#F5F5F5"}
        height={"85%"}
        width={"100%"}
      >
      </Box>      
    </div>
  );
};

export default ChatPage;