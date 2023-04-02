import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarProvider from './Context/NavbarContext';
import UserProvider from './Context/UserContext';
import IsLoggedProvider from './Context/IsLoggedContext';
import { IsMobileProvider } from './Context/IsMobileContext';

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
