import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import styles from './App.module.css';
import { AppFooter } from './components/AppFooter.tsx';
import { AppHeader } from './components/AppHeader.tsx';
import { AppRouter } from './router/AppRouter.tsx';
import { appRoutes } from './router/routes.tsx';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className={styles.appLayout}>
          <AppHeader />
          <Layout className={styles.appContent}>
            <AppRouter routes={appRoutes} />
          </Layout>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
