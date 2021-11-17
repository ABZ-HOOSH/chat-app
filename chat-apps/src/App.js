import { ChatEngine }  from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';

import './App.css';





const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>
  
    return (
      <ChatEngine
        height="100vh"
        projectID={"7e51676a-1f9f-4632-9acb-12c30cbdec9a"}
        userName={"Eden Hazard"}
        userSecret={"888999"}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
       />
    );
  };

  export default App;