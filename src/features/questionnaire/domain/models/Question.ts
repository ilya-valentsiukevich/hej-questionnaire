export enum QuestionType {
  FREE_TEXT = 'FREE_TEXT',
  SINGLE_CHOICE = 'SINGLE_CHOICE'
}

export interface Question {
  id: string;
  type: QuestionType;
  questionText: string;
  options?: string[];
}

export type Answer = string;

export interface Answers {
  [questionId: string]: Answer;
}