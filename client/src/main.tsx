import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarProvider from './Contexts/NavbarContext';
import UserProvider from './Contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UserProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </UserProvider>
  </BrowserRouter>
);
