import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon,
  Handyman as HandymanIcon,
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const pages = [
    { title: 'Home', path: '/', icon: <HomeIcon sx={{ fontSize: 24, mr: 1 }} /> },
    { title: 'Services', path: '/services', icon: <HandymanIcon sx={{ fontSize: 24, mr: 1 }} /> },
    { title: 'About', path: '/about', icon: <InfoIcon sx={{ fontSize: 24, mr: 1 }} /> },
    { title: 'Contact', path: '/contact', icon: <ContactIcon sx={{ fontSize: 24, mr: 1 }} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    handleCloseUserMenu();
    await signOut();
    navigate('/');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'white',
        color: 'text.primary',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, justifyContent: 'space-between' }}>
          {/* Logo and Brand - Desktop */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'all 0.3s ease-in-out',
              transform: isScrolled ? 'scale(0.95)' : 'scale(1)',
            }}
          >
            <HandymanIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{ fontSize: 24, fontWeight: 700, color: 'primary.main', letterSpacing: '-0.02em' }}
            >
              LocalPro
            </Typography>
          </Box>


          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: isScrolled ? 'primary.main' : 'grey.700',
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  mt: 1,
                  minWidth: 200,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontWeight: location.pathname === page.path ? 600 : 500,
                    color: location.pathname === page.path ? 'primary.main' : 'text.secondary',
                    '&:hover': { bgcolor: 'primary.light', color: 'primary.main' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {page.icon}
                    <Typography textAlign="center">{page.title}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo and Brand - Mobile */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'all 0.3s ease-in-out',
              transform: isScrolled ? 'scale(0.95)' : 'scale(1)',
              flexGrow: 1,
            }}
          >
            <HandymanIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: '-0.02em' }}
            >
              LOCAL SERVICES
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 3,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: isScrolled || location.pathname === page.path ? 'primary.main' : 'grey.700',
                  fontWeight: location.pathname === page.path ? 700 : 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'grey.100',
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {page.icon}
                {page.title}
              </Button>
            ))}
          </Box>

          {/* User Menu */}
          <Box sx={{ flexShrink: 0 }}>
            {isSignedIn ? (
              <>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{
                      p: 0.5,
                      '&:hover': { bgcolor: 'grey.100' },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <Avatar
                      src={user?.profileImageUrl}
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: isScrolled ? 'primary.main' : 'grey.200',
                        color: isScrolled ? 'white' : 'grey.700',
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      <AccountCircleIcon sx={{ fontSize: 28 }} />
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: '45px',
                    '& .MuiPaper-root': {
                      borderRadius: 2,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      minWidth: 180,
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleLogout} sx={{ py: 1.5 }}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={Link}
                  to="/sign-in"
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to="/sign-up"
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;