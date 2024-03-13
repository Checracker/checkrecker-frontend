import { client } from '@/app/utils/axios';
import { AxiosPromise } from 'axios';

export interface JWTToken {
    token: string;
    createdAt: string;
    expiredAt: string;
}

export interface ServerResponseLogin {
    email: string;
    name: string;
    nickname: string;
    profileImage: string;
    accessToken: JWTToken;
    refreshToken: JWTToken;
}

export interface requsestPostAuthLoginPayload {
    email: string;
    password: string;
}

export type AxiosServerResponse<T> = AxiosPromise<T>;

export const requestPostAuthLogin = async (
    payload: requsestPostAuthLoginPayload,
): AxiosPromise<ServerResponseLogin> => {
    const URL = `/v1/auth/sign-in/local`;

    const res = await client.post(URL, payload);

    return res;
};
