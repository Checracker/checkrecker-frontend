import axios from 'axios';

export const client = axios.create({
    baseURL: `http://${process.env.NEXT_PUBLIC_HOST}`,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
});
