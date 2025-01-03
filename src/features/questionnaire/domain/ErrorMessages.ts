import { ErrorCode } from '../../../shared/errors.ts';

export const QuestionnaireErrorMessage = {
  [ErrorCode.NOT_FOUND]: 'Questionnaire not found',
  [ErrorCode.LOAD_ERROR]: 'Error loading questionnaire',
  [ErrorCode.UNKNOWN_ERROR]: 'Unknown error',
};

export const QuestionsErrorMessage = {
  [ErrorCode.LOAD_ERROR]: 'Error loading questions',
  [ErrorCode.UNKNOWN_ERROR]: 'Unknown error',
};

export const SubmitAnswersErrorMessage = {
  [ErrorCode.UNKNOWN_ERROR]: 'Unknown error',
};