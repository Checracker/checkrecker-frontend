"use client"

import NavigationBar from "@/components/modules/NavigationBar";
import { height } from "@mui/system";
import React, { Children } from "react";
import styled from "styled-components";

type Props = {};

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavigationBar/>
            <Container>{children}</Container>
        </div>
    );
}

const Container = styled.div`
    height: calc(100vh - 192px); //메뉴바 120, 화살표 52px
`