import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Box, Button, Card, IconButton, Paper, styled, Typography} from "@mui/material";
import React from 'react';
import {theme} from "../../index";

export const PopularArticles = () => {

    return (<StyledCard>
        <StyledBox>
            <StyledArrowBackIosNewIcon sx={{background: theme.palette.primary.main}}>
                <ArrowBackIosNewIcon fontSize={'large'}/>
            </StyledArrowBackIosNewIcon>
            <StyledArrowForwardIosIcon sx={{background: theme.palette.secondary.main}}>
                <ArrowForwardIosIcon fontSize={'large'}/>
            </StyledArrowForwardIosIcon>
        </StyledBox>
        <StyledPaper>
            <Typography fontSize={'16px'} fontWeight={400} fontFamily={'Open Sans'} color={'primary'}>
                Travels
            </Typography>
            <Typography fontSize={'64px'} fontWeight={700} lineHeight={'80px'} fontFamily={'Cormorant Garamond'}
                        color={'primary'} mt={'9px'}>
                When Is The Best Time of Year To Visit Japan?
            </Typography>
            <Typography fontSize={'21px'} fontWeight={400} fontFamily={'Open Sans'} color={'primary.light'}
                        mt={'12px'}>
                The good news for travelers is that there is no single best time of year to travel to Japan...
            </Typography>
            <Button variant={'contained'} sx={{margin: 'auto auto 0 0'}}>
                Read more
            </Button>
        </StyledPaper>
    </StyledCard>);
};

const StyledCard = styled(Card)(() => ({
    height: '50vh',
    width: '65%',
    background: 'white',
    margin: 'auto auto 0 32px',
    position: 'relative',
    overflow: 'visible',
    border: 'none',
    boxShadow: 'none'
}))

const StyledPaper = styled(Paper)(() => ({
    display: 'flex',
    flexFlow: 'column',
    padding: '80px 50px 60px 50px',
    height: '100%',
    border: 'none',
    boxShadow: 'none'
}))

const StyledBox = styled(Box)(() => ({
    position: 'absolute', right: '-51px',
}))

const StyledArrowBackIosNewIcon = styled(IconButton)(({theme}) => ({
    borderRadius:0,
    color: theme.palette.secondary.main, '&:hover': {
        color: theme.palette.primary.main, background: 'rgba(0, 0, 0, 0.05)'
    },
}));

const StyledArrowForwardIosIcon = styled(IconButton)(({theme}) => ({
    borderRadius:0,
    color: theme.palette.primary.main, '&:hover': {
        color: theme.palette.secondary.main, background: 'rgba(0, 0, 0, 0.5)'
    }
}));
