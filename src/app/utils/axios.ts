import axios from "axios";

export const client = axios.create({
    baseURL:process.env.HOST,
    timeout: 3000, 
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});