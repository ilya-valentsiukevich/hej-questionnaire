import { HomeOutlined, OrderedListOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

import { QuestionnairePage } from '../../features/questionnaire/presentation/pages/QuestionnairePage.tsx';
import { QuestionnairesPage } from '../../features/questionnaires/presentation/pages/QuestionnairesPage.tsx';
import { HomePage } from '../../pages/HomePage.tsx';
import { NotFoundPage } from '../../pages/NotFoundPage.tsx';

export type AppRoute = {
  key: string;
  path: string;
  element: ReactNode;
  label?: string;
  icon?: ReactNode;
  hidden?: boolean;
}

export const appRoutes: AppRoute[] = [
  {
    key: 'home',
    path: '/',
    element: <HomePage />,
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    key: 'questionnaires',
    path: '/questionnaires',
    element: <QuestionnairesPage />,
    label: 'Questionnaires',
    icon: <OrderedListOutlined />,
  },
  {
    key: 'questionnaire',
    path: '/questionnaire/:id',
    element: <QuestionnairePage />,
    hidden: true,
  },
  {
    key: 'not-found',
    path: '*',
    element: <NotFoundPage />,
    hidden: true,
  },
];