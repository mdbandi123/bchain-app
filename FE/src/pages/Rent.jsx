import { useState } from 'react'
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

function Rent() {
    const { darkMode, primaryColor, secondaryColor, backgroundColor } = useStore();
    const [search, setSearch] = useState('');

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
                {eBikeList.filter((list) => {
                    return search.toLowerCase() === '' ? list : list.modelName.toLowerCase().includes(search);
                }).map((list) => (
                    <Grid2 item xs={12} sx={12} md={4} lg={3} xl={3}>
                        <AnimatePresence>
                            <motion.div key={list.modelName} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }} exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}>
                                <Card sx={style.rent_card}>
                                    {
                                        list.available ? 
                                        <Modal name={list.modelName} img={list.img}>
                                            <CardMedia component='img' height='220' image={list.img} alt={list.modelName} />
                                            <CardContent>
                                                <Stack direction='column' spacing={0}>
                                                    <Box>
                                                        <Typography gutterBottom variant='h6' component='div'>
                                                            {list.modelName}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Range Power: {list.rangePower}km
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Max Speed: {list.maxSpeed}Km/h
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Battery Capacity: {list.batteryCapacity}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Stack direction='row' spacing={1}>
                                                            <Box>
                                                                <Styled.Primary sx={style.rent_perHr} text={`₱${list.perHr} per hr`} variant='body1' />
                                                            </Box>
                                                            <Box>
                                                                {
                                                                    list.available ? <> </> :
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
                                        <ReturnModal model={list.modelName}>
                                            <CardMedia component='img' height='220' image={list.img} alt={list.modelName} />
                                            <CardContent>
                                                <Stack direction='column' spacing={0}>
                                                    <Box>
                                                        <Typography gutterBottom variant='h6' component='div'>
                                                            {list.modelName}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Range Power: {list.rangePower}km
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Max Speed: {list.maxSpeed}Km/h
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={style.rent_otherInfo} variant='body2' color='text.secondary'>
                                                            Battery Capacity: {list.batteryCapacity}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Stack direction='row' spacing={1}>
                                                            <Box>
                                                                <Styled.Primary sx={style.rent_perHr} text={`₱${list.perHr} per hr`} variant='body1' />
                                                            </Box>
                                                            <Box>
                                                                {
                                                                    list.available ? <> </> :
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
