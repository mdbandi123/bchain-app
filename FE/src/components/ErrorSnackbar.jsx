import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { CardActionArea } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function CustomizedSnackbars(props) {
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const handleClickSnackbar = () => {
        setOpenSnackBar(true);
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

    return (
        <Stack>
            <CardActionArea  onClick={handleClickSnackbar}>
                {props.children}
            </CardActionArea>
            <Snackbar open={openSnackBar} autoHideDuration={5000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleCloseSnackbar} severity='error' >
                    Item Not Available!
                </Alert>
            </Snackbar>
        </Stack>
    );
}
