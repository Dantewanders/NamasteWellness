/**
 * Checks if a user is currently logged in.
 *
 * @function
 * @returns {boolean} - True if a session token exists, otherwise false.
 */
export const isUserLoggedIn = () => {
  const token = localStorage.getItem("session_token");
  return token ? true : false;
};

/**
 * Retrieves the current session token.
 *
 * @function
 * @returns {string} - A session token as a string.
 */
export const getToken = () => {
  const token = localStorage.getItem("session_token");
  return token;
};

/**
 * Sets the session token in local storage.
 *
 * @function
 * @param {string} token - The session token to set.
 * @returns {string} - The session token that was set.
 * @throws {Error} - Throws an error if the token argument is not a string.
 */
export const setToken = (token) => {
  if (typeof token !== "string") {
    throw new Error("token must be type: 'string'");
  }
  localStorage.setItem("session_token", token);
  return token;
};

/**
 * Removes the current session token from local storage.
 *
 * @function
 * @returns {boolean} - Always returns true.
 */
export const clearToken = () => {
  localStorage.removeItem("session_token");
  return true;
};
// randomizes an array
export const shuffle = (array) => array.sort((a, b) => 0.5 - Math.random());
