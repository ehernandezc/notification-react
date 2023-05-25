import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SnackBarState {
  open?: boolean;
  message: string;
  severity?: AlertColor;
}

const initialState: SnackBarState = {
  open: false,
  message: '',
  severity: 'success',
}

const snackBarSlice = createSlice({
  name: 'snackBars',
  initialState,
  reducers: {
    setSnackBar: (state, action: PayloadAction<SnackBarState>) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || 'success';
    },
    closeSnackBar: (state) => {
      state.open = false;
      state.message = '';
      state.severity = 'success';
    },
  },
});

export const { setSnackBar, closeSnackBar } = snackBarSlice.actions;

export default snackBarSlice.reducer;