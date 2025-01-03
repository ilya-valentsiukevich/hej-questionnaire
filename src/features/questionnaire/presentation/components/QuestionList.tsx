import { QuestionItem } from './QuestionItem.tsx';
import { Answers, Question } from '../../domain/models/Question.ts';

type QuestionListProps = {
  questions: Question[];
  answers: Answers;
  onAnswerChange: (questionId: string, value: string) => void;
}

export const QuestionList = ({ questions, answers, onAnswerChange }: QuestionListProps) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          value={answers[question.id]}
          onChange={(value) => onAnswerChange(question.id, value)}
        />
      ))}
    </div>
  );
};