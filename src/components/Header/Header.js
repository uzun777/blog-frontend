import {Container} from "@mui/material";
import React from 'react';
import {SearchBlock} from "./SearchBlock";

export const Header = () => {
    return (<Container sx={{
        height: '100vh',
    }}>
        <SearchBlock/>
    </Container>);
};
