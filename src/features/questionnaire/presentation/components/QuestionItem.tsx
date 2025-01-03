import { CheckCircleOutlined } from '@ant-design/icons';
import { Alert, Input, Radio, Typography } from 'antd';
import React from 'react';

import styles from './QuestionItem.module.css';
import { Question, QuestionType } from '../../domain/models/Question.ts';

type QuestionItemProps = {
  question: Question;
  value?: string;
  onChange: (val: string) => void;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({
                                                            question,
                                                            value = '',
                                                            onChange,
                                                          }) => {
  const { questionText, type, options } = question;
  const isAnswered = Boolean(value.trim());

  const answerRenderers = {
    [QuestionType.FREE_TEXT]: (
      <Input
        value={value}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Your answer..."
      />
    ),
    [QuestionType.SINGLE_CHOICE]: (
      <Radio.Group value={value} onChange={({ target }) => onChange(target.value as string)}>
        {(options || []).map((option) => (
          <Radio key={option} value={option}>
            {option}
          </Radio>
        ))}
      </Radio.Group>
    ),
  };

  const renderContent = answerRenderers[type] || (
    <Alert type="error" message="Unsupported question type"></Alert>
  );

  return (
    <div className={styles.questionItem}>
      <Typography.Text strong>
        {questionText}
        {isAnswered && (
          <CheckCircleOutlined style={{ color: 'green', marginLeft: '0.5rem' }} />
        )}
      </Typography.Text>
      <div className={styles.questionItemInput}>
        {renderContent}
      </div>
    </div>
  );
};