import { USER_ADD_JOB } from "../constant/constant";

export const userJob = (jobData) => {
  return {
    type: USER_ADD_JOB,
    payload: jobData,
  };
};
