import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {Container, IconButton, styled, Typography} from "@mui/material";
import React from 'react';

export const SearchBlock = () => {
    return (<StyledContainer>
        <IconButton>
            <MenuIcon color={'primary'}/>
        </IconButton>
        <Typography component={'p'} fontWeight={500} m={'auto'}>
            Personal Blog
        </Typography>
        <IconButton>
            <SearchIcon color={'primary'}/>
        </IconButton>
    </StyledContainer>);
};

const StyledContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    color: theme.palette.primary.main,
    height: 40,
    alignItems: 'center'
}))
