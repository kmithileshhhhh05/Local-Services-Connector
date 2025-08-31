import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  People as PeopleIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Speed as SpeedIcon,
  Timeline as TimelineIcon,
  Lightbulb as LightbulbIcon,
  EmojiObjects as EmojiObjectsIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const teamMembers = [
  {
    name: 'Chandrika',
    role: 'Frontend Developer & Testing Lead',
    image: 'https://source.unsplash.com/random/400x400?woman,professional,1',
    description: 'Specializes in React.js development and comprehensive application testing. Ensures high-quality user interfaces and robust functionality through systematic testing approaches.',
    socialLinks: ['LinkedIn', 'GitHub']
  },
  {
    name: 'Manideep',
    role: 'Frontend Developer & QA Engineer',
    image: 'https://source.unsplash.com/random/400x400?man,professional,1',
    description: 'Expert in UI/UX implementation and quality assurance. Focuses on creating intuitive user experiences while maintaining high testing standards.',
    socialLinks: ['LinkedIn', 'GitHub']
  },
  {
    name: 'Mithilesh',
    role: 'Backend Developer & System Architect',
    image: 'https://source.unsplash.com/random/400x400?man,professional,2',
    description: 'Leads backend architecture design and system ideation. Expert in developing complex business logic and debugging system-level issues.',
    socialLinks: ['LinkedIn', 'GitHub']
  },
  {
    name: 'Raghuram',
    role: 'Backend Developer & Debug Specialist',
    image: 'https://source.unsplash.com/random/400x400?man,professional,3',
    description: 'Focuses on backend implementation and advanced debugging. Specializes in solving complex technical challenges and optimizing system performance.',
    socialLinks: ['LinkedIn', 'GitHub']
  }
];

const stats = [
  { number: '50,000+', label: 'Happy Customers', icon: <PeopleIcon />, color: '#2196F3' },
  { number: '10,000+', label: 'Service Providers', icon: <StarIcon />, color: '#FF4081' },
  { number: '98%', label: 'Satisfaction Rate', icon: <CheckCircleIcon />, color: '#4CAF50' },
  { number: '24/7', label: 'Customer Support', icon: <SupportIcon />, color: '#FFC107' },
];

const About = memo(({ onLogout }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x400?text=Team+Member';
  };

  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh' }}>
      <Navbar onLogout={onLogout} />

      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          pt: { xs: 10, md: 12 },
          pb: 6,
          background: 'linear-gradient(135deg, #1976d2 0%, #21CBF3 100%)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
              Connecting communities with trusted service providers since 2020
            </Typography>
          </motion.div>
        </Container>
        
        {/* Animated background elements */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -4, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3} component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} component={motion.div} variants={itemVariants}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: stat.color,
                  },
                }}
              >
                <Box sx={{ color: stat.color, mb: 2, transform: 'scale(1.5)' }}>
                  {stat.icon}
                </Box>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </motion.div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                We're on a mission to revolutionize how people connect with service providers. By leveraging technology and human expertise, we create meaningful connections that benefit both service providers and customers.
              </Typography>
              <List>
                {[
                  { icon: <SecurityIcon color="primary" />, text: 'Verified and trusted service providers' },
                  { icon: <SpeedIcon color="primary" />, text: 'Quick and efficient service booking' },
                  { icon: <SupportIcon color="primary" />, text: 'Dedicated customer support' },
                ].map((item, index) => (
                  <ListItem key={index} component={motion.li} variants={itemVariants}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="contained" size="large" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400?team,meeting"
                alt="Team meeting"
                onError={handleImageError}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Team
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
              Meet the people behind our success
            </Typography>
          </motion.div>

          <Grid container spacing={4} component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index} component={motion.div} variants={cardVariants}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                      <Avatar
                        src={member.image}
                        onError={handleImageError}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: 3,
                          borderColor: 'primary.main',
                        }}
                      />
                    </motion.div>
                    <Typography variant="h5" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Values
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            The principles that guide everything we do
          </Typography>
        </motion.div>

        <Grid container spacing={4} component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
          {[
            {
              title: 'Trust & Safety',
              description: 'We prioritize the safety and security of our users through rigorous verification processes.',
              icon: <SecurityIcon sx={{ fontSize: 40 }} />,
              color: '#2196F3',
            },
            {
              title: 'Quality Service',
              description: 'We maintain high standards for all service providers on our platform.',
              icon: <StarIcon sx={{ fontSize: 40 }} />,
              color: '#FF4081',
            },
            {
              title: 'Community Focus',
              description: 'We build strong relationships within local communities.',
              icon: <PeopleIcon sx={{ fontSize: 40 }} />,
              color: '#4CAF50',
            },
            {
              title: 'Customer First',
              description: "We put our customers' needs at the heart of everything we do.",
              icon: <SupportIcon sx={{ fontSize: 40 }} />,
              color: '#FFC107',
            },
          ].map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} component={motion.div} variants={itemVariants}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: value.color,
                  },
                }}
              >
                <Box sx={{ color: value.color, mb: 2 }}>
                  {value.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

About.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

About.displayName = 'About';

export default About; 