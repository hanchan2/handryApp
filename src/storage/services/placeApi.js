import apisauce from 'apisauce';

const create = (baseURL = 'https://63025017c6dda4f287b79680.mockapi.io/places/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });

  const setAuthToken = userAuth => api.setHeader('X-Auth-Token', userAuth);
  const setLanguage = () => api.setHeader('Accept-Language', 'id');
  const removeAuthToken = () => api.setHeader('Authorization', '');

  const getPlaces = async() => await api.get('/');

  return {
    api,
    setAuthToken,
    setLanguage,
    removeAuthToken,
    getPlaces,
  };
};

export default create();