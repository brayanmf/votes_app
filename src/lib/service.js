let baseUrl = "http://localhost:5000/candidatos";

export const getAll = () => {
  return fetch(baseUrl).then((res) => res.json());
};
