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

const themePalette = [
    { value: 'cherry', name: 'Cherry' },
    { value: 'rose', name: 'Rose' },
    { value: 'lavender', name: 'Lavender' },
    { value: 'navy', name: 'Navy' },
    { value: 'teal', name: 'Teal' },
    { value: 'emerald', name: 'Emerald' },
    { value: 'amber', name: 'Amber' },
    { value: 'apricot', name: 'Apricot' }
];

const bgPalette = [
    { value: 'default', name: 'Default', color: '#050505' },
    { value: 'deepblue', name: 'Deep Blue', color: '#000114' }, 
    { value: 'plum', name: 'Plum', color: '#090014' },
    { value: 'forestdark', name: 'Forest Dark', color: '#010a00' },
    { value: 'darkrose', name: 'Dark Rose', color: '#210013' },
];

function Settings() {
    const { darkMode, setDarkMode, primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, backgroundColor, setBackgroundColor } = useStore();

    const modeHandler = (e) => {
        setDarkMode(e.target.value);
    };

    const primaryHandler = (e) => {
        setPrimaryColor(e.target.value);
    };

    const secondaryHandler = (e) => {
        setSecondaryColor(e.target.value);
    };

    const backgroundHandler = (e) => {
        setBackgroundColor(e.target.value);
    };

    const style = {
        settings_text: {
            mb: 2
        },
        settings_container: {
            pt: 4,
            pb: 4,
            pl: 4,
            pr: 6
        },
        settings_container_text: {
            mb: 2,
            ml: 2
        },
        darkMode_icon: {
            fontSize: '1em'
        },
        darkMode_darkIcon: {
            color: darkMode ? grey[50] : grey[700]
        },
        color_textfield: {
            m: 2
        },
        color_textfield: {
            m: 2
        },
        color_icon: {
            fontSize: '1.4em',
            display: 'flex'
        }
    }

    const mode = [
        { value: true, name: 'Dark', icon: <Brightness7Icon sx={[style.darkMode_darkIcon, style.darkMode_icon]} /> },
        { value: false, name: 'Light', icon: <Brightness4Icon sx={style.darkMode_icon} color='amber' /> },
    ];

    return (
        <FadeIn>
            <Styled.Primary sx={style.settings_text} text='Settings' variant='h4' />
            <Card sx={style.settings_container}>
                <Typography sx={style.settings_container_text} variant='h5'>
                    Customization
                </Typography>
                <Grid2 container justifyContent='space-between' spacing={3}>
                    <Grid2 item xs={12} sx={12} md={6} lg={6} xl={6} >
                        <TextField fullWidth sx={style.color_textfield} helperText='Select Mode' label='Mode' defaultValue={darkMode} onChange={modeHandler} color={secondaryColor} select>
                            {mode.map((mode) => (
                                <MenuItem key={mode.value} value={mode.value}>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Box>
                                            {mode.icon}
                                        </Box>
                                        <Box>
                                            {mode.name}
                                        </Box>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid2>
                    <Grid2 item xs={12} sx={12} md={6} lg={6} xl={6}>
                        <TextField fullWidth sx={style.color_textfield} helperText='Select Your Favorite Color' label='Primary Color' defaultValue={primaryColor} onChange={primaryHandler} color={secondaryColor} select>
                            {themePalette.map((theme) => (
                                <MenuItem key={theme.value} value={theme.value}>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Box>
                                            <SquareRoundedIcon sx={style.color_icon} color={theme.value} />
                                        </Box>
                                        <Box>
                                            {theme.name}
                                        </Box>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid2>
                    <Grid2 item xs={12} sx={12} md={6} lg={6} xl={6}>
                        <TextField fullWidth sx={style.color_textfield} helperText='Select Your Favorite Color' label='Secondary Color' defaultValue={secondaryColor} onChange={secondaryHandler} color={secondaryColor} select>
                            {themePalette.map((theme) => (
                                <MenuItem key={theme.value} value={theme.value}>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Box>
                                            <SquareRoundedIcon sx={style.color_icon} color={theme.value} />
                                        </Box>
                                        <Box>
                                            {theme.name}
                                        </Box>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid2>
                    <Grid2 item xs={12} sx={12} md={6} lg={6} xl={6}>
                        <TextField fullWidth sx={style.color_textfield} helperText='For Darkmode Only' label='Background Color' defaultValue={backgroundColor} onChange={backgroundHandler} color={secondaryColor} select>
                            {bgPalette.map((bg) => (
                                <MenuItem key={bg.value} value={bg.value}>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Box>
                                            <SquareRoundedIcon sx={[style.color_icon, { color: bg.color }]} />
                                        </Box>
                                        <Box>
                                            {bg.name}
                                        </Box>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid2>
                </Grid2>
            </Card>
        </FadeIn>
    );
}

export default Settings;