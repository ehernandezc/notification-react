import { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { closeSnackBar } from '../../redux/snackBars/snackBarSlice';
import { getSnackBar } from '../../redux/snackBars/snackBarSelector';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Snackbars = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(getSnackBar);


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeSnackBar());
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert onClose={handleClose} severity={severity || 'success'} sx={{ width: '100%' }}>
        { message }
      </Alert>
    </Snackbar>
  );
}
