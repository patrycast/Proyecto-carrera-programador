import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
)
