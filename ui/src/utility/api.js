//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:9000";

/**
 * Sends a login request to the api for a user with the provided username and password.
 *
 * @async
 * @function
 * @param {Object} data - An object containing the user's login credentials.
 * @param {string} data.username - The user's username.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} - A promise that resolves with the user's data.
 * @throws {Error} - Throws an error if there was an issue with the login request.
 */
export const login = async (data) => {
  const { username, password } = data;

  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: new Headers({
      Authorization: `Basic ${btoa(`${username}:${password}`)}`, //btoa is only deprecated in Node.js not in browser environments!
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

/**
 * Sends a registration request to the api for a user with the provided data.
 *
 * @async
 * @function
 * @param {Object} data - An object containing the user's data require to create an account.
 * @param {string} data.username - The user's username
 * @param {string} data.password - The user's password
 * @param {*} data.[...] - Any additional user data required for account creation
 * @returns {Promise<Object>} - A promise that resolves with the user's data.
 * @throws {Error} - Throws an error if there was an issue with the login request.
 */
export const register = async (data) => {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

export const getUserProfile = async (username) => {
  console.log(`${baseUrl}/user/${username}`);
  const response = await fetch(`${baseUrl}/user/username/${username}`, {
    method: "GET",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

export const getUser = async (token) => {
  const response = await fetch(`${baseUrl}/user/token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};

export const updatePassword = async (token, data) => {
  const response = await fetch(`${baseUrl}/auth/updatePassword`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Status Code: ${response?.status} - ${responseData?.message}`
    );
  }

  return responseData;
};
