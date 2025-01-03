import { combineReducers } from '@reduxjs/toolkit';

import questionnaireReducer from '../../features/questionnaire/store/questionnaireSlice.ts';
import questionnairesReducer from '../../features/questionnaires/store/questionnairesSlice.ts';

export const rootReducer = combineReducers({
  questionnaires: questionnairesReducer,
  questionnaire: questionnaireReducer,
});

export type RootState = ReturnType<typeof rootReducer>;