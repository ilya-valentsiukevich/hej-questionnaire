import { Card, Result, Skeleton } from 'antd';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks.ts';
import { ErrorCode } from '../../../../shared/errors.ts';
import {
  fetchQuestionnaireInfo,
  clearQuestionnaireState,
} from '../../store/questionnaireSlice';
import { QuestionnaireForm } from '../components/QuestionnaireForm';

export const QuestionnairePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    questionnaire,
    error,
  } = useAppSelector((state) => state.questionnaire);

  useEffect(() => {
    if (!id) return;

    if (!questionnaire || questionnaire.id !== id) {
      dispatch(clearQuestionnaireState());
      void dispatch(fetchQuestionnaireInfo(id));
    }
  }, [id, questionnaire, dispatch, navigate]);

  const renderContent = () => {
    if (error?.code === ErrorCode.NOT_FOUND) {
      return (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the questionnaire you visited does not exist."
        />
      );
    }

    if (!questionnaire) {
      return (
        <Card title={<Skeleton.Input active />}>
          <Skeleton active />
        </Card>
      );
    }

    return (
      <Card title={questionnaire.title}>
        <QuestionnaireForm />
      </Card>
    );
  };

  return renderContent();
};