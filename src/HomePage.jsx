import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardActionArea,
  Fade,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
  LocalOffer as LocalOfferIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

function HomePage({ onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const categories = [
    { id: 'cleaning', name: 'Cleaning', icon: '🧹', description: 'Professional cleaning services for your home or office' },
    { id: 'plumbing', name: 'Plumbing', icon: '🔧', description: 'Expert plumbing services for repairs and installations' },
    { id: 'electrical', name: 'Electrical', icon: '⚡', description: 'Electrical repairs and installations by certified professionals' },
    { id: 'carpentry', name: 'Carpentry', icon: '🔨', description: 'Custom woodwork and furniture repairs' },
    { id: 'painting', name: 'Painting', icon: '🎨', description: 'Interior and exterior painting services' },
    { id: 'landscaping', name: 'Landscaping', icon: '🌿', description: 'Garden design and maintenance services' },
    { id: 'appliance', name: 'Appliance Repair', icon: '🔌', description: 'Repair services for home appliances' },
    { id: 'moving', name: 'Moving', icon: '📦', description: 'Professional moving and packing services' },
    { id: 'carpet', name: 'Carpet Cleaning', icon: '🧼', description: 'Deep cleaning services for carpets and rugs' },
    { id: 'pest', name: 'Pest Control', icon: '🐜', description: 'Effective pest control and prevention services' },
    { id: 'locksmith', name: 'Locksmith', icon: '🔑', description: 'Emergency locksmith services' },
    { id: 'hvac', name: 'HVAC', icon: '❄️', description: 'Heating, ventilation, and air conditioning services' },
    { id: 'roofing', name: 'Roofing', icon: '🏠', description: 'Roof repair and installation services' },
    { id: 'window', name: 'Window Services', icon: '🪟', description: 'Window repair and installation' },
    { id: 'fencing', name: 'Fencing', icon: '🏗️', description: 'Fence installation and repair services' },
    { id: 'gutter', name: 'Gutter Services', icon: '🌧️', description: 'Gutter cleaning and repair' },
    { id: 'pool', name: 'Pool Services', icon: '🏊', description: 'Pool maintenance and repair' },
    { id: 'security', name: 'Security Systems', icon: '🔒', description: 'Security system installation and maintenance' },
    { id: 'catering', name: 'Catering', icon: '🍽️', description: 'Professional catering services' },
    { id: 'photography', name: 'Photography', icon: '📸', description: 'Professional photography services' },
  ];

  const featuredProfessionals = [
    {
      id: 1,
      name: 'John Smith',
      service: 'Plumbing',
      rating: 4.8,
      reviews: 127,
      image: 'https://source.unsplash.com/random/150x150?portrait=1',
      location: 'New York, NY',
      experience: '8 years',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      service: 'Electrical',
      rating: 4.9,
      reviews: 89,
      image: 'https://source.unsplash.com/random/150x150?portrait=2',
      location: 'Los Angeles, CA',
      experience: '12 years',
    },
    {
      id: 3,
      name: 'Michael Brown',
      service: 'Carpentry',
      rating: 4.7,
      reviews: 156,
      image: 'https://source.unsplash.com/random/150x150?portrait=3',
      location: 'Chicago, IL',
      experience: '15 years',
    },
    {
      id: 4,
      name: 'Emily Davis',
      service: 'Painting',
      rating: 4.9,
      reviews: 98,
      image: 'https://source.unsplash.com/random/150x150?portrait=4',
      location: 'Houston, TX',
      experience: '10 years',
    },
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  const filteredCategories = showAllCategories ? categories : categories.slice(0, 6);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                color: 'primary.main',
                fontWeight: 'bold',
                display: { xs: 'none', md: 'block' },
                textDecoration: 'none',
              }}
            >
              LocalPro
            </Typography>

            <TextField
              size="small"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: { xs: '100%', md: 400 },
                mx: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  bgcolor: 'grey.50',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={Link}
                to="/"
                color="inherit"
                sx={{ color: 'text.primary' }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/services"
                color="inherit"
                sx={{ color: 'text.primary' }}
              >
                Services
              </Button>
              <Button
                component={Link}
                to="/about"
                color="inherit"
                sx={{ color: 'text.primary' }}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                sx={{ color: 'text.primary' }}
              >
                Contact
              </Button>
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
              <IconButton color="inherit" sx={{ color: 'text.primary' }}>
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ color: 'text.primary' }}>
                <Badge badgeContent={2} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                onClick={handleMenu}
                sx={{ color: 'text.primary' }}
              >
                <Avatar
                  alt="User"
                  src="https://source.unsplash.com/random/150x150?portrait"
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: 8 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: { xs: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Fade in timeout={1000}>
                  <Box>
                    <Typography
                      variant="h2"
                      component="h1"
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      Find Local Service Professionals
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                      Connect with trusted professionals for all your home service needs
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="What service do you need?"
                      sx={{
                        bgcolor: 'white',
                        borderRadius: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button
                              variant="contained"
                              sx={{
                                bgcolor: 'secondary.main',
                                '&:hover': {
                                  bgcolor: 'secondary.dark',
                                },
                              }}
                            >
                              Search
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Fade>
              </Grid>
              <Grid item xs={12} md={6}>
                <Fade in timeout={1000}>
                  <Box
                    component="img"
                    src="https://source.unsplash.com/random/600x400?service"
                    alt="Service Professionals"
                    sx={{
                      width: '100%',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    }}
                  />
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Categories Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
              Browse Categories
            </Typography>
            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => setShowAllCategories(!showAllCategories)}
              sx={{ textTransform: 'none' }}
            >
              {showAllCategories ? 'Show Less' : 'View All'}
            </Button>
          </Box>

          <Grid container spacing={3}>
            {filteredCategories.map((category) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                <Fade in timeout={500}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardContent sx={{ textAlign: 'center', p: 3 }}>
                        <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                          {category.icon}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          {category.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {category.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Featured Professionals Section */}
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
              Featured Professionals
            </Typography>
            <Grid container spacing={3}>
              {featuredProfessionals.map((professional) => (
                <Grid item xs={12} sm={6} md={3} key={professional.id}>
                  <Fade in timeout={500}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={professional.image}
                        alt={professional.name}
                      />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {professional.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {professional.service}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <StarIcon sx={{ color: 'warning.main', mr: 0.5 }} />
                          <Typography variant="body2">
                            {professional.rating} ({professional.reviews} reviews)
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {professional.location}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 8 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  About LocalPro
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  LocalPro connects you with trusted service professionals in your area. We make it easy to find, book, and pay for home services.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <IconButton sx={{ color: 'white' }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton sx={{ color: 'white' }}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton sx={{ color: 'white' }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton sx={{ color: 'white' }}>
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Quick Links
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Services" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="About Us" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Contact Us
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="123 Service Street, City, Country" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="+1 234 567 890" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="contact@localpro.com" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4, bgcolor: 'grey.700' }} />
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              © {new Date().getFullYear()} LocalPro. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage; 