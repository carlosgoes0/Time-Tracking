import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66717d38e083e62ee43bd274.mockapi.io/employee',
});

const fetchData = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados: ' + error.message);
  }
};

const deleteData = async (idEmployee) => {
  try {
    await api.delete(`/${idEmployee}`);
  } catch (error) {
    throw new Error('Erro ao deletar dados: ' + error.message);
  }
};

const postData = async (data) => {
  try {
    const response = await api.post('/', data);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao postar dados: ' + error.message);
  }
};

const putData = async (id, data) => {
  try {
    const response = await api.put(`/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar dados: ' + error.message);
  }
};

export default { fetchData, deleteData, postData, putData };
