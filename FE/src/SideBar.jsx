
import React, { Fragment } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import { red, pink, purple, blue, teal, green, yellow, orange, grey } from '@mui/material/colors';
import { List, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material/';
import { Stack, Box, CssBaseline, Typography, Toolbar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import PaymentIcon from '@mui/icons-material/Payment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import useStore from './store';

const drawerWidth = 180;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const menu = [
    { title: 'Rent', path: '/rent' },
    { title: 'Payment', path: '/payment' },
    { title: 'Settings', path: '/settings' },
    { title: 'Exit', path: '/' }
]

function SideBar() {
    const theme = useTheme();
    const location = useLocation();
    const path = location.pathname;
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const { darkMode, primaryColor, backgroundColor } = useStore();

    const style = {
        appbar_containter: {
            display: 'flex'
        },
        appbar_btn: {
            marginRight: 5, ...(open && { display: 'none' })
        },
        appbar_logo_container: {
            flexGrow: 1 
        },
        appbar_logo_icon: {
            fontSize: '1.1em'
        },
        list_listItem: {
            display: 'block'
        },
        list_listItem_button: {
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
        },
        list_listItem_button_icon: {
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center'
        },
        list_listItem_button_text: {
            opacity: open ? 1 : 0
        },
        main_component: {
            flexGrow: 1,
            p: 3
        }
    }

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
            action: {
                disabled: darkMode ? grey[600] : grey[700],
                hover: darkMode ? grey[600] : grey[300],
                selected: darkMode ? grey[400] : grey[600],
                active: darkMode ? grey[500] : grey[700]
            },
            text: {
                primary: darkMode ? grey[100] : grey[900],
                secondary: darkMode ? grey[500] : grey[700],
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

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={style.appbar_containter}>
                <CssBaseline />
                <AppBar position='fixed' open={open} color={primaryColor} >
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' sx={style.appbar_btn} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' component='div' sx={style.appbar_logo_container}>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Box>
                                    <ElectricBikeIcon sx={style.appbar_logo_icon} />
                                </Box>
                                <Box>
                                    Rent-A-Bike
                                </Box>
                            </Stack>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant='permanent' open={open} >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    {menu.map((item, index) => (
                        <Fragment>
                            <List>
                                <ListItem sx={style.list_listItem} key={item.title} component={Link} to={item.path} selected={item.path === path} disablePadding button>
                                    <ListItemButton sx={style.list_listItem_button} >
                                        <ListItemIcon sx={style.list_listItem_button_icon} >
                                            { index === 0 ? <KeyIcon /> : 
                                            index === 1 ? <PaymentIcon /> : 
                                            index === 2 ? <SettingsIcon /> :
                                            index === 3 ? <ExitToAppIcon /> :
                                            <ElectricBikeIcon /> }
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} sx={style.list_listItem_button_text} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Fragment>
                    ))}
                </Drawer>
                <Box component='main' sx={style.main_component}>
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default SideBar;