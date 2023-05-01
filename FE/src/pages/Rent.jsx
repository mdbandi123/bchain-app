import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store';
import eBikeList from '../data/ebike';
import FadeIn from '../animation/FadeIn';
import Styled from '../custom/Typography';
import { Card, CardContent, CardMedia } from '@mui/material/';
import { Box, Button, CardActionArea, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Modal from '../components/Modal';
import ErrorSnackbar from '../components/ErrorSnackbar';
import ReturnModal from '../components/ReturnModal';

import { ethers } from "ethers";
import ABI from '../ABI';

function Rent() {
    const { darkMode, primaryColor, secondaryColor, backgroundColor } = useStore();
    const [search, setSearch] = useState('');

    const [bikeArray, setBikeArray] = useState([]);

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()


    const contract = new ethers.Contract(import.meta.env.VITE_CONTRACT_ADDRESS, ABI, signer);


    useEffect(()=>{
        const connectWallet = async() => {
            await provider.send("eth_requestAccounts", []);
        }

        const getBikesArray = async() => {
            const bikesArray1 = await contract.getBikes();
            const x = [...bikesArray1];
            setBikeArray(x);
        }

        connectWallet()
            .catch(console.error);

        
        getBikesArray();
   
        
    },[bikeArray])

    const style = {
        search: {
            mb: 2
        },
        rent_text: {
            mb: 2
        },
        rent_card: {
            maxWidth: 290
        },
        rent_otherInfo: {
            fontSize: '0.9em'
        },
        rent_perHr: {
            mt: 2
        }
    }

    return (
        <FadeIn>
            <Styled.Primary sx={style.rent_text} text='E-Bikes' variant='h4'/>
            <Box sx={style.search}>
                <Box>
                    <TextField id='outlined-basic' color={secondaryColor} label='Search E-Bike' variant='outlined' onChange={(e) => setSearch(e.target.value)}
                        defaultValue={search}
                        value={search}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Button variant='contained' color={secondaryColor} onClick={() => { setSearch('') }} >
                                        Clear
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
            <Grid2 container spacing={3}>
                {bikeArray.filter((list) => {
                    return search.toLowerCase() === '' ? list : list.name.toLowerCase().includes(search);
                }).map((list) => (
                    <Grid2 item xs={12} sx={12} md={4} lg={3} xl={3} key={list.name}>
                        <AnimatePresence>
                            <motion.div key={list.name} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }} exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}>
                                <Card sx={style.rent_card}>
                                    {
                                        list.isAvailable ? 
                                        <Modal name={list.name} img={list.img} cost={list.costPerHour.toNumber()}>
                                            <CardMedia component='img' height='220' image={list.img} alt={list.name} />
                                            <CardContent>
                                                <Stack direction='column' spacing={0}>
                                                    <Box>
                                                        <Typography gutterBottom variant='h6' component='div'>
                                                            {list.name}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Range Power: {list.rangePower.toNumber()}km
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Max Speed: {list.maxSpeed.toNumber()}Km/h
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Battery Capacity: {list.batteryCapacity.toNumber()}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Stack direction='row' spacing={1}>
                                                            <Box>
                                                                <Styled.Primary sx={style.rent_perHr} text={`${ethers.utils.formatEther(list.costPerHour.toNumber())} ETH per hr`} variant='body1' />
                                                            </Box>
                                                            <Box>
                                                                {
                                                                    list.isAvailable ? <> </> :
                                                                        <Typography sx={style.rent_perHr} variant='body1' color='text.secondary'>
                                                                            (Not Available)
                                                                        </Typography>
                                                                }
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                </Stack>
                                            </CardContent>
                                        </Modal>
                                        :
                                        <ReturnModal model={list.name}>
                                            <CardMedia component='img' height='220' image={list.img} alt={list.name} />
                                            <CardContent>
                                                <Stack direction='column' spacing={0}>
                                                    <Box>
                                                        <Typography gutterBottom variant='h6' component='div'>
                                                            {list.name}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Range Power: {list.rangePower.toNumber()}km
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Max Speed: {list.maxSpeed.toNumber()}Km/h
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Battery Capacity: {list.batteryCapacity.toNumber()}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Stack direction='row' spacing={1}>
                                                            <Box>
                                                                <Styled.Primary sx={style.rent_perHr} text={`${ethers.utils.formatEther(list.costPerHour.toNumber())} ETH per hr`} variant='body1' />
                                                            </Box>
                                                            <Box>
                                                                {
                                                                    list.isAvailable ? <> </> :
                                                                        <Typography sx={style.rent_perHr} variant='body1' color='text.secondary'>
                                                                            (Not Available)
                                                                        </Typography>
                                                                }
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                </Stack>
                                            </CardContent>
                                        </ReturnModal>
                                    }
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </Grid2>  
                ))}
                
            </Grid2>
        </FadeIn>
    )
}

export default Rent;
