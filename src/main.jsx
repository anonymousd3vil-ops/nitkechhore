import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './applicationStates/store.js';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  	<Provider store={store}>
    	<BrowserRouter>
			<ThemeProvider>
				<App />
				<Toaster/>
			</ThemeProvider>
   		</BrowserRouter>
  </Provider>
);
