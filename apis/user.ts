import axios from 'axios';

const apiCall = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/user')
    return response;
  } catch (error) {
    throw error;
  }
};

export default apiCall;
