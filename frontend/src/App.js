import './App.css';
import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <Route path="/ChatPage" component = {ChatPage} />
      <Route path="/chat" component={Chat}/>
    </div>
  );
}

export default App;
