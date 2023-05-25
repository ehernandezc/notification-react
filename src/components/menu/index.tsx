import { Button, Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavMenu = styled(Box)(({ theme }) => ({
  marginLeft: '15px',
  button: {
    marginRight: '10px',
  }
}));

export const Menu = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  }

  return (
    <NavMenu>
      <Button variant="outlined" onClick={() => handleNavigation('/add')}>Add</Button>
      <Button variant="outlined" onClick={() => handleNavigation('/')}>List</Button>
    </NavMenu>
  );
}