import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../context/AuthContext.jsx';

function NavigationBar() {
    const { isLoggedIn, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: '#162138', boxShadow: '0 8px 24px 0 rgba(0,0,0,0.32)' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box display="flex" alignItems="center">
                    <Typography
                        variant="h5"
                        component={RouterLink}
                        to="/"
                        sx={{
                            fontWeight: 700,
                            textDecoration: 'none',
                            color: 'inherit',
                            background: 'linear-gradient(90deg, #3f89ff, #265299 81.73%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        EduShare
                    </Typography>
                </Box>
                <Box display="flex" gap={2}>
                    {
                        isLoggedIn?(
                            <Button
                            component={RouterLink}
                            to="/"
                            variant="outlined"
                            color="inherit"
                            sx={{ fontWeight: 600 }}
                            onClick={handleLogout}
                            >
                            Logout
                            </Button>
                        ):(
                            <Button
                            component={RouterLink}
                            to="/login"
                            variant="outlined"
                            color="inherit"
                            sx={{ fontWeight: 600 }}
                            >
                            Login
                            </Button>
                        )
                    }
                    {
                        isLoggedIn?(
                            <Button
                            component={RouterLink}
                            to="/userprofile"
                            variant="outlined"
                            color="inherit"
                            sx={{ fontWeight: 600 }}
                            >
                            <AccountCircleIcon sx={{ mr: 1 }} />
                            Profile
                            </Button>
                        ):(
                            <Button
                            component={RouterLink}
                            to="/register"
                            variant="outlined"
                            color="secondary"
                            sx={{ fontWeight: 600 }}
                            >
                            Register
                            </Button>
                        )
                    }
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
