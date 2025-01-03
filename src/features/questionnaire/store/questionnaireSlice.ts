import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_PAGE_SIZE } from '../../../shared/constants.ts';
import { ErrorCode } from '../../../shared/errors.ts';
import { fetchQuestionnaireById } from '../../questionnaires/data/repositories/questionnaireRepository.ts';
import { Questionnaire } from '../../questionnaires/domain/models/Questionnaire.ts';
import { fetchQuestionsByQuestionnaireId, submitAnswers } from '../data/repositories/questionsRepository.ts';
import {
  QuestionnaireErrorMessage,
  QuestionsErrorMessage,
  SubmitAnswersErrorMessage,
} from '../domain/ErrorMessages.ts';
import { Answers, Question } from '../domain/models/Question.ts';
import { loadAnswersFromStorage, saveAnswersToStorage } from '../utils/localStorageUtils';

interface QuestionsPagination {
  page: number;
  pageSize: number;
}

interface CustomError {
  code: ErrorCode;
  message: string;
}

interface QuestionnaireState {
  questionnaire: Questionnaire | null;
  questions: Question[];
  answers: Answers;
  totalQuestions: number;
  pagination: QuestionsPagination;
  loading: boolean;
  error: CustomError | null;
  submitSuccess: boolean;
}

const initialState: QuestionnaireState = {
  questionnaire: null,
  questions: [],
  answers: {},
  totalQuestions: 0,
  pagination: {
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  },
  loading: false,
  error: null,
  submitSuccess: false,
};

export const fetchQuestionnaireInfo = createAsyncThunk(
  'questionnaire/fetchQuestionnaireInfo',
  async (questionnaireId: string, { rejectWithValue }) => {
    try {
      const data = await fetchQuestionnaireById(questionnaireId);
      if (!data) {
        return rejectWithValue({
          code: ErrorCode.NOT_FOUND,
          message: QuestionnaireErrorMessage[ErrorCode.NOT_FOUND],
        });
      }

      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue({
          code: ErrorCode.LOAD_ERROR,
          message: QuestionnaireErrorMessage[ErrorCode.LOAD_ERROR],
        });
      }

      return rejectWithValue({
        code: ErrorCode.UNKNOWN_ERROR,
        message: QuestionnaireErrorMessage[ErrorCode.UNKNOWN_ERROR],
      });
    }
  },
);

export const fetchQuestions = createAsyncThunk(
  'questionnaire/fetchQuestions',
  async (
    { questionnaireId, page, pageSize }: { questionnaireId: string; page: number; pageSize: number },
    { rejectWithValue },
  ) => {
    try {
      return await fetchQuestionsByQuestionnaireId(questionnaireId, page, pageSize);
    } catch {
      return rejectWithValue({
        code: ErrorCode.UNKNOWN_ERROR,
        message: QuestionsErrorMessage[ErrorCode.UNKNOWN_ERROR],
      });
    }
  },
);

export const submitQuestionnaireAnswers = createAsyncThunk(
  'questionnaire/submitQuestionnaireAnswers',
  async (
    { questionnaireId, answers }: { questionnaireId: string; answers: Answers },
    { rejectWithValue },
  ) => {
    try {
      return await submitAnswers(questionnaireId, answers);
    } catch {
      return rejectWithValue({
        code: ErrorCode.UNKNOWN_ERROR,
        message: SubmitAnswersErrorMessage[ErrorCode.UNKNOWN_ERROR],
      });
    }
  },
);

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    clearQuestionnaireState(state) {
      state.questionnaire = null;
      state.questions = [];
      state.answers = {};
      state.submitSuccess = false;
      state.error = null;
      state.pagination = { page: 1, pageSize: DEFAULT_PAGE_SIZE };
      state.totalQuestions = 0;
    },

    setPage(state, action: PayloadAction<number>) {
      state.pagination.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pagination.pageSize = action.payload;
      state.pagination.page = 1;
    },
    setAnswer(state, action: PayloadAction<{ questionId: string; value: string }>) {
      const { questionId, value } = action.payload;
      state.answers[questionId] = value;
      if (state.questionnaire) {
        saveAnswersToStorage(state.questionnaire.id, state.answers);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionnaireInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.questionnaire = null;
        state.answers = {};
      })
      .addCase(fetchQuestionnaireInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.questionnaire = action.payload;
        state.answers = loadAnswersFromStorage(action.payload.id);
      })
      .addCase(fetchQuestionnaireInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as CustomError;
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.questions = [];
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload.items;
        state.totalQuestions = action.payload.total;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.totalQuestions = 0;
        state.error = action.payload as CustomError;
      })
      .addCase(submitQuestionnaireAnswers.pending, (state) => {
        state.loading = true;
        state.submitSuccess = false;
      })
      .addCase(submitQuestionnaireAnswers.fulfilled, (state) => {
        state.loading = false;
        state.submitSuccess = true;
      })
      .addCase(submitQuestionnaireAnswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as CustomError;
      });
  },
});

export const {
  clearQuestionnaireState,
  setPage,
  setPageSize,
  setAnswer,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;