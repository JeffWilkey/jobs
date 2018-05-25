import axios from 'axios';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from './types.js';

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
  search: 'code',
  markdown: true
};

const buildJobsUrl = (lat, long) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, lat, long });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = ({ latitude, longitude }, callback) => async dispatch => {
  try {
    const url = buildJobsUrl(latitude, longitude);
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (err) {
    console.error(err);
  }
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};

export const clearLikedJobs = () => {
  return {
    type: CLEAR_LIKED_JOBS
  };
};
