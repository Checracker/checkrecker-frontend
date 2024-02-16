import axios from "axios";

export const client = axios.create({
    baseURL:"http://43.200.40.139:8080/",
    timeout: 3000, 
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});