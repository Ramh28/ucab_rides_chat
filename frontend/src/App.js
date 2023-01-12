import './App.css';
import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import Chat from './pages/Chat';
import Homepage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component = {ChatPage} />
    </div>
  );
}

export default App;
