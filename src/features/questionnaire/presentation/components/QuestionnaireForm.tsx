import { Modal, Result, Skeleton } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuestionnaireContent } from './QuestionnaireContent.tsx';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {
  clearQuestionnaireState,
  fetchQuestions,
  setAnswer,
  setPage,
  setPageSize,
  submitQuestionnaireAnswers,
} from '../../store/questionnaireSlice';
import { selectAnsweredCount } from '../../store/selectors.ts';

export const QuestionnaireForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
      questionnaire,
      questions,
      answers,
      totalQuestions,
      pagination,
      loading,
      submitSuccess,
      error,
    } = useAppSelector((state) => state.questionnaire);
    const answeredCount = useAppSelector(selectAnsweredCount);

    useEffect(() => {
      if (submitSuccess) {
        Modal.success({
          title: 'Success',
          content: 'Your answers have been submitted successfully!',
          onOk: () => {
            dispatch(clearQuestionnaireState());
            void navigate('/questionnaires');
          },
        });
      }
    }, [submitSuccess, dispatch, navigate]);

    useEffect(() => {
      if (questionnaire) {
        void dispatch(
          fetchQuestions({
            questionnaireId: questionnaire.id,
            page: pagination.page,
            pageSize: pagination.pageSize,
          }),
        );
      }
    }, [questionnaire, pagination.page, pagination.pageSize, dispatch]);

    const handleAnswerChange = (questionId: string, value: string) => {
      dispatch(setAnswer({ questionId, value }));
    };

    const handleSubmit = () => {
      if (!questionnaire) return;
      void dispatch(
        submitQuestionnaireAnswers({
          questionnaireId: questionnaire.id,
          answers,
        }),
      );
    };

    const handlePageChange = (page: number) => {
      dispatch(setPage(page));
    };

    const handlePageSizeChange = (size: number) => {
      dispatch(setPageSize(size));
    };

    if (loading) {
      return <Skeleton active />;
    }

    if (error) {
      return <Result status="error" title="Error" subTitle={error.message} />;
    }

    return (
      <form>
        <QuestionnaireContent
          questions={questions}
          answers={answers}
          answeredCount={answeredCount}
          totalQuestions={totalQuestions}
          pagination={pagination}
          onAnswerChange={handleAnswerChange}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </form>
    );
  }
;