import axios from 'axios';
import qs from 'qs';

import {
  FETCH_JOBS
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

export const fetchJobs = ({ latitude, longitude }) => async dispatch => {
  try {
    const url = buildJobsUrl(latitude, longitude);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
  } catch(err) {
    console.error(err);
  }
};