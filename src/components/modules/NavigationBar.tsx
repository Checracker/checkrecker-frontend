'use client';

import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import MenuTab from '@/components/atoms/MenuTab/MenuTab';
import { Black_Han_Sans } from 'next/font/google';
import Link from 'next/link';

type Props = {};

const blackHansSans = Black_Han_Sans({
    weight: '400',
    subsets: ['latin'],
});

const NavigationBar = (props: Props) => {
    return (
        <Container>
            <UserBox>
                <UserImageBox>
                    <Image
                        src={'/image/logo.png'}
                        width={60}
                        height={60}
                        alt="profile"
                    />
                </UserImageBox>
                <UserNickname className={blackHansSans.className}>
                    체크래커린 님
                </UserNickname>
            </UserBox>
            <MenuBox>
                <MenuTab imgSrc="/image/icons/home.svg" alt="home" name="홈" />
                <StyledLink href={'/board'}>
                    <MenuTab
                        imgSrc="/image/icons/board.svg"
                        alt="board"
                        name="보드"
                    />
                </StyledLink>
                <MenuTab
                    imgSrc="/image/icons/calendar.svg"
                    alt="calendar"
                    name="캘린더 회고"
                />
                <MenuTab
                    imgSrc="/image/icons/settings.svg"
                    alt="settings"
                    name="설정"
                />
                <MenuTab
                    imgSrc="/image/icons/notice.svg"
                    alt="notice"
                    name="공지"
                />
                <MenuTab
                    imgSrc="/image/icons/bin.svg"
                    alt="bin"
                    name="휴지통"
                />
                <MenuTab
                    imgSrc="/image/icons/developers.svg"
                    alt="developers"
                    name="제작자"
                />
            </MenuBox>
            <SearchBox>
                <SearchIconBox>
                    <Image
                        src={'/image/icons/search.svg'}
                        width={30}
                        height={30}
                        alt="search"
                    />
                </SearchIconBox>
            </SearchBox>
        </Container>
    );
};

export default NavigationBar;

const Container = styled.div`
    width: 100%;
    height: 120px;
    padding: 4px 21px;
    background-color: #c91725;
    box-sizing: border-box;
    color: white;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 3fr 1fr; /* 3개의 열로 분할 */
`;

const UserBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 12px;
`;
const UserImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 100px;
    box-sizing: border-box;
    padding: 5px;
    background-color: white;
`;
const UserNickname = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    vertical-align: middle;
    line-height: 1;
    margin-top: 5px;
    box-sizing: border-box;
`;

const MenuBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
`;

const SearchBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 13px;
`;

const SearchIconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 55px;
    height: 55px;
    box-sizing: border-box;
    border-radius: 100px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
