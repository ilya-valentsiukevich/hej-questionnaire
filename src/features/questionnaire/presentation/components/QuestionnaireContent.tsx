import { Button, Pagination } from 'antd';

import { ItemsPerPageSelect } from './ItemsPerPageSelect.tsx';
import { ProgressIndicator } from './ProgressIndicator.tsx';
import { QuestionList } from './QuestionList.tsx';
import { Answers, Question } from '../../domain/models/Question.ts';


type QuestionnaireContentProps = {
  questions: Question[];
  answers: Answers;
  answeredCount: number;
  totalQuestions: number;
  pagination: { page: number; pageSize: number };
  onAnswerChange: (questionId: string, value: string) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  onSubmit: () => void;
  loading: boolean;
}

export const QuestionnaireContent = ({
                                       answeredCount,
                                       totalQuestions,
                                       pagination,
                                       onPageSizeChange,
                                       questions, answers, onAnswerChange, onPageChange, onSubmit, loading,
                                     }: QuestionnaireContentProps) => {
  return (
    <div className="questionnaire-content">
      <ProgressIndicator
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
      />

      <ItemsPerPageSelect
        pageSize={pagination.pageSize}
        handlePageSizeChange={(size) => onPageSizeChange(size)}
      />

      <QuestionList
        questions={questions}
        answers={answers}
        onAnswerChange={onAnswerChange}
      />

      <Pagination
        current={pagination.page}
        pageSize={pagination.pageSize}
        total={totalQuestions}
        onChange={onPageChange}
        onShowSizeChange={onPageSizeChange}
        style={{ marginBottom: '1rem' }}
      />

      <Button
        type="primary"
        onClick={onSubmit}
        disabled={answeredCount < totalQuestions}
        loading={loading}
      >
        Submit
      </Button>
    </div>
  );
};