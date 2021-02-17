import axios from 'axios';

export const fetchTools = () => new Promise((resolve, reject) => {
  const msg = 'Couldn\'t fetch tools';
  axios.get('http://localhost:3000/tools')
    .then((response) => resolve(response.data))
    .catch(() => reject(msg));
});

export const fetchToolsByTitle = (q) => new Promise((resolve, reject) => {
  const msg = `Couldn\'t fetch tools`;
  axios.get(`http://localhost:3000/tools?q=${q}`)
    .then((response) => resolve(response.data))
    .catch(() => reject(msg));
});

export const fetchToolsByTagsLike = (tagsLike) => new Promise((resolve, reject) => {
  const msg = 'Couldn\'t fetch tools';
  axios.get(`http://localhost:3000/tools?tags_like=${tagsLike}`)
    .then((response) => resolve(response.data))
    .catch(() => reject(msg));
});

export const fetchCreateTool = (tool) => new Promise((resolve, reject) => {
  const msg = 'Couldn\'t create tools';
  axios.post(`http://localhost:3000/tools`, tool)
    .then((response) => resolve(response.data))
    .catch(() => reject(msg));
});

export const fetchDeleteTool = (id) => new Promise((resolve, reject) => {
  const msg = 'Couldn\'t delete tools';
  const messageOK = 'Excluído com sucesso';
  axios.delete(`http://localhost:3000/tools/${id}`)
    .then(() => resolve(messageOK))
    .catch(() => reject(msg));
});
