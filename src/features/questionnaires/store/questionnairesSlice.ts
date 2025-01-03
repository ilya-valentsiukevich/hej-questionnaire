import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_PAGE_SIZE } from '../../../shared/constants.ts';
import { ErrorCode } from '../../../shared/errors.ts';
import { QuestionnaireErrorMessage } from '../../questionnaire/domain/ErrorMessages.ts';
import { fetchAllQuestionnaires } from '../data/repositories/questionnaireRepository.ts';
import { QuestionnaireFilter } from '../domain/models/Filter.ts';
import { Questionnaire } from '../domain/models/Questionnaire.ts';

interface QuestionnairesState {
  items: Questionnaire[];
  total: number;
  filter: QuestionnaireFilter;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionnairesState = {
  items: [],
  total: 0,
  filter: {
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    searchTerm: '',
  },
  loading: false,
  error: null,
};

export const fetchQuestionnaires = createAsyncThunk(
  'questionnaires/fetchQuestionnaires',
  async (filter: QuestionnaireFilter, { rejectWithValue }) => {
    try {
      const data = await fetchAllQuestionnaires(filter);
      return { ...data, filter };
    } catch {
      return rejectWithValue({
        code: ErrorCode.UNKNOWN_ERROR,
        message: QuestionnaireErrorMessage[ErrorCode.UNKNOWN_ERROR],
      });
    }
  },
);

const questionnairesSlice = createSlice({
  name: 'questionnaires',
  initialState,
  reducers: {
    updateFilter(state, action: PayloadAction<Partial<QuestionnaireFilter>>) {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionnaires.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionnaires.fulfilled, (state, action) => {
        state.loading = false;
        const { items, total, filter } = action.payload;
        state.items = items;
        state.total = total;
        state.filter = filter;
      })
      .addCase(fetchQuestionnaires.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateFilter } = questionnairesSlice.actions;
export default questionnairesSlice.reducer;