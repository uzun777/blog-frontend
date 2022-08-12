import {Container} from "@mui/material";
import React from 'react';
import {PopularArticles} from "./PopularArticles";
import {SearchBlock} from "./SearchBlock";

export const Header = () => {
    return (<Container sx={{
        height: '100vh',
        display: 'flex',
        flexFlow: 'column'
    }}>
        <SearchBlock/>
        <PopularArticles/>
    </Container>);
};
