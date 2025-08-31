import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
  Stack,
  Divider,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';

function Contact({ onLogout }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success',
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email',
      primary: 'support@localservices.com',
      secondary: '24/7 Online Support',
    },
    {
      icon: <LocationIcon fontSize="large" />,
      title: 'Office',
      primary: '123 Business Avenue',
      secondary: 'New York, NY 10001',
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, name: 'Facebook', url: '#' },
    { icon: <TwitterIcon />, name: 'Twitter', url: '#' },
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: '#' },
    { icon: <InstagramIcon />, name: 'Instagram', url: '#' },
    { icon: <WhatsAppIcon />, name: 'WhatsApp', url: '#' },
  ];

  return (
    <>
      <Navbar onLogout={onLogout} />
      <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh' }}>
        {/* Hero Section */}
        <Box
          sx={{
            pt: 12,
            pb: 6,
            background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
              We're here to help and answer any questions you might have
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {/* Contact Information Cards */}
            {contactInfo.map((info, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {info.primary}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.secondary}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Contact Form Section */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Send us a Message
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'grey.50' }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Connect With Us
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    Follow us on social media to stay updated with our latest news and announcements.
                  </Typography>
                  
                  <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>

                  <Divider sx={{ my: 4 }} />

                  <Typography variant="h6" gutterBottom>
                    Business Hours
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1">Monday - Friday</Typography>
                    <Typography variant="body2" color="text.secondary">9:00 AM - 6:00 PM EST</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1">Saturday - Sunday</Typography>
                    <Typography variant="body2" color="text.secondary">Closed</Typography>
                  </Box>

                  <Divider sx={{ my: 4 }} />

                  <Typography variant="h6" gutterBottom>
                    Emergency Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    For urgent matters, please call our 24/7 emergency support line:
                  </Typography>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>
                    +1 (555) 999-8888
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Contact; 