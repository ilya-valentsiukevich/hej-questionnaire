import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppRoute } from './routes.tsx';

type AppRouterProps = {
  routes: AppRoute[]
}

export const AppRouter: FC<AppRouterProps> = ({ routes }: AppRouterProps) => {
  return (
    <Routes>
      {routes.map(({ key, path, element }) => (
        <Route key={key} path={path} element={element} />
      ))}
    </Routes>
  );
};