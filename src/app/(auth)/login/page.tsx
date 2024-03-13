'use client';
import styled from '@emotion/styled';

import { Black_Han_Sans } from 'next/font/google';
import { Button } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { requestPostAuthLogin } from '@/apis/auth';
import { useRouter } from 'next/navigation';

const blackHansSans = Black_Han_Sans({
    weight: '400',
    subsets: ['latin'],
});

const ConfirmButton = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '330px',
    height: '40px',
    borderRadius: '7px',
    color: 'white',
    fontSize: '16px',
    fontFamily: ['Nanum Gothic'],
    fontWeight: '700',
    backgroundColor: '#c91725',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#c91725',
    },
};

type UserInfo = {
    email: string;
    password: string;
};

export default function Login() {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: '',
        password: '',
    });
    const [isValid, setIsValid] = useState<Boolean>(false);
    const router = useRouter();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsValid(true);
    };

    const onClickLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const data = userInfo;

        try {
            const res = await requestPostAuthLogin(data);
            if (res.status === 200) {
                const { accessToken, refreshToken, name } = res.data;

                sessionStorage.setItem(
                    'accessToken',
                    JSON.stringify(accessToken),
                );
                sessionStorage.setItem(
                    'refreshToken',
                    JSON.stringify(refreshToken),
                );

                alert('어서오세요!' + name + '님!');

                router.push('/board');
            }
            //세션스토리지에 토큰 저장
        } catch (err) {
            alert(
                '로그인ID와 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.',
            );
            console.log(err);
        }
    };
    return (
        <Container>
            <PatternBox></PatternBox>
            <LoginBox>
                <TitleBox>
                    <Logo src="/image/logo.png"></Logo>
                    <Title className={blackHansSans.className}>
                        Checracker!
                    </Title>
                </TitleBox>
                <InputBox>
                    <Input
                        placeholder="이메일을 입력해주세요"
                        onChange={onChangeHandler}
                        value={userInfo.email}
                        name="email"
                    />
                    {isValid && (
                        <Input
                            placeholder="비밀번호를 입력해 주세요"
                            onChange={onChangeHandler}
                            type={'password'}
                            value={userInfo.password}
                            name="password"
                        />
                    )}
                    <Button
                        sx={ConfirmButton}
                        onClick={isValid ? onClickLogin : onClickHandler}
                    >
                        {`${isValid ? '로그인하기' : '시작하기'}`}
                    </Button>
                </InputBox>

                <SocialBox>
                    <Image
                        width={100}
                        height={30}
                        src="/image/social.png"
                        style={{ marginTop: '50px' }}
                        alt="social"
                    ></Image>
                </SocialBox>
            </LoginBox>
        </Container>
    );
}

const Logo = styled.img``;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;
const Title = styled.div`
    font-size: 65px;
    font-weight: 800;
`;
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
    gap: 20px;
    font-size: 16px;
`;
const Input = styled.input`
    width: 330px;
    height: 40px;
    text-align: center;

    border: 1px solid #d3d3d3;
    border-radius: 7px;
    &::placeholder {
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #adadad;
    }
`;
const SocialBox = styled.div``;
// const ConfirmButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 330px;
//   height: 40px;
//   border-radius: 7px;
//   color: white;
//   font-family: "Nanum Gothic", sans-serif;
//   background-color: #c91725;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// `;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.4;
`;

const PatternBox = styled.div`
    display: flex;
    width: 100%;
    flex: 0.6;
    background-image: url('/image/pattern.svg');
    background-size: 18.5%;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh; /* 뷰포트 높이로 설정 */

    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex: 1;
`;
