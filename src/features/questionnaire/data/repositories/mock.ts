import { Question, QuestionType } from '../../domain/models/Question.ts';

export const ALL_QUESTIONS: Record<string, Question[]> = {
  'lorem-ipsum-dolor': [
    {
      id: 'q1',
      type: QuestionType.FREE_TEXT,
      questionText: 'Lorem ipsum dolor sit amet?',
    },
    {
      id: 'q2',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Consectetur adipiscing elit?',
      options: ['Option 1', 'Option 2'],
    },
    {
      id: 'q3',
      type: QuestionType.FREE_TEXT,
      questionText: 'Sed do eiusmod tempor incididunt ut labore?',
    },
    {
      id: 'q4',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Ut enim ad minim veniam?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    {
      id: 'q5',
      type: QuestionType.FREE_TEXT,
      questionText: 'Duis aute irure dolor in reprehenderit?',
    },
    {
      id: 'q6',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Velit esse cillum dolore eu fugiat nulla pariatur?',
      options: ['Choice 1', 'Choice 2', 'Choice 3'],
    },
    {
      id: 'q7',
      type: QuestionType.FREE_TEXT,
      questionText: 'Excepteur sint occaecat cupidatat non proident?',
    },
    {
      id: 'q8',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Sunt in culpa qui officia deserunt mollit anim id est laborum?',
      options: ['Yes', 'No'],
    },
    {
      id: 'q9',
      type: QuestionType.FREE_TEXT,
      questionText: 'Ut aliquip ex ea commodo consequat?',
    },
    {
      id: 'q10',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip?',
      options: ['Opt 1', 'Opt 2', 'Opt 3', 'Opt 4'],
    },
    {
      id: 'q11',
      type: QuestionType.FREE_TEXT,
      questionText: 'Sed ut perspiciatis unde omnis iste natus error?',
    },
    {
      id: 'q12',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'At vero eos et accusamus et iusto odio dignissimos ducimus?',
      options: ['True', 'False'],
    },
    {
      id: 'q13',
      type: QuestionType.FREE_TEXT,
      questionText: 'Nemo enim ipsam voluptatem quia voluptas?',
    },
    {
      id: 'q14',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Neque porro quisquam est qui dolorem ipsum?',
      options: ['Agree', 'Disagree'],
    },
    {
      id: 'q15',
      type: QuestionType.FREE_TEXT,
      questionText: 'Quis autem vel eum iure reprehenderit qui in ea voluptate?',
    },
  ],
  'sed-mollis-quam': [
    {
      id: 'q1',
      type: QuestionType.FREE_TEXT,
      questionText: 'Lorem ipsum dolor sit amet?',
    },
    {
      id: 'q2',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Consectetur adipiscing elit?',
      options: ['Option 1', 'Option 2'],
    },
    {
      id: 'q3',
      type: QuestionType.FREE_TEXT,
      questionText: 'Sed do eiusmod tempor incididunt ut labore?',
    },
    {
      id: 'q4',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Ut enim ad minim veniam?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    {
      id: 'q5',
      type: QuestionType.FREE_TEXT,
      questionText: 'Duis aute irure dolor in reprehenderit?',
    },
    {
      id: 'q6',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Velit esse cillum dolore eu fugiat nulla pariatur?',
      options: ['Choice 1', 'Choice 2', 'Choice 3'],
    },
    {
      id: 'q7',
      type: QuestionType.FREE_TEXT,
      questionText: 'Excepteur sint occaecat cupidatat non proident?',
    },
    {
      id: 'q8',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Sunt in culpa qui officia deserunt mollit anim id est laborum?',
      options: ['Yes', 'No'],
    },
    {
      id: 'q9',
      type: QuestionType.FREE_TEXT,
      questionText: 'Ut aliquip ex ea commodo consequat?',
    },
    {
      id: 'q10',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip?',
      options: ['Opt 1', 'Opt 2', 'Opt 3', 'Opt 4'],
    },
    {
      id: 'q11',
      type: QuestionType.FREE_TEXT,
      questionText: 'Sed ut perspiciatis unde omnis iste natus error?',
    },
    {
      id: 'q12',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'At vero eos et accusamus et iusto odio dignissimos ducimus?',
      options: ['True', 'False'],
    },
    {
      id: 'q13',
      type: QuestionType.FREE_TEXT,
      questionText: 'Nemo enim ipsam voluptatem quia voluptas?',
    },
  ],
  'faucibus-in-lacus': [
    {
      id: 'q1',
      type: QuestionType.FREE_TEXT,
      questionText: 'Lorem ipsum dolor sit amet?',
    },
    {
      id: 'q2',
      type: QuestionType.SINGLE_CHOICE,
      questionText: 'Consectetur adipiscing elit?',
      options: ['Option 1', 'Option 2'],
    },
    {
      id: 'q3',
      type: QuestionType.FREE_TEXT,
      questionText: 'Sed do eiusmod tempor incididunt ut labore?',
    },
  ],
};