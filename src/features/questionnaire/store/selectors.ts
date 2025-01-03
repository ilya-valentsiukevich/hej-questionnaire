import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store/rootReducer.ts';
import { EMPTY_ANSWER } from '../../../shared/constants.ts';

const selectAnswers = (state: RootState) => state.questionnaire.answers;

export const selectAnsweredCount = createSelector(
  [selectAnswers],
  (answers) => {
    return Object.values(answers).filter(
      (answer) => (answer?.trim?.() ?? '') !== EMPTY_ANSWER,
    ).length;
  },
);