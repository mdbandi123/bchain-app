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
import { useEffect, useState } from 'react';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyIcon from '@mui/icons-material/Key';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

import { ethers } from "ethers";
import ABI from '../ABI';

function Payment() {
    const { darkMode, primaryColor, secondaryColor, backgroundColor } = useStore();

    const [balance, setBalance] = useState();
    const [numBikes, setNumBikes] = useState();
    const [hours, setHours] = useState();
    const [totalRents, setTotalRents] = useState();

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    

    const contract = new ethers.Contract(import.meta.env.VITE_CONTRACT_ADDRESS, ABI, signer);

    useEffect(()=>{
        const getBalance = async() => {
            const balance = await provider.getBalance(import.meta.env.VITE_CONTRACT_ADDRESS);
            const formattedBalance = ethers.utils.formatEther(balance);
            console.log(balance);
            console.log(formattedBalance);
            setBalance(formattedBalance);
        }

        const getNumBikes = async() => {
            const num = await contract.getNumOfBikes();
            const formattedNum = num.toNumber();
            console.log("inside",formattedNum);
            setNumBikes(formattedNum);
        }

        const getTotalHours= async() => {
            const num = await contract.getTotalHours();
            const formattedNum = num.toNumber();
            setHours(formattedNum);
        }

        const getBikesRented= async() => {
            const num = await contract.getTotalRents();
            const formattedNum = num.toNumber();
            setTotalRents(formattedNum);
        }

        getBalance();
        getNumBikes();
        getTotalHours();
        getBikesRented();


    },[])

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
        <Styled.Primary sx={style.payment_text} text="Payment" variant='h4' />
        <Grid2 container spacing={1}>
                <Grid2 item xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Card sx={style.payment_container}>
                        <Stack direction='column' alignItems='center' spacing={1}>
                            <Box>
                               <MonetizationOnIcon sx={[style.payment_textAlignment, style.payment_icon]} /> 
                            </Box>
                            <Box>
                                <Typography sx={[style.payment_textAlignment]} variant='h4'>
                                    {balance}
                                </Typography>
                            </Box>
                            <Box>
                                <Styled.Secondary sx={[style.payment_textAlignment]} text='Total Earnings' variant='h6' />
                            </Box>
                        </Stack>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Card sx={style.payment_container}>
                        <Stack direction='column' alignItems='center' spacing={1}>
                            <Box>
                            <AccessTimeIcon sx={[style.payment_textAlignment, style.payment_icon]} /> 
                            </Box>
                            <Box>
                                <Typography sx={[style.payment_textAlignment]} variant='h4'>
                                    {hours}
                                </Typography>
                            </Box>
                            <Box>
                                <Styled.Secondary sx={[style.payment_textAlignment]} text='Total Hours Rented' variant='h6' />
                            </Box>
                        </Stack>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Card sx={style.payment_container}>
                        <Stack direction='column' alignItems='center' spacing={1}>
                            <Box>
                            <KeyIcon sx={[style.payment_textAlignment, style.payment_icon]} /> 
                            </Box>
                            <Box>
                                <Typography sx={[style.payment_textAlignment]} variant='h4'>
                                    {totalRents}
                                </Typography>
                            </Box>
                            <Box>
                                <Styled.Secondary sx={[style.payment_textAlignment]} text='Total Bikes Rented' variant='h6' />
                            </Box>
                        </Stack>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Card sx={style.payment_container}>
                        <Stack direction='column' alignItems='center' spacing={1}>
                            <Box>
                            <PedalBikeIcon sx={[style.payment_textAlignment, style.payment_icon]} />  
                            </Box>
                            <Box>
                                <Typography sx={[style.payment_textAlignment]} variant='h4'>
                                    {numBikes}
                                </Typography>
                            </Box>
                            <Box>
                                <Styled.Secondary sx={[style.payment_textAlignment]} text='Total E-Bikes' variant='h6' />
                            </Box>
                        </Stack>
                    </Card>
                </Grid2>
        </Grid2>
    </FadeIn>
    );
}

export default Payment;