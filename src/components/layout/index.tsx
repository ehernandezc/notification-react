import { Outlet } from 'react-router-dom';
import { AppBar, Box, Toolbar, styled } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Menu } from '../menu';
import { Snackbars } from '../shared/snackBar';

export const TopToolbar = styled(Toolbar)(({ theme }) => ({
  background: '#ffffff',
  color: '#636b7e',
  display: 'flex',
  justifyContent: 'start',
}));

export const IconApp = styled(NotificationsActiveIcon)(({ theme }) => ({
  marginRight: '10px',
}));


export const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flex: '1' }}>
      <AppBar position="fixed">
        <TopToolbar>
          <IconApp />
          <b>Notifications</b>
          <Menu />
        </TopToolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          marginTop: '64px', 
          flexGrow: 1,
          p: 3,
        }}
      >
        <Outlet />
      </Box>
      <Snackbars />
    </Box>
  );
}
