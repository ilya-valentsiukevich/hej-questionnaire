import { Menu, MenuProps } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { appRoutes } from '../router/routes.tsx';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = appRoutes.filter(route => !route.hidden).map(route => ({
  label: (<Link to={route.path}>{route.label}</Link>),
  key: route.key,
  icon: route.icon,
}));

export const AppHeader: FC = () => {
  return (
    <header>
      <Menu mode="horizontal" items={items} />
    </header>
  );
};