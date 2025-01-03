import { Answers } from '../domain/models/Question.ts';

export function loadAnswersFromStorage(questionnaireId: string | null): Answers {
  try {
    if (!questionnaireId) return {};

    const data = localStorage.getItem(questionnaireId);
    return data ? (JSON.parse(data) as Answers) : {};
  } catch (err) {
    console.error('Failed to parse answers from localStorage', err);
    return {};
  }
}

export function saveAnswersToStorage(questionnaireId: string, answers: Answers) {
  try {
    localStorage.setItem(questionnaireId, JSON.stringify(answers));
  } catch (err) {
    console.error('Failed to save answers to localStorage', err);
  }
}