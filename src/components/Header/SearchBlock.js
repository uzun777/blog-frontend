import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {Container, IconButton, Typography} from "@mui/material";
import React from 'react';

export const SearchBlock = () => {
    return (<Container sx={{
        display: 'flex', height: 40, alignItems: 'center'
    }}>
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <Typography component={'p'} fontWeight={500} sx={{
            margin: 'auto',
        }}>
            Personal Blog
        </Typography>
        <IconButton>
            <SearchIcon/>
        </IconButton>
    </Container>);
};
