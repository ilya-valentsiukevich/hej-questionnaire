import { MOCK_QUESTIONNAIRES } from './mock.ts';
import delay from '../../../../shared/delay.ts';
import { QuestionnaireFilter } from '../../domain/models/Filter.ts';
import { Questionnaire } from '../../domain/models/Questionnaire.ts';

export async function fetchAllQuestionnaires({
                                               searchTerm,
                                               page,
                                               pageSize,
                                             }: QuestionnaireFilter): Promise<{
  items: Questionnaire[],
  total: number
}> {
  await delay(1000);

  let filtered = MOCK_QUESTIONNAIRES;
  if (searchTerm) {
    filtered = filtered.filter((q) =>
      q.title.toLowerCase().includes(searchTerm?.toLowerCase() ?? ''),
    );
  }

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = filtered.slice(start, end);

  return { items, total };
}

export async function fetchQuestionnaireById(id: string): Promise<Questionnaire | undefined> {
  await delay(1000);
  return MOCK_QUESTIONNAIRES.find((q) => q.id === id);
}