import { FC } from 'react';

export const AppFooter: FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem' }}>
      ©{new Date().getFullYear()} by Ilya Valentsiukevich
    </footer>
  );
};