import axios from 'axios';

const signIn = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/signin', {
      email: email,
      password: password,
    });

    // Handle the API response here, e.g., set user state or redirect to a dashboard.
    return response.data; // Return any relevant data from the API response.
  } catch (error) {
    // Handle sign-in error, e.g., display an error message to the user.
    throw error; // Re-throw the error to be handled by the component.
  }
};

export default signIn;
