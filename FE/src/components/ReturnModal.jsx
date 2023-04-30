import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import { CardActionArea, Snackbar, Slide } from '@mui/material';
import useStore from '../store';
import MuiAlert from '@mui/material/Alert';
import { Fragment } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

function ReturnModal(props) {
    const [open, setOpen] = React.useState(false);
    const { primaryColor, secondaryColor } = useStore();
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const handleClickSnackbar = () => {
        setOpenSnackBar(true);
        setOpen(false);
        setTimeout(() => {
            setOpenSnackBar(false)
        }, 5000);

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

    return (
        <Fragment>
            <CardActionArea onClick={handleClickOpen}>
                {props.children}
            </CardActionArea>
            <Dialog maxWidth='xs' fullWidth open={open} TransitionComponent={Transition} onClose={handleClose} aria-describedby='alert-dialog-slide-description' keepMounted >
                <DialogTitle>Return E-Bike</DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-slide-description'>
                        Are You Sure You Want to Return {props.model}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose} color={primaryColor}>Cancel</Button>
                    <Button variant='contained' onClick={handleClickSnackbar} color={primaryColor}>Confirm</Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnackBar} autoHideDuration={5000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleCloseSnackbar} severity='success' >
                    Item Returned Successfully
                </Alert>
            </Snackbar>
        </Fragment>
    );
}

export default ReturnModal;