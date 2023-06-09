import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './store/store';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/online-shop">
      <App />
    </BrowserRouter>
  </Provider>
);

