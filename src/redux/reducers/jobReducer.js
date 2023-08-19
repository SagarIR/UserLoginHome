import { USER_ADD_JOB } from "../constant/constant";

const initialState = {
  job: [],
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ADD_JOB:
      return {
        ...state,
        job: [...state.job, action.payload],
      };
    default:
      return state;
  }
};
