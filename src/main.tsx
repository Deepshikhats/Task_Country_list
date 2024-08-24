import store from '@/store/store.tsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { Suspense } from 'react';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </Provider>
);
