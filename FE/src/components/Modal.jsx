import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import { Box, CardActionArea, CardMedia, TextField, Snackbar, Slide } from '@mui/material';
import useStore from '../store';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MuiAlert from '@mui/material/Alert';
import { Fragment } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

function Modal(props) {
    const [open, setOpen] = React.useState(false);
    const { primaryColor, secondaryColor } = useStore();
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const handleClickSnackbar = () => {
        setOpenSnackBar(true);
        setOpen(false);
        setTimeout(() => {
            setOpenSnackBar(false)
        }, 3000);
        
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        dialog_textfield: {
            mb: 2
        },
        dialog_title: {
            textAlign: 'center'
        },
        dialog_contentText: {
            mt: 2
        },
        dialog_img: {
            borderRadius: 2
        }
    }

    return (
        <Fragment>
            <CardActionArea variant='outlined' onClick={handleClickOpen}>
                {props.children}
            </CardActionArea>
            <Dialog maxWidth='sm' fullWidth open={open} TransitionComponent={Transition} onClose={handleClose} aria-describedby='alert-dialog-slide-description' keepMounted >
                <DialogTitle sx={style.dialog_title}>
                    {props.name}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={style.dialog_contentText} id='alert-dialog-slide-description'>
                        <Grid2 container spacing={5}>
                            <Grid2 item xs={12} sx={12} md={6} lg={6} xl={6}>
                                <CardMedia component='img' height='310' image={props.img} sx={style.dialog_img} />
                            </Grid2>
                            <Grid2 item xs={12} sx={12} md={6} lg={6} xl={6}>
                                <Box>
                                    <TextField sx={style.dialog_textfield} id='outlined-basic' type='number' color={secondaryColor} label='Hours' variant='outlined' fullWidth />
                                </Box>
                                <Box>
                                    <TextField sx={style.dialog_textfield} id='outlined-basic' color={secondaryColor} label='Wallet Address' variant='outlined' fullWidth />
                                </Box>
                                <Box>
                                    <TextField sx={style.dialog_textfield} id='outlined-basic' type='number' color={secondaryColor} label='Payment' variant='outlined' fullWidth />
                                </Box>
                            </Grid2>
                        </Grid2>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose} color={secondaryColor}>
                        Close
                    </Button>
                    <Button variant='contained' onClick={handleClickSnackbar} color={secondaryColor} >
                        Rent
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleCloseSnackbar} severity='success' >
                    Item Rent Successfully
                </Alert>
            </Snackbar>
        </Fragment>
    );
}

export default Modal;