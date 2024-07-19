import CONFIG from './config';

const API_URLS = {
  HOME: `${CONFIG.API_ENDPOINT}list`,
  REVIEW: `${CONFIG.API_ENDPOINT}review`,
  DETAIL: (id) => `${CONFIG.API_ENDPOINT}detail/${id}?`,
};

export default API_URLS;
