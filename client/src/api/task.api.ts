import axios from "axios";

export const getAllTasks = () => {
  return axios.get(
    "https://danielbarretoes-django-rest-api-crud.onrender.com/api/projects/"
  );
};
