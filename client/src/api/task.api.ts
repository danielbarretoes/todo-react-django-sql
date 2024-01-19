import axios from "axios";

const taskApi = axios.create({
  baseURL:
    "https://danielbarretoes-django-rest-api-crud.onrender.com/api/projects/",
});

export const getAllTasks = () => {
  return taskApi.get("/");
};

export const getTask = (id: any) => {
  return taskApi.get(`/${id}`);
};

export const createTask = (task: any) => {
  return taskApi.post("/", task);
};

export const deleteTask = (id: any) => {
  return taskApi.delete(`/${id}`);
};

export const updateTask = (id: any, task: any) => {
  return taskApi.patch(`/${id}`, task);
};
