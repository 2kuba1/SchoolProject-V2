import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarProvider from './Contexts/NavbarContext';
import UserProvider from './Contexts/UserContext';
import IsLoggedProvider from './Contexts/IsLoggedContext';
import { IsMobileProvider } from './Contexts/IsMobileContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IsMobileProvider>
    <IsLoggedProvider>
      <BrowserRouter>
        <UserProvider>
          <NavbarProvider>
            <App />
          </NavbarProvider>
        </UserProvider>
      </BrowserRouter>
    </IsLoggedProvider>
  </IsMobileProvider>
);
