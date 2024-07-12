import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TodoContextProvider from './context/todo-context.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId='38b9e28f2a8545c78ae45736540e3ed2'
      domain='https://daniela.kinde.com'
      redirectUri={
        process.env.NODE_ENV === 'production'
          ? 'https://danis-todo-app.vercel.app/'
          : 'http://localhost:5173'
      }
      logoutUri={
        process.env.NODE_ENV === 'production'
          ? 'https://danis-todo-app.vercel.app/'
          : 'http://localhost:5173'
      }
    >
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </KindeProvider>
  </React.StrictMode>
);

