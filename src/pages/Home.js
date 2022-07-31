import {Box, Container} from "@mui/material";
import React from 'react';

export const Home = () => {
    return (<Container>
            <Box sx={{
                position: 'absolute',
                height: '100vh',
                width: '100%',
                zIndex: -1,
                top: 0,
                left: 0,
                background: 'url(./backgorund.jpg) no-repeat center center',
                backgroundSize: 'cover'
            }}/>
            <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}}/>
        </Container>);
};
