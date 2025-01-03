import { Card, Image, Typography } from 'antd';
import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <Card>
      <Typography.Title level={2}>Welcome to <strong>HejQuestionnaire</strong>!</Typography.Title>
      <Image
        width={256}
        src="https://www.datocms-assets.com/80792/1670944188-hero.png"
        alt="HejDoktor"
        preview={false}
      />
    </Card>
  );
};