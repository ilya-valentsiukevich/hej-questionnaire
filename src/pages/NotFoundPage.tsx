import { Result, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, page not found."
      extra={
        <Button type="primary">
          <Link to="/">Go to the homepage</Link>
        </Button>
      }
    />
  );
};