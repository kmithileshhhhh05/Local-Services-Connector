import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Rating,
  IconButton,
  Divider,
  Paper,
  Stack,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Fade,
  Badge,
  Avatar,
  Select,
  MenuItem as SelectMenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Verified as VerifiedIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon,
  Close as CloseIcon,
  BookmarkBorder as BookmarkIcon,
  Bookmark as BookmarkFilledIcon,
  NavigateNext as NavigateNextIcon,
  Phone as PhoneIcon,
  CreditCard as CreditCardIcon,
  AccountBalance as BankIcon,
  LocalAtm as CashIcon,
  Payment as UPIIcon,
} from '@mui/icons-material';

// Sample services data (already has 20 items)
const services = [
  {
    id: 1,
    title: 'Professional House Cleaning',
    category: 'Cleaning',
    image: '/House _cleaning.jpg', // This should map to public/House _cleaning.jpg
    rating: 4.8,
    reviews: 156,
    price: '$149',
    originalPrice: '$199',
    provider: 'CleanPro Services',
    location: 'New York, NY',
    verified: true,
    description: 'Complete house cleaning with eco-friendly products. Includes deep cleaning of all rooms.',
    tags: ['Deep Cleaning', 'Eco-Friendly', 'Same Day'],
  },
  {
    id: 2,
    title: 'Expert Plumbing Services',
    category: 'Plumbing',
    image: 'Professional_plumbing_service.jpg',
    rating: 4.9,
    reviews: 203,
    price: '$129',
    originalPrice: '$179',
    provider: 'Master Plumbers Inc.',
    location: 'Brooklyn, NY',
    verified: true,
    description: '24/7 emergency plumbing services. Expert solutions for all plumbing issues.',
    tags: ['Emergency', '24/7', 'Licensed'],
  },
  {
    id: 3,
    title: 'Electrical Maintenance',
    category: 'Electrical',
    image: 'Professional_electric_service.jpg',
    rating: 4.7,
    reviews: 178,
    price: '$139',
    originalPrice: '$189',
    provider: 'PowerFix Electric',
    location: 'Queens, NY',
    verified: true,
    description: 'Professional electrical services by certified technicians. Available 24/7.',
    tags: ['Emergency', 'Licensed', 'Insured'],
  },
  {
    id: 4,
    title: 'Interior Painting Service',
    category: 'Painting',
    image: 'Interior_painting.jpg',
    rating: 4.6,
    reviews: 145,
    price: '$299',
    originalPrice: '$399',
    provider: 'ColorMaster Painters',
    location: 'Manhattan, NY',
    verified: true,
    description: 'Premium interior painting service with top-quality materials and expert painters.',
    tags: ['Interior', 'Premium Paint', 'Warranty'],
  },
  {
    id: 5,
    title: 'Garden Landscaping',
    category: 'Landscaping',
    image: 'Garden_Landscaping.jpg',
    rating: 4.8,
    reviews: 167,
    price: '$249',
    originalPrice: '$349',
    provider: 'GreenThumb Gardens',
    location: 'Staten Island, NY',
    verified: true,
    description: 'Complete garden transformation with professional landscaping services.',
    tags: ['Design', 'Maintenance', 'Eco-Friendly'],
  },
  {
    id: 6,
    title: 'AC Installation & Repair',
    category: 'HVAC',
    image: 'Ac_installation_and_repair.jpeg',
    rating: 4.9,
    reviews: 189,
    price: '$179',
    originalPrice: '$229',
    provider: 'Cool Comfort Systems',
    location: 'Bronx, NY',
    verified: true,
    description: 'Professional AC installation and repair services with warranty.',
    tags: ['Installation', 'Repair', 'Warranty'],
  },
  {
    id: 7,
    title: 'Professional Moving Service',
    category: 'Moving',
    image: 'Professional_moving_service.jpg',
    rating: 4.7,
    reviews: 145,
    price: '$399',
    originalPrice: '$499',
    provider: 'Swift Movers',
    location: 'Manhattan, NY',
    verified: true,
    description: 'Full-service moving solutions including packing and transportation.',
    tags: ['Packing', 'Insurance', 'Storage'],
  },
  {
    id: 8,
    title: 'Pet Grooming Service',
    category: 'Pet Care',
    image: 'pet_grooming.jpg',
    rating: 4.9,
    reviews: 212,
    price: '$79',
    originalPrice: '$99',
    provider: 'Happy Paws',
    location: 'Brooklyn, NY',
    verified: true,
    description: 'Professional pet grooming service with experienced groomers.',
    tags: ['Grooming', 'Pet-Friendly', 'Premium'],
  },
  {
    id: 9,
    title: 'Home Security Setup',
    category: 'Security',
    image: 'Home_security_setup.jpg',
    rating: 4.8,
    reviews: 167,
    price: '$299',
    originalPrice: '$399',
    provider: 'SecureHome Systems',
    location: 'Queens, NY',
    verified: true,
    description: 'Complete home security system installation with 24/7 monitoring.',
    tags: ['Installation', 'Monitoring', '24/7'],
  },
  {
    id: 10,
    title: 'Window Cleaning',
    category: 'Cleaning',
    image: 'Window_cleaning.jpg',
    rating: 4.6,
    reviews: 134,
    price: '$149',
    originalPrice: '$199',
    provider: 'Crystal Clear Windows',
    location: 'Bronx, NY',
    verified: true,
    description: 'Professional window cleaning for homes and offices.',
    tags: ['Residential', 'Commercial', 'Insured'],
  },
  {
    id: 11,
    title: 'Carpet Deep Cleaning',
    category: 'Cleaning',
    image: 'carpet_cleaning.jpg',
    rating: 4.7,
    reviews: 156,
    price: '$159',
    originalPrice: '$209',
    provider: 'Fresh Carpet Care',
    location: 'Manhattan, NY',
    verified: true,
    description: 'Deep carpet cleaning and stain removal with eco-friendly products.',
    tags: ['Deep Clean', 'Stain Removal', 'Eco-Friendly'],
  },
  {
    id: 12,
    title: 'Handyman Services',
    category: 'Maintenance',
    image: 'Handy_Man_Services.jpg',
    rating: 4.8,
    reviews: 223,
    price: '$99',
    originalPrice: '$129',
    provider: 'Fix-It-All',
    location: 'Brooklyn, NY',
    verified: true,
    description: 'General home repairs and maintenance by skilled handymen.',
    tags: ['Repairs', 'Installation', 'Maintenance'],
  },
  {
    id: 13,
    title: 'Roof Repair Service',
    category: 'Roofing',
    image: 'Roof_Repair.jpeg',
    rating: 4.9,
    reviews: 178,
    price: '$399',
    originalPrice: '$499',
    provider: 'Top Roof Experts',
    location: 'Queens, NY',
    verified: true,
    description: 'Professional roof repair and maintenance services.',
    tags: ['Repair', 'Inspection', 'Emergency'],
  },
  {
    id: 14,
    title: 'Interior Design',
    category: 'Design',
    image: 'Interior_design.jpg',
    rating: 4.8,
    reviews: 145,
    price: '$599',
    originalPrice: '$799',
    provider: 'Elegant Interiors',
    location: 'Manhattan, NY',
    verified: true,
    description: 'Complete interior design services for homes and offices.',
    tags: ['Design', 'Consultation', 'Premium'],
  },
  {
    id: 15,
    title: 'Smart Home Installation',
    category: 'Technology',
    image: 'smart-home.jpg',
    rating: 4.7,
    reviews: 134,
    price: '$249',
    originalPrice: '$329',
    provider: 'Smart Living Tech',
    location: 'Staten Island, NY',
    verified: true,
    description: 'Smart home device installation and setup services.',
    tags: ['Installation', 'Smart Devices', 'Setup'],
  },
  {
    id: 16,
    title: 'Pool Maintenance',
    category: 'Maintenance',
    image: 'pool_maintainance.jpg',
    rating: 4.8,
    reviews: 167,
    price: '$199',
    originalPrice: '$249',
    provider: 'Crystal Clear Pools',
    location: 'Brooklyn, NY',
    verified: true,
    description: 'Professional pool cleaning and maintenance services.',
    tags: ['Cleaning', 'Maintenance', 'Weekly Service'],
  },
  {
    id: 17,
    title: 'Pest Control Service',
    category: 'Pest Control',
    image: 'pest_control.jpg',
    rating: 4.9,
    reviews: 189,
    price: '$149',
    originalPrice: '$199',
    provider: 'Safe Home Pest Control',
    location: 'Queens, NY',
    verified: true,
    description: 'Complete pest control and prevention services.',
    tags: ['Pest Control', 'Prevention', 'Eco-Friendly'],
  },
  {
    id: 18,
    title: 'Garage Door Repair',
    category: 'Repair',
    image: 'garage_maintanance.jpg',
    rating: 4.7,
    reviews: 143,
    price: '$179',
    originalPrice: '$229',
    provider: 'Quick Fix Garage',
    location: 'Staten Island, NY',
    verified: true,
    description: 'Professional garage door repair and installation.',
    tags: ['Repair', 'Installation', 'Emergency'],
  },
  {
    id: 19,
    title: 'Home Theater Setup',
    category: 'Technology',
    image: 'Home_theatre_setup.jpg',
    rating: 4.8,
    reviews: 156,
    price: '$299',
    originalPrice: '$399',
    provider: 'Elite AV Systems',
    location: 'Manhattan, NY',
    verified: true,
    description: 'Professional home theater installation and setup.',
    tags: ['Installation', 'Setup', 'Premium'],
  },
  {
    id: 20,
    title: 'Solar Panel Installation',
    category: 'Energy',
    image: 'solar_panel_installation.jpg',
    rating: 4.9,
    reviews: 134,
    price: '$999',
    originalPrice: '$1299',
    provider: 'Green Energy Solutions',
    location: 'Bronx, NY',
    verified: true,
    description: 'Professional solar panel installation and consultation.',
    tags: ['Installation', 'Green Energy', 'Consultation'],
  },
];

// Enhanced worker data with more professionals
const workers = [
  {
    id: 1,
    name: "Alex Thompson",
    specialization: "Plumbing",
    experience: "8 years",
    rating: 4.9,
    reviews: 320,
    completedJobs: 980,
    availability: "Available Now",
    photo: "https://source.unsplash.com/random/150x150?plumber",
    certifications: ["Master Plumber", "Gas Fitting", "Water Systems"],
    languages: ["English"],
    hourlyRate: "$45-60",
    phone: "+1234567890",
    email: "alex.t@example.com",
    bio: "Master plumber specializing in emergency repairs and modern plumbing solutions.",
    specialties: ["Emergency Repairs", "Installation", "Modern Systems"],
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    specialization: "Cleaning",
    experience: "6 years",
    rating: 4.8,
    reviews: 280,
    completedJobs: 780,
    availability: "Available Now",
    photo: "https://source.unsplash.com/random/150x150?cleaner",
    certifications: ["Professional Cleaning", "Eco-Friendly Products"],
    languages: ["English", "Spanish", "Portuguese"],
    hourlyRate: "$35-45",
    phone: "+1234567891",
    email: "maria.r@example.com",
    bio: "Eco-friendly cleaning specialist with focus on deep cleaning services.",
    specialties: ["Deep Cleaning", "Green Cleaning", "Commercial"],
  },
  {
    id: 3,
    name: "James Chen",
    specialization: "Electrical",
    experience: "12 years",
    rating: 4.9,
    reviews: 420,
    completedJobs: 1200,
    availability: "Available in 1 hour",
    photo: "https://source.unsplash.com/random/150x150?electrician",
    certifications: ["Master Electrician", "Smart Home Certified"],
    languages: ["English", "Mandarin"],
    hourlyRate: "$50-70",
    phone: "+1234567892",
    email: "james.c@example.com",
    bio: "Expert electrician specializing in smart home installations and electrical systems.",
    specialties: ["Smart Home", "Wiring", "Safety Systems"],
  },
  {
    id: 4,
    name: "Sarah Williams",
    specialization: "HVAC",
    experience: "10 years",
    rating: 4.8,
    reviews: 350,
    completedJobs: 950,
    availability: "Available Now",
    photo: "https://source.unsplash.com/random/150x150?technician",
    certifications: ["HVAC Master Tech", "Energy Efficiency"],
    languages: ["English"],
    hourlyRate: "$55-75",
    phone: "+1234567893",
    email: "sarah.w@example.com",
    bio: "HVAC specialist focusing on energy-efficient systems and air quality solutions.",
    specialties: ["Installation", "Energy Efficiency", "Air Quality"],
  },
  {
    id: 5,
    name: "Michael Foster",
    specialization: "Painting",
    experience: "15 years",
    rating: 4.9,
    reviews: 480,
    completedJobs: 1100,
    availability: "Available Tomorrow",
    photo: "https://source.unsplash.com/random/150x150?painter",
    certifications: ["Master Painter", "Eco-Paint Certified"],
    languages: ["English"],
    hourlyRate: "$40-60",
    phone: "+1234567894",
    email: "michael.f@example.com",
    bio: "Professional painter with expertise in both residential and commercial projects.",
    specialties: ["Interior", "Exterior", "Commercial"],
  },
  {
    id: 6,
    name: "David Anderson",
    specialization: "Security",
    experience: "10 years",
    rating: 4.9,
    reviews: 390,
    completedJobs: 850,
    availability: "Available Now",
    photo: "https://source.unsplash.com/random/150x150?security",
    certifications: ["Security Systems Expert", "CCTV Specialist", "Smart Security"],
    languages: ["English"],
    hourlyRate: "$50-70",
    phone: "+1234567895",
    email: "david.a@example.com",
    bio: "Security systems expert specializing in modern home and business security solutions.",
    specialties: ["CCTV Installation", "Smart Security", "Access Control"],
  },
  {
    id: 7,
    name: "Lisa Martinez",
    specialization: "Design",
    experience: "8 years",
    rating: 4.8,
    reviews: 310,
    completedJobs: 620,
    availability: "Available Tomorrow",
    photo: "https://source.unsplash.com/random/150x150?designer",
    certifications: ["Interior Design", "Space Planning"],
    languages: ["English", "Spanish"],
    hourlyRate: "$60-80",
    phone: "+1234567896",
    email: "lisa.m@example.com",
    bio: "Creative interior designer with a passion for transforming spaces.",
    specialties: ["Residential Design", "Color Consultation", "Space Planning"],
  },
  {
    id: 8,
    name: "Robert Johnson",
    specialization: "Pest Control",
    experience: "12 years",
    rating: 4.7,
    reviews: 280,
    completedJobs: 890,
    availability: "Available Now",
    photo: "https://source.unsplash.com/random/150x150?pestcontrol",
    certifications: ["Pest Management", "Eco-Friendly Solutions"],
    languages: ["English"],
    hourlyRate: "$40-60",
    phone: "+1234567897",
    email: "robert.j@example.com",
    bio: "Experienced pest control specialist using eco-friendly methods.",
    specialties: ["Residential", "Commercial", "Natural Solutions"],
  },
  {
    id: 9,
    name: "Emma Wilson",
    specialization: "Technology",
    experience: "7 years",
    rating: 4.9,
    reviews: 240,
    completedJobs: 520,
    availability: "Available in 2 hours",
    photo: "https://source.unsplash.com/random/150x150?tech",
    certifications: ["Smart Home Expert", "Network Specialist"],
    languages: ["English"],
    hourlyRate: "$55-75",
    phone: "+1234567898",
    email: "emma.w@example.com",
    bio: "Smart home technology expert specializing in home automation.",
    specialties: ["Home Automation", "Network Setup", "Smart Devices"],
  },
  {
    id: 10,
    name: "Thomas Brown",
    specialization: "Roofing",
    experience: "15 years",
    rating: 4.8,
    reviews: 420,
    completedJobs: 980,
    availability: "Available Tomorrow",
    photo: "https://source.unsplash.com/random/150x150?roofer",
    certifications: ["Master Roofer", "Safety Certified"],
    languages: ["English"],
    hourlyRate: "$60-80",
    phone: "+1234567899",
    email: "thomas.b@example.com",
    bio: "Expert roofer with extensive experience in all types of roofing systems.",
    specialties: ["Repairs", "Installation", "Maintenance"],
  }
];

function Services({ onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('none');
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [workerDialogOpen, setWorkerDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [bookingFormOpen, setBookingFormOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    address: '',
    timeSlot: '',
    date: ''
  });
  const [paymentDetails, setPaymentDetails] = useState({
    method: 'Credit Card',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
    bank: '',
    cashOnDelivery: false
  });

  const categories = [
    'all',
    'Cleaning',
    'Plumbing',
    'Electrical',
    'Painting',
    'Landscaping',
    'HVAC',
    'Moving',
    'Pet Care',
    'Security',
    'Maintenance',
    'Roofing',
    'Design',
    'Technology',
    'Pest Control',
    'Repair',
    'Energy',
  ];

  const getFilteredAndSortedServices = () => {
    let filtered = services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPrice = extractPrice(service.price) >= priceRange[0] && extractPrice(service.price) <= priceRange[1];
      const matchesRating = service.rating >= ratingFilter;
      const matchesVerified = verifiedOnly ? service.verified : true;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesVerified;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  };

  const extractPrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, '')) || 0;
  };

  const handleSortClick = (event) => setSortAnchorEl(event.currentTarget);
  const handleSortClose = () => setSortAnchorEl(null);
  const handleSortSelect = (sortType) => {
    setSortBy(sortType);
    handleSortClose();
  };

  const handleBookNow = (service) => {
    setSelectedService(service);
    setBookingFormOpen(true);
  };

  const handleWorkerSelect = (worker) => {
    setSelectedWorker(worker);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    if (!bookingDetails.name || !bookingDetails.phone || !bookingDetails.address || !bookingDetails.timeSlot || !bookingDetails.date) {
      alert('Please fill in all required fields');
      return;
    }
    setBookingFormOpen(false);
    setWorkerDialogOpen(true);
  };

  const handleBookingConfirm = () => {
    if (!selectedWorker) {
      alert('Please select a worker before proceeding.');
      return;
    }
    setWorkerDialogOpen(false);
    setPaymentDialogOpen(true);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    
    if (paymentDetails.method === 'Cash on Delivery') {
      // Show success message for COD
      showSuccessToast('Booking confirmed! Worker will collect payment on service completion.');
      setPaymentDialogOpen(false);
      return;
    }

    // Validate payment details based on method
    if (paymentDetails.method === 'Credit Card' || paymentDetails.method === 'Debit Card') {
      if (!paymentDetails.cardNumber || !paymentDetails.expiry || !paymentDetails.cvv) {
        alert('Please fill in all card details.');
        return;
      }
    } else if (paymentDetails.method === 'UPI' && !paymentDetails.upiId) {
      alert('Please enter UPI ID.');
      return;
    } else if (paymentDetails.method === 'Net Banking' && !paymentDetails.bank) {
      alert('Please select a bank.');
      return;
    }

    // Show success message
    showSuccessToast('Payment successful! Booking confirmed.');
    setPaymentDialogOpen(false);
  };

  const showSuccessToast = (message) => {
    const toastElement = document.createElement('div');
    toastElement.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #4caf50;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: system-ui;
    `;
    toastElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    document.body.appendChild(toastElement);
    
    setTimeout(() => {
      toastElement.style.opacity = '0';
      toastElement.style.transition = 'opacity 0.3s ease-out';
      setTimeout(() => document.body.removeChild(toastElement), 300);
    }, 3000);
  };

  const filteredAndSortedServices = getFilteredAndSortedServices();

  return (
    <>
      <Navbar onLogout={onLogout} />
      <Box sx={{ flexGrow: 1, bgcolor: '#f5f7fa', minHeight: '100vh', overflow: 'hidden' }}>
        <Box
          sx={{
            pt: { xs: 12, md: 16 },
            pb: 10,
            background: 'linear-gradient(145deg, #1976d2 0%, #42a5f5 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.2) 100%)',
              zIndex: 1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to top, rgba(245,247,250,0.95), transparent)',
              zIndex: 2,
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              Discover Top-Tier Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 5,
                opacity: 0.92,
                fontWeight: 300,
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: '600px',
              }}
            >
              Connect with trusted, verified professionals for all your needs.
            </Typography>
            <Paper>
              <TextField
                fullWidth
                placeholder="Search services (e.g., plumbing, cleaning)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ mb: 6 }}>
            <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                Explore Categories
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category === 'all' ? 'All Services' : category}
                    onClick={() => setSelectedCategory(category)}
                    color={selectedCategory === category ? 'primary' : 'default'}
                    sx={{
                      borderRadius: '12px',
                      fontWeight: 600,
                      px: 1.5,
                      py: 0.75,
                      fontSize: '0.9rem',
                      height: 36,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        bgcolor: selectedCategory === category ? 'primary.dark' : 'grey.100',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                startIcon={<FilterListIcon />}
                variant="outlined"
                size="large"
                onClick={() => setFilterDialogOpen(true)}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderColor: 'grey.300',
                  bgcolor: 'white',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  '&:hover': { bgcolor: 'grey.50', borderColor: 'grey.400' },
                }}
              >
                Filters
              </Button>
              <Button
                startIcon={<SortIcon />}
                variant="outlined"
                size="large"
                onClick={handleSortClick}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderColor: 'grey.300',
                  bgcolor: 'white',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  '&:hover': { bgcolor: 'grey.50', borderColor: 'grey.400' },
                }}
              >
                Sort By
              </Button>
            </Stack>
          </Box>

          <Menu
            anchorEl={sortAnchorEl}
            open={Boolean(sortAnchorEl)}
            onClose={handleSortClose}
            TransitionComponent={Fade}
            PaperProps={{
              sx: {
                borderRadius: 3,
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                mt: 1,
                minWidth: 200,
              },
            }}
          >
            {[
              { value: 'none', label: 'Default' },
              { value: 'price-low', label: 'Price: Low to High' },
              { value: 'price-high', label: 'Price: High to Low' },
              { value: 'rating', label: 'Highest Rating' },
              { value: 'reviews', label: 'Most Reviews' },
            ].map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => handleSortSelect(option.value)}
                sx={{
                  fontWeight: sortBy === option.value ? 600 : 500,
                  py: 1.5,
                  px: 3,
                  '&:hover': { bgcolor: 'primary.light', color: 'primary.main' },
                  ...(sortBy === option.value && { bgcolor: 'primary.light', color: 'primary.main' }),
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>

          <Dialog
            open={filterDialogOpen}
            onClose={() => setFilterDialogOpen(false)}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 4,
                p: 2,
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                bgcolor: 'background.paper',
              },
            }}
            TransitionComponent={Fade}
          >
            <DialogTitle>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  Refine Your Search
                </Typography>
                <IconButton
                  onClick={() => setFilterDialogOpen(false)}
                  sx={{ color: 'grey.600', '&:hover': { color: 'grey.900' } }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography gutterBottom sx={{ fontWeight: 600, color: 'text.secondary', mt: 1 }}>
                Price Range ($)
              </Typography>
              <Slider
                value={priceRange}
                onChange={(event, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                sx={{
                  color: 'primary.main',
                  '& .MuiSlider-thumb': { boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
                  '& .MuiSlider-track': { height: 6 },
                  '& .MuiSlider-rail': { opacity: 0.2 },
                }}
              />
              <Typography gutterBottom sx={{ mt: 4, fontWeight: 600, color: 'text.secondary' }}>
                Minimum Rating
              </Typography>
              <Rating
                value={ratingFilter}
                onChange={(event, newValue) => setRatingFilter(newValue)}
                precision={0.5}
                size="large"
                sx={{ color: '#ffb400', '& .MuiRating-icon': { mr: 0.5 } }}
              />
              <FormGroup sx={{ mt: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                      sx={{
                        color: 'primary.main',
                        '&.Mui-checked': { color: 'primary.main' },
                      }}
                    />
                  }
                  label="Verified Providers Only"
                  sx={{ fontWeight: 500, color: 'text.primary' }}
                />
              </FormGroup>
            </DialogContent>
            <DialogActions sx={{ pb: 2, px: 3 }}>
              <Button
                onClick={() => setFilterDialogOpen(false)}
                variant="contained"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 5,
                  py: 1.25,
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  '&:hover': { boxShadow: '0 6px 20px rgba(0,0,0,0.15)' },
                }}
              >
                Apply Filters
              </Button>
            </DialogActions>
          </Dialog>

          <Box sx={{ mb: 5 }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontWeight: 500,
                fontSize: '1.1rem',
                bgcolor: 'grey.100',
                p: 2,
                borderRadius: 2,
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              Showing <strong>{filteredAndSortedServices.length}</strong> services
              {selectedCategory !== 'all' && (
                <span>
                  {' in '}
                  <Chip label={selectedCategory} size="small" color="primary" sx={{ mx: 0.5 }} />
                </span>
              )}
              {sortBy !== 'none' && (
                <span>
                  {' • Sorted by '}
                  <strong>{sortBy.replace('-', ' ').toLowerCase()}</strong>
                </span>
              )}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {filteredAndSortedServices.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="220"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h6" component="h3">
                        {service.title}
                      </Typography>
                      {service.verified && (
                        <VerifiedIcon color="primary" fontSize="small" />
                      )}
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {service.description}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
                      <LocationIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {service.location}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
                      <Box>
                        <Rating value={service.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary">
                          ({service.reviews} reviews)
                        </Typography>
                      </Box>
                      <Typography variant="h6" color="primary">
                        {service.price}
                      </Typography>
                    </Stack>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => handleBookNow(service)}
                      sx={{ mt: 2 }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {filteredAndSortedServices.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                No services found matching your criteria.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange([0, 1000]);
                  setRatingFilter(0);
                  setVerifiedOnly(false);
                  setSortBy('none');
                }}
                sx={{ borderRadius: 2, px: 4, py: 1, textTransform: 'none' }}
              >
                Reset Filters
              </Button>
            </Box>
          )}
        </Container>

        {/* Booking Form Dialog */}
        <Dialog
          open={bookingFormOpen}
          onClose={() => setBookingFormOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              bgcolor: '#1E1E1E',
              color: 'white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }
          }}
        >
          <DialogTitle sx={{ borderBottom: '1px solid #333' }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>
              Book {selectedService?.title}
            </Typography>
            <IconButton 
              onClick={() => setBookingFormOpen(false)}
              sx={{ 
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'grey.500',
                '&:hover': { color: 'white' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <form onSubmit={handleBookingSubmit}>
            <DialogContent sx={{ py: 3 }}>
              <Stack spacing={3}>
                <Box sx={{ p: 2, bgcolor: '#2A2A2A', borderRadius: 2 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: '#FFD700', fontWeight: 600 }}>
                    Service Details
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {selectedService?.description}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#FFD700', mt: 1 }}>
                    Price: {selectedService?.price}
                  </Typography>
                </Box>

                <TextField
                  required
                  label="Full Name"
                  fullWidth
                  value={bookingDetails.name}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, name: e.target.value }))}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#333' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'grey.400',
                      '&.Mui-focused': { color: '#FFD700' }
                    }
                  }}
                />

                <TextField
                  required
                  label="Phone Number"
                  fullWidth
                  value={bookingDetails.phone}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, phone: e.target.value }))}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#333' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'grey.400',
                      '&.Mui-focused': { color: '#FFD700' }
                    }
                  }}
                />

                <TextField
                  required
                  label="Service Address"
                  fullWidth
                  multiline
                  rows={2}
                  value={bookingDetails.address}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, address: e.target.value }))}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#333' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'grey.400',
                      '&.Mui-focused': { color: '#FFD700' }
                    }
                  }}
                />

                <TextField
                  required
                  label="Preferred Date"
                  type="date"
                  fullWidth
                  value={bookingDetails.date}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, date: e.target.value }))}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#333' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'grey.400',
                      '&.Mui-focused': { color: '#FFD700' }
                    }
                  }}
                />

                <TextField
                  required
                  label="Preferred Time"
                  type="time"
                  fullWidth
                  value={bookingDetails.timeSlot}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, timeSlot: e.target.value }))}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#333' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'grey.400',
                      '&.Mui-focused': { color: '#FFD700' }
                    }
                  }}
                />
              </Stack>
            </DialogContent>
            <DialogActions sx={{ borderTop: '1px solid #333', p: 2 }}>
              <Button 
                onClick={() => setBookingFormOpen(false)}
                sx={{ 
                  color: 'grey.400',
                  '&:hover': { color: 'white' }
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#FFD700',
                  color: 'black',
                  '&:hover': {
                    bgcolor: '#DAA520'
                  }
                }}
              >
                Find Available Professionals
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Worker Selection Dialog */}
        <Dialog
          open={workerDialogOpen}
          onClose={() => setWorkerDialogOpen(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              bgcolor: '#1E1E1E',
              color: 'white',
            }
          }}
        >
          <DialogTitle sx={{ borderBottom: '1px solid #333' }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>
              Select a Professional for {selectedService?.title}
            </Typography>
            <IconButton
              onClick={() => setWorkerDialogOpen(false)}
              sx={{ 
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'grey.500',
                '&:hover': { color: 'white' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ py: 3 }}>
            <Grid container spacing={2}>
              {workers
                .filter(worker => worker.specialization === selectedService?.category)
                .map((worker) => (
                  <Grid item xs={12} key={worker.id}>
                    <Card
                      onClick={() => handleWorkerSelect(worker)}
                      sx={{
                        display: 'flex',
                        cursor: 'pointer',
                        bgcolor: selectedWorker?.id === worker.id ? '#2A2A2A' : '#1E1E1E',
                        border: '1px solid',
                        borderColor: selectedWorker?.id === worker.id ? '#FFD700' : '#333',
                        borderRadius: 2,
                        p: 2,
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          borderColor: '#FFD700',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                        }
                      }}
                    >
                      <Avatar
                        src={worker.photo}
                        sx={{
                          width: 80,
                          height: 80,
                          mr: 2,
                          border: '2px solid',
                          borderColor: selectedWorker?.id === worker.id ? '#FFD700' : 'transparent'
                        }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                          <Typography variant="h6" sx={{ color: '#FFD700' }}>
                            {worker.name}
                          </Typography>
                          {worker.availability === "Available Now" && (
                            <Chip
                              label="Available Now"
                              size="small"
                              sx={{
                                bgcolor: '#1a472a',
                                color: '#2ecc71',
                                borderRadius: 1
                              }}
                            />
                          )}
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                          <Rating value={worker.rating} readOnly size="small" sx={{ color: '#FFD700' }} />
                          <Typography variant="body2" sx={{ color: 'grey.400' }}>
                            ({worker.reviews} reviews)
                          </Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: 'grey.400' }} gutterBottom>
                          {worker.experience} experience • {worker.completedJobs} jobs completed
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.300' }} gutterBottom>
                          {worker.bio}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          {worker.specialties.map((specialty, index) => (
                            <Chip
                              key={index}
                              label={specialty}
                              size="small"
                              sx={{
                                mr: 1,
                                mb: 1,
                                bgcolor: '#2A2A2A',
                                color: '#FFD700',
                                border: '1px solid #FFD700'
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 600 }}>
                          {worker.hourlyRate}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.400' }}>
                          per hour
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </DialogContent>
          <DialogActions sx={{ borderTop: '1px solid #333', p: 2 }}>
            <Button
              onClick={() => setWorkerDialogOpen(false)}
              sx={{
                color: 'grey.400',
                '&:hover': { color: 'white' }
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={!selectedWorker}
              onClick={handleBookingConfirm}
              sx={{
                bgcolor: '#FFD700',
                color: 'black',
                '&:hover': {
                  bgcolor: '#DAA520'
                },
                '&.Mui-disabled': {
                  bgcolor: '#2A2A2A',
                  color: 'grey.500'
                }
              }}
            >
              Continue with Selected Professional
            </Button>
          </DialogActions>
        </Dialog>

        {/* Payment Dialog */}
        <Dialog
          open={paymentDialogOpen}
          onClose={() => setPaymentDialogOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              bgcolor: '#1E1E1E',
              color: 'white'
            }
          }}
        >
          <DialogTitle sx={{ borderBottom: '1px solid #333' }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>
              Payment Details
            </Typography>
            <IconButton
              onClick={() => setPaymentDialogOpen(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'grey.500',
                '&:hover': { color: 'white' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <form onSubmit={handlePaymentSubmit}>
            <DialogContent sx={{ py: 3 }}>
              <Box sx={{ mb: 3, p: 2, bgcolor: '#2A2A2A', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>
                  Booking Summary
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                      Service: {selectedService?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                      Professional: {selectedWorker?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                    <Typography variant="h6" sx={{ color: '#FFD700' }}>
                      Total Amount: {selectedService?.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Typography variant="h6" gutterBottom sx={{ color: '#FFD700' }}>
                Select Payment Method
              </Typography>
              <RadioGroup
                value={paymentDetails.method}
                onChange={(e) => setPaymentDetails(prev => ({ ...prev, method: e.target.value }))}
                sx={{ mb: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: paymentDetails.method === 'Credit Card' ? '#2A2A2A' : '#1E1E1E',
                        border: '1px solid',
                        borderColor: paymentDetails.method === 'Credit Card' ? '#FFD700' : '#333',
                        borderRadius: 2,
                        cursor: 'pointer'
                      }}
                    >
                      <FormControlLabel
                        value="Credit Card"
                        control={<Radio sx={{ color: '#FFD700' }} />}
                        label={
                          <Stack direction="row" spacing={1} alignItems="center">
                            <CreditCardIcon sx={{ color: '#FFD700' }} />
                            <Typography>Credit Card</Typography>
                          </Stack>
                        }
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: paymentDetails.method === 'Debit Card' ? '#2A2A2A' : '#1E1E1E',
                        border: '1px solid',
                        borderColor: paymentDetails.method === 'Debit Card' ? '#FFD700' : '#333',
                        borderRadius: 2,
                        cursor: 'pointer'
                      }}
                    >
                      <FormControlLabel
                        value="Debit Card"
                        control={<Radio sx={{ color: '#FFD700' }} />}
                        label={
                          <Stack direction="row" spacing={1} alignItems="center">
                            <CreditCardIcon sx={{ color: '#FFD700' }} />
                            <Typography>Debit Card</Typography>
                          </Stack>
                        }
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: paymentDetails.method === 'UPI' ? '#2A2A2A' : '#1E1E1E',
                        border: '1px solid',
                        borderColor: paymentDetails.method === 'UPI' ? '#FFD700' : '#333',
                        borderRadius: 2,
                        cursor: 'pointer'
                      }}
                    >
                      <FormControlLabel
                        value="UPI"
                        control={<Radio sx={{ color: '#FFD700' }} />}
                        label={
                          <Stack direction="row" spacing={1} alignItems="center">
                            <UPIIcon sx={{ color: '#FFD700' }} />
                            <Typography>UPI</Typography>
                          </Stack>
                        }
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: paymentDetails.method === 'Net Banking' ? '#2A2A2A' : '#1E1E1E',
                        border: '1px solid',
                        borderColor: paymentDetails.method === 'Net Banking' ? '#FFD700' : '#333',
                        borderRadius: 2,
                        cursor: 'pointer'
                      }}
                    >
                      <FormControlLabel
                        value="Net Banking"
                        control={<Radio sx={{ color: '#FFD700' }} />}
                        label={
                          <Stack direction="row" spacing={1} alignItems="center">
                            <BankIcon sx={{ color: '#FFD700' }} />
                            <Typography>Net Banking</Typography>
                          </Stack>
                        }
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: paymentDetails.method === 'Cash on Delivery' ? '#2A2A2A' : '#1E1E1E',
                        border: '1px solid',
                        borderColor: paymentDetails.method === 'Cash on Delivery' ? '#FFD700' : '#333',
                        borderRadius: 2,
                        cursor: 'pointer'
                      }}
                    >
                      <FormControlLabel
                        value="Cash on Delivery"
                        control={<Radio sx={{ color: '#FFD700' }} />}
                        label={
                          <Stack direction="row" spacing={1} alignItems="center">
                            <CashIcon sx={{ color: '#FFD700' }} />
                            <Typography>Cash on Delivery</Typography>
                          </Stack>
                        }
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </RadioGroup>

              {(paymentDetails.method === 'Credit Card' || paymentDetails.method === 'Debit Card') && (
                <Stack spacing={3}>
                  <TextField
                    required
                    label="Card Number"
                    fullWidth
                    value={paymentDetails.cardNumber}
                    onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardNumber: e.target.value }))}
                    inputProps={{ maxLength: 16 }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: '#333' },
                        '&:hover fieldset': { borderColor: '#FFD700' },
                        '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                      },
                      '& .MuiInputLabel-root': {
                        color: 'grey.400',
                        '&.Mui-focused': { color: '#FFD700' }
                      }
                    }}
                  />
                  <Stack direction="row" spacing={2}>
                    <TextField
                      required
                      label="Expiry (MM/YY)"
                      fullWidth
                      value={paymentDetails.expiry}
                      onChange={(e) => setPaymentDetails(prev => ({ ...prev, expiry: e.target.value }))}
                      inputProps={{ maxLength: 5 }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': { borderColor: '#333' },
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey.400',
                          '&.Mui-focused': { color: '#FFD700' }
                        }
                      }}
                    />
                    <TextField
                      required
                      label="CVV"
                      fullWidth
                      value={paymentDetails.cvv}
                      onChange={(e) => setPaymentDetails(prev => ({ ...prev, cvv: e.target.value }))}
                      inputProps={{ maxLength: 3 }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': { borderColor: '#333' },
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey.400',
                          '&.Mui-focused': { color: '#FFD700' }
                        }
                      }}
                    />
                  </Stack>
                </Stack>
              )}

              {paymentDetails.method === 'UPI' && (
                <TextField
                  required
                  label="UPI ID"
                  fullWidth
                  value={paymentDetails.upiId}
                  onChange={(e) => setPaymentDetails(prev => ({ ...prev, upiId: e.target.value }))}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#333' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      '&.Mui-focused fieldset': { borderColor: '#FFD700' }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'grey.400',
                      '&.Mui-focused': { color: '#FFD700' }
                    }
                  }}
                />
              )}

              {paymentDetails.method === 'Net Banking' && (
                <FormControl fullWidth>
                  <InputLabel sx={{ color: 'grey.400', '&.Mui-focused': { color: '#FFD700' } }}>
                    Select Bank
                  </InputLabel>
                  <Select
                    value={paymentDetails.bank}
                    label="Select Bank"
                    onChange={(e) => setPaymentDetails(prev => ({ ...prev, bank: e.target.value }))}
                    sx={{
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FFD700' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFD700' }
                    }}
                  >
                    <MenuItem value="SBI">State Bank of India</MenuItem>
                    <MenuItem value="HDFC">HDFC Bank</MenuItem>
                    <MenuItem value="ICICI">ICICI Bank</MenuItem>
                    <MenuItem value="Axis">Axis Bank</MenuItem>
                    <MenuItem value="Kotak">Kotak Mahindra Bank</MenuItem>
                    <MenuItem value="Yes">Yes Bank</MenuItem>
                  </Select>
                </FormControl>
              )}
            </DialogContent>
            <DialogActions sx={{ borderTop: '1px solid #333', p: 2 }}>
              <Button
                onClick={() => setPaymentDialogOpen(false)}
                sx={{
                  color: 'grey.400',
                  '&:hover': { color: 'white' }
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#FFD700',
                  color: 'black',
                  '&:hover': {
                    bgcolor: '#DAA520'
                  }
                }}
              >
                {paymentDetails.method === 'Cash on Delivery' ? 'Confirm Booking' : 'Pay Now'}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
    </>
  );
}

export default Services; 