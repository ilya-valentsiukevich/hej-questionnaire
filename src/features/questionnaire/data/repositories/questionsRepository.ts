import { ALL_QUESTIONS } from './mock.ts';
import delay from '../../../../shared/delay.ts';
import { Answers, Question } from '../../domain/models/Question.ts';

export async function fetchQuestionsByQuestionnaireId(
  questionnaireId: string,
  page: number,
  pageSize: number,
): Promise<{ items: Question[]; total: number }> {
  await delay(500);

  const questions = ALL_QUESTIONS[questionnaireId];
  if (!questions) {
    throw new Error('Questionnaire not found');
  }

  const total = questions.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = questions.slice(start, end);

  return { items, total };
}

export async function submitAnswers(
  questionnaireId: string,
  answers: Answers,
): Promise<boolean> {
  await delay(500);

  console.log('Submit answers to server:', questionnaireId, answers);

  return true;
}