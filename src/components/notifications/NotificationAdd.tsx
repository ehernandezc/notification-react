import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  CircularProgress,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Card } from '../shared/card';
import { setSnackBar } from '../../redux/snackBars/snackBarSlice';
import { addNotification } from '../../redux/notifications/notificationsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectNotifications } from '../../redux/notifications/notificationsSelector';

const notificationValidationSchema = yup.object({
  categoryId: yup
    .number()
    .required('Category is required'),
  message: yup
    .string()
    .required('Message is required'),
});

export const NotificationAdd = () => {
  const { loading } = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      categoryId: '',
      message: '',
    },
    validationSchema: notificationValidationSchema,
    onSubmit: async(values, { resetForm }) => {
      dispatch(addNotification({
        categoryId:  parseInt(values.categoryId),
        message: values.message,
      }));

      dispatch(setSnackBar({ message: 'Notifications were sent!' }));
      resetForm();
      navigate('/');
    }
  });

  return (
    <Grid container justifyContent="center">
      <Grid item lg={6}>
        <Card>
          <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="categoryId">Category</InputLabel>
              <Select
                label="Category"
                name="categoryId"
                fullWidth
                value={formik.values.categoryId}
                onChange={formik.handleChange}
                error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/* TODO: Retrieve this from api */ }
                <MenuItem value={1}>Sports</MenuItem>
                <MenuItem value={2}>Finance</MenuItem>
                <MenuItem value={3}>Movies</MenuItem>
              </Select>
              <FormHelperText error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}>
                {formik.touched.categoryId && formik.errors.categoryId}
              </FormHelperText>
            </FormControl>
            <TextField
              label="Message"
              name="message"
              fullWidth
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={{marginTop: 2}}
            />
            <Button type="submit" variant="contained" sx={{marginTop: 2}} disabled={loading}>
              Send notification { loading && <CircularProgress size={20} color="inherit" style={{ marginLeft: '5px'}} /> }
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};
