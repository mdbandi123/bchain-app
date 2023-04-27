import Styled from '../custom/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { grey } from '@mui/material/colors';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import React from 'react';
import useStore from '../store';
import { Box, Card, MenuItem, Stack, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import FadeIn from '../animation/FadeIn';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyIcon from '@mui/icons-material/Key';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

function Payment() {
    const { darkMode, primaryColor, secondaryColor, backgroundColor } = useStore();

    const admin = [
        {
            total: '₱30,000',
            title: 'Total Earnings',
            year: '2023'
        },
        {
            total: '4,543',
            title: 'Total Hours',
            year: '2023'
        },
        {
            total: '542',
            title: 'Total Rents',
            year: '2023'
        },
        {
            total: '15',
            title: 'Total E-Bikes',
            year: '2023'
        }
    ]

    const style = {
        payment_text: {
            mb: 2
        },
        payment_container: {
            pt: 4,
            pb: 4,
            pl: 4,
            pr: 6
        },
        payment_container_text: {
            mb: 2,
            ml: 2
        },
        payment_textAlignment: {
            textAlign: 'center',
        },
        payment_icon: {
            fontSize: '3em',
        }
    }

    return (
        <FadeIn>
            <Styled.Primary sx={style.payment_text} text='Payment' variant='h4' />
            <Grid2 container spacing={1}>
                {admin.map((admin, index) => (
                    <Grid2 item xs={12} sm={12} md={6} lg={4} xl={4} >
                        <Card sx={style.payment_container}>
                            <Stack direction='column' alignItems='center' spacing={1}>
                                <Box>
                                    {index === 0 ? <MonetizationOnIcon sx={[style.payment_textAlignment, style.payment_icon]} /> : 
                                     index === 1 ? <AccessTimeIcon sx={[style.payment_textAlignment, style.payment_icon]} /> : 
                                     index === 2 ? <KeyIcon sx={[style.payment_textAlignment, style.payment_icon]} /> : 
                                     index === 3 ? <PedalBikeIcon sx={[style.payment_textAlignment, style.payment_icon]} /> : 
                                     <MonetizationOnIcon sx={[style.payment_textAlignment, style.payment_icon]} />
                                    }
                                </Box>
                                <Box>
                                    <Typography sx={[style.payment_textAlignment]} variant='h4'>
                                        {admin.total}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Styled.Secondary sx={[style.payment_textAlignment]} text={admin.title} variant='h6' />
                                </Box>
                                <Box>
                                    <Typography sx={[style.payment_textAlignment]} variant='body1' color='text.secondary'>
                                        {admin.year}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </FadeIn>
    );
}

export default Payment;