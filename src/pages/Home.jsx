import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Stack,
  Avatar,
  Rating,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Search as SearchIcon,
  Schedule as ScheduleIcon,
  Verified as VerifiedIcon,
  Star as StarIcon,
  EmojiEvents as EmojiEventsIcon,
  Groups as GroupsIcon,
  ThumbUp as ThumbUpIcon,
  SupportAgent as SupportAgentIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// Data arrays (unchanged)
const features = [
  {
    title: "Quick Search",
    description: "Find the perfect service provider in seconds with our smart search",
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Verified Professionals",
    description: "All service providers are thoroughly vetted and verified",
    icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Easy Scheduling",
    description: "Book appointments with just a few clicks",
    icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Quality Service",
    description: "Guaranteed satisfaction with every service",
    icon: <StarIcon sx={{ fontSize: 40 }} />,
  },
];

const popularServices = [
  {
    title: "Home Cleaning",
    image: "House _cleaning.jpg",
    price: "From $80",
    rating: 4.8,
    reviews: 234,
    description: "Professional cleaning services for your home",
    tags: ["Deep Clean", "Eco-Friendly", "Same Day"],
  },
  {
    title: "Plumbing Services",
    image: "Professional_plumbing_service.jpg",
    price: "From $95",
    rating: 4.9,
    reviews: 189,
    description: "Expert plumbing solutions for all your needs",
    tags: ["Emergency", "Licensed", "24/7"],
  },
  {
    title: "Electrical Work",
    image: "Professional_electric_service.jpg",
    price: "From $100",
    rating: 4.7,
    reviews: 156,
    description: "Certified electricians for any electrical work",
    tags: ["Installation", "Repair", "Safety"],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://source.unsplash.com/random/100x100?portrait",
    text: "The service was exceptional! The team was professional and completed the work ahead of schedule.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://source.unsplash.com/random/100x100?business",
    text: "I've used their services multiple times and they never disappoint. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Property Manager",
    image: "https://source.unsplash.com/random/100x100?woman",
    text: "The platform makes it so easy to find and book reliable service providers.",
    rating: 5,
  },
];

const stats = [
  { icon: <EmojiEventsIcon />, value: "1000+", label: "Happy Customers" },
  { icon: <GroupsIcon />, value: "500+", label: "Service Providers" },
  { icon: <ThumbUpIcon />, value: "98%", label: "Satisfaction Rate" },
  { icon: <SupportAgentIcon />, value: "24/7", label: "Support" },
];

const theme = {
  colors: {
    primary: {
      main: '#1a1a1a',
      light: '#2d2d2d',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#1976d2',    // Standard blue
      light: '#42a5f5',   // Standard light blue
      contrastText: '#ffffff'
    },
    background: {
      default: '#f5f5f5',  // Light gray
      paper: '#ffffff',    // White
      accent: '#7e57c2'    // Softer purple
    },
    text: {
      primary: '#1a1a1a',   // Dark gray for better contrast
      secondary: '#666666', // Medium gray
      accent: '#1976d2'
    }
  }
};

const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#1976d2", "#7e57c2", "#42a5f5"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1976d2",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true,
  background: {
    color: "transparent",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
};

const Home = ({ onLogout }) => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x300?text=Service';
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const glassStyle = {
    bgcolor: 'rgba(255, 255, 255, 0.9)', // Lighter glass effect
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.colors.secondary.main}22`,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    '&:hover': {
      bgcolor: 'rgba(255, 255, 255, 1)',
      border: `1px solid ${theme.colors.secondary.main}44`,
      transform: 'translateY(-4px)',
      boxShadow: `0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px ${theme.colors.secondary.main}22`
    }
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      position: 'relative',
      bgcolor: theme.colors.background.default,
      color: theme.colors.text.primary,
      overflow: 'hidden'
    }}>
      <Particles
        id="tsparticles-bg"
        init={particlesInit}
        options={particlesConfig}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Navbar onLogout={onLogout} />

      {/* Hero Section */}
      <Box
          ref={heroRef}
        component={motion.div}
        initial={{ opacity: 0 }}
          animate={{ opacity: isHeroInView ? 1 : 0 }}
          style={{ y, opacity }}
        sx={{
            pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
            background: `linear-gradient(135deg, ${theme.colors.background.default} 0%, ${theme.colors.background.accent}11 100%)`,
        }}
      >
        <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3.5rem', md: '5rem', lg: '6rem' },
                    fontWeight: 900,
                    mb: 4,
                    letterSpacing: '-0.02em',
                    textAlign: { xs: 'center', md: 'left' },
                    lineHeight: 1.1,
                    background: `linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 10px rgba(0,0,0,0.08)',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: { xs: '50%', md: '0' },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: '80px',
                      height: '4px',
                      background: `linear-gradient(90deg, #1e3c72, #2a5298)`,
                      borderRadius: '2px'
                    }
                  }}
                >
                  Local Services<br />Connector
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 6,
                    color: '#475569',
                    lineHeight: 1.8,
                    fontWeight: 400,
                    fontSize: { xs: '1.1rem', md: '1.35rem' },
                    maxWidth: '800px',
                    textAlign: { xs: 'center', md: 'left' },
                    letterSpacing: '0.01em',
                    '& strong': {
                      color: '#1e3c72',
                      fontWeight: 600
                    }
                  }}
                >
                  Your <strong>one-stop platform</strong> connecting local service providers with customers. Experience <strong>seamless, reliable, and professional</strong> services right at your doorstep. From home maintenance to specialized skills, find <strong>trusted experts</strong> in your community.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                    src="image.png"
                    alt="Local Services"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      transition: 'transform 0.5s ease',
                    '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg)'
                      }
                  }}
                    onError={handleImageError}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
        </Box>

        {/* Stats Section */}
        <Box sx={{ 
          py: 8, 
          background: `linear-gradient(135deg, ${theme.colors.background.paper} 0%, ${theme.colors.secondary.main}11 100%)`
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 2,
                        bgcolor: theme.colors.background.default,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <Box sx={{ 
                        color: theme.colors.secondary.main, 
                        mb: 1, 
                        fontSize: 40 
                      }}>
                        {stat.icon}
                      </Box>
                      <Typography 
                        variant="h4" 
                        component="div" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 1, 
                          color: theme.colors.text.primary 
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography 
                        variant="body1" 
          sx={{
                          fontWeight: 500,
                          color: theme.colors.text.secondary
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
      </Box>

      {/* Features Section */}
        <Box sx={{ 
          py: { xs: 8, md: 12 }, 
          background: `linear-gradient(45deg, ${theme.colors.background.default} 0%, ${theme.colors.background.accent}11 100%)`
        }}>
          <Container maxWidth="lg">
          <Typography
              variant="h2"
            align="center"
            sx={{
                mb: 8,
                fontWeight: 700,
                color: theme.colors.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.colors.secondary.main}, ${theme.colors.background.accent})`
                }
            }}
          >
            Why Choose Us
          </Typography>
            <Grid container spacing={4}>
          {features.map((feature, index) => (
                <Grid item xs={12} md={3} key={feature.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                sx={{
                        ...glassStyle,
                        p: 4,
                  height: '100%',
                        '& .feature-icon': {
                          bgcolor: theme.colors.secondary.main,
                          color: theme.colors.secondary.contrastText
                        },
                        '&:hover .feature-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          boxShadow: `0 0 20px ${theme.colors.secondary.main}44`
                        }
                      }}
                    >
                      <Box
                        className="feature-icon"
                    sx={{ 
                          width: 80,
                          height: 80,
                          borderRadius: '20px',
                          bgcolor: theme.colors.background.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          transition: 'all 0.3s ease',
                          '& svg': {
                            fontSize: 40,
                            color: theme.colors.secondary.contrastText
                          }
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                          color: theme.colors.text.primary,
                          fontSize: '1.25rem'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                        variant="body1"
                    sx={{ 
                          color: theme.colors.text.secondary,
                          lineHeight: 1.7
                    }}
                  >
                    {feature.description}
                  </Typography>
                    </Paper>
                  </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
        </Box>

      {/* Popular Services Section */}
        <Box sx={{ 
          py: { xs: 8, md: 12 }, 
          background: `linear-gradient(135deg, ${theme.colors.background.default} 0%, ${theme.colors.secondary.main}11 100%)`
        }}>
        <Container maxWidth="lg">
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 8,
                fontWeight: 700,
                color: theme.colors.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.colors.secondary.main}, ${theme.colors.background.accent})`
                }
              }}
            >
              Popular Services
            </Typography>
            <Grid container spacing={4}>
            {popularServices.map((service, index) => (
                <Grid item xs={12} md={4} key={service.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                  sx={{
                        ...glassStyle,
                    height: '100%',
                    overflow: 'hidden',
                        '& .service-image::after': {
                          background: `linear-gradient(0deg, ${theme.colors.background.paper} 0%, transparent 100%)`
                        },
                        '&:hover .service-image img': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    >
                      <Box
                        className="service-image"
                        sx={{
                          position: 'relative',
                          height: 240,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                    component="img"
                          src={service.image}
                    alt={service.title}
                    sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            zIndex: 1,
                            bgcolor: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            border: `1px solid ${theme.colors.secondary.main}22`
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: theme.colors.text.primary,
                              fontWeight: 600
                            }}
                          >
                            {service.price}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ p: 3 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                            color: theme.colors.text.primary
                      }}
                    >
                      {service.title}
                    </Typography>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                          <Rating
                            value={service.rating}
                            readOnly
                            size="small"
                            sx={{ color: theme.colors.secondary.main }}
                          />
                      <Typography 
                            variant="body2"
                        sx={{ 
                              ml: 1,
                              color: theme.colors.text.secondary
                        }}
                      >
                            ({service.reviews} reviews)
                      </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 3,
                            color: theme.colors.text.secondary,
                            lineHeight: 1.7
                          }}
                        >
                          {service.description}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                          {service.tags.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              size="small"
                              sx={{
                                bgcolor: `${theme.colors.secondary.main}22`,
                                color: theme.colors.text.accent,
                                borderRadius: 1,
                                '&:hover': {
                                  bgcolor: `${theme.colors.secondary.main}33`
                                }
                              }}
                            />
                          ))}
                    </Stack>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                            bgcolor: theme.colors.secondary.main,
                            color: theme.colors.secondary.contrastText,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                              bgcolor: theme.colors.secondary.light,
                          transform: 'translateY(-2px)',
                              boxShadow: `0 8px 20px ${theme.colors.secondary.main}33`
                        },
                            transition: 'all 0.3s ease'
                      }}
                    >
                      Book Now
                    </Button>
                      </Box>
                    </Paper>
                  </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

        {/* Testimonials Section */}
      <Box
        sx={{
            py: { xs: 8, md: 12 }, 
            background: `radial-gradient(circle at 50% 50%, ${theme.colors.background.accent}11 0%, ${theme.colors.background.default} 70%)`
        }}
      >
        <Container maxWidth="lg">
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 6,
                fontWeight: 700,
                color: theme.colors.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              What Our Customers Say
            </Typography>
            <Box sx={{ position: 'relative', maxWidth: 600, mx: 'auto' }}>
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    ...glassStyle,
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonials[currentTestimonial].image}
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: `2px solid ${theme.colors.secondary.main}`
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.colors.text.primary
                        }}
                      >
                        {testimonials[currentTestimonial].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.colors.text.secondary
                        }}
                      >
                        {testimonials[currentTestimonial].role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.colors.text.secondary,
                      fontStyle: 'italic',
                      mb: 2,
                      lineHeight: 1.6
                    }}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </Typography>
                  <Rating
                    value={testimonials[currentTestimonial].rating}
                    readOnly
                    sx={{
                      color: theme.colors.secondary.main
                    }}
                  />
                </Paper>
              </motion.div>
              <IconButton
                onClick={handlePrevTestimonial}
                sx={{
                  position: 'absolute',
                  left: -60,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: theme.colors.secondary.main,
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 1)'
                  }
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNextTestimonial}
                sx={{
                  position: 'absolute',
                  right: -60,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: theme.colors.secondary.main,
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 1)'
                  }
                }}
              >
                <ChevronRightIcon />
              </IconButton>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mt: 2,
                gap: 1 
              }}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: currentTestimonial === index 
                        ? theme.colors.secondary.main 
                        : 'rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Part-time Professional Registration Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: `linear-gradient(135deg, ${theme.colors.background.default} 0%, ${theme.colors.secondary.main}22 100%)`,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 6,
                fontWeight: 700,
                color: theme.colors.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Want to Work as a Part-time Professional?
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={10}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 6,
                      background: `linear-gradient(90deg, ${theme.colors.secondary.main}, ${theme.colors.secondary.light})`
                    }}
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.colors.text.primary,
                      mb: 3
                    }}
                  >
                    Join Our Network of Skilled Professionals
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.colors.text.secondary,
                      mb: 4,
                      maxWidth: '800px',
                      mx: 'auto'
                    }}
                  >
                    Turn your skills into earnings. Work flexible hours and choose your assignments.
                  </Typography>
                  <Grid container spacing={4} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ p: 3 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '20px',
                            bgcolor: `${theme.colors.secondary.main}22`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            mx: 'auto',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              bgcolor: `${theme.colors.secondary.main}33`
                            }
                          }}
                        >
                          <ScheduleIcon sx={{ fontSize: 40, color: theme.colors.secondary.main }} />
                        </Box>
                        <Typography variant="h6" gutterBottom color="primary">
                          Flexible Hours
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Choose your own schedule and work when it suits you best
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ p: 3 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '20px',
                            bgcolor: `${theme.colors.secondary.main}22`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            mx: 'auto',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              bgcolor: `${theme.colors.secondary.main}33`
                            }
                          }}
                        >
                          <EmojiEventsIcon sx={{ fontSize: 40, color: theme.colors.secondary.main }} />
                        </Box>
                        <Typography variant="h6" gutterBottom color="primary">
                          Competitive Pay
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Set your own rates and earn what you deserve
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ p: 3 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '20px',
                            bgcolor: `${theme.colors.secondary.main}22`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            mx: 'auto',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              bgcolor: `${theme.colors.secondary.main}33`
                            }
                          }}
                        >
                          <StarIcon sx={{ fontSize: 40, color: theme.colors.secondary.main }} />
                        </Box>
                        <Typography variant="h6" gutterBottom color="primary">
                          Choose Your Jobs
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Select projects that match your skills and interests
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 6,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      bgcolor: theme.colors.secondary.main,
                      color: theme.colors.secondary.contrastText,
                      '&:hover': {
                        bgcolor: theme.colors.secondary.dark,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.12)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Register as Professional
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: 8,
            background: `linear-gradient(135deg, ${theme.colors.background.default} 0%, ${theme.colors.secondary.main}22 100%)`,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
              >
                <Typography 
                  variant="h3" 
                    component="h2"
                  sx={{ 
                      mb: 2, 
                      fontWeight: 700, 
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      color: theme.colors.text.primary
                  }}
                >
                  Ready to Get Started?
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.9,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      color: theme.colors.text.secondary
                  }}
                >
                    Join thousands of satisfied customers who trust us for their service needs
                </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/services"
                    sx={{
                      bgcolor: theme.colors.secondary.main,
                      color: theme.colors.secondary.contrastText,
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      '&:hover': {
                        bgcolor: theme.colors.secondary.light,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 20px ${theme.colors.secondary.main}33`,
                      },
                    }}
                  >
                    Book a Service Now
                  </Button>
                </motion.div>
              </Grid>
          </Grid>
        </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 