const authToken = 'token';

export const getToken = () => window.localStorage.getItem(authToken);

export const saveToken = token => {
  if (!token) {
    return;
  }
  window.localStorage.setItem(authToken, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(authToken);
};

export default {
  getToken,
  saveToken,
  destroyToken,
};
