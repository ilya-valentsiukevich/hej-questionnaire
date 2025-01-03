import { Progress, Typography } from 'antd';
import React from 'react';

type ProgressIndicatorProps = {
  answeredCount: number;
  totalQuestions: number;
}

const calculateProgress = (answeredCount: number, totalQuestions: number) => {
  return totalQuestions ? Math.round((answeredCount / totalQuestions) * 100) : 0;
};

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
                                                                      answeredCount,
                                                                      totalQuestions,
                                                                    }) => {
  return (
    <div>
      <Progress percent={calculateProgress(answeredCount, totalQuestions)} />
      <Typography.Text>
        {answeredCount} / {totalQuestions} questions answered
      </Typography.Text>
    </div>
  );
};