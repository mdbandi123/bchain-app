import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import FadeIn from '../animation/FadeIn';
import Styled from '../custom/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Button, CardMedia, IconButton, Stack, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, pink, purple, blue, teal, green, yellow, orange, grey } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Home() {
    const { darkMode, primaryColor, backgroundColor } = useStore();
    const navigate = useNavigate();

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: backgroundColor == 'default' ? (darkMode ? '#050505' : '#f5f5f5') :
                         backgroundColor == 'deepblue' ? (darkMode ? '#000114' : '#f5f5f5') :
                         backgroundColor == 'plum' ? (darkMode ? '#090014' : '#f5f5f5') :
                         backgroundColor == 'forestdark' ? (darkMode ? '#010a00' : '#f5f5f5') :
                         backgroundColor == 'darkrose' ? (darkMode ? '#1a000f' : '#f5f5f5') :
                         (darkMode ? '#050505' : '#f5f5f5'),
                paper: backgroundColor == 'default' ? (darkMode ? '#050505' : '#ffffff') :
                       backgroundColor == 'deepblue' ? (darkMode ? '#000114' : '#f5f5f5') :
                       backgroundColor == 'plum' ? (darkMode ? '#090014' : '#f5f5f5') :
                       backgroundColor == 'forestdark' ? (darkMode ? '#010a00' : '#f5f5f5') :
                       backgroundColor == 'darkrose' ? (darkMode ? '#1a000f' : '#f5f5f5') :
                       (darkMode ? '#050505' : '#f5f5f5'),
            },
            cherry: {
                main: darkMode ? red[400] : red[800],
                contrastText: darkMode ? grey[900] : grey[50],
            },
            rose: {
                main: darkMode ? pink[200] : pink[600],
                contrastText: darkMode ? grey[900] : grey[50],
            },
            lavender: {
                main: darkMode ? purple[200] : purple[800],
                contrastText: darkMode ? grey[900] : grey[50],
            },
            navy: {
                main: darkMode ? blue[300] : blue[800],
                contrastText: darkMode ? grey[900] : grey[50],
            },
            teal: {
                main: darkMode ? teal[200] : teal[700],
                contrastText: darkMode ? grey[900] : grey[50],
            },
            emerald: {
                main: darkMode ? green[400] : green[800],
                contrastText: darkMode ? grey[900] : grey[50],
            },
            amber: {
                main: darkMode ? yellow[400] : yellow[800],
                contrastText: darkMode ? grey[900] : grey[50],
            },
            apricot: {
                main: darkMode ? orange[300] : orange[800],
                contrastText: darkMode ? grey[900] : grey[50],
            }
        }
    });

    const style = {
        home_container: {
            height: '100vh',
            width: '100vw', 
            pl: 7,
            pt: 4 
        },
        home_container_leftComponent: {
            pr: 6,
            pl: 6,
            maxWidth: { lg: '50%', xl: '50%', md: '80%', sm: '90%', xs: '90%' }
        },
        home_container_leftComponent_info: {
            mt: 5
        },
        home_container_leftComponent_icon: {
            fontSize: '1.3em'
        },
        home_container_rightComponent: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        home_container_rightComponent_image: {
            maxWidth: 500
        }
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <FadeIn>
                <Grid2 sx={style.home_container} container alignItems='center' spacing={1}>
                    <Grid2 sx={style.home_container_leftComponent} item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Styled.Primary text='E-Bike Rental' variant='h3' />
                        <Typography variant='h6' color='text.primary'>
                            Tagline for E-Bike Rental
                        </Typography>
                        <Typography sx={style.home_container_leftComponent_info} variant='body1' color='text.secondary'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque laboriosam a. Hic, autem ducimus. Quia aut doloribus dolore officia. Ea fuga reprehenderit vitae a ut minima nesciunt quos est.
                        </Typography>
                        <Button sx={style.home_container_leftComponent_info} variant='contained' color={primaryColor} onClick={() => navigate('/rent')}>
                            Start Renting E-Bike
                        </Button>
                        <Stack sx={style.home_container_leftComponent_info} direction='row' spacing={2}>
                            <Box>
                                <IconButton>
                                    <FacebookIcon sx={style.home_container_leftComponent_icon} color={primaryColor} />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton>
                                    <InstagramIcon sx={style.home_container_leftComponent_icon} color={primaryColor} />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton>
                                    <TwitterIcon sx={style.home_container_leftComponent_icon} color={primaryColor} />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2 sx={style.home_container_rightComponent} item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <CardMedia sx={style.home_container_rightComponent_image} component='img' image='src/images/bg1.png' />
                    </Grid2>
                </Grid2>
            </FadeIn>
        </ThemeProvider>
    );
}

export default Home;