import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzJmMTNjNGMyODc3MGUwMGE5ZDNkOGY1ZWQ3MDIzOSIsIm5iZiI6MTc0NDk3MzI1NS42MDA5OTk4LCJzdWIiOiI2ODAyMmRjNzkxZDNmNjVjNWZhZDA0YzQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UcUzQSVMNntyRIKkrUWnzvVC7rCjBgek7LYmQ58mmz8'
    },
});

export default instance;