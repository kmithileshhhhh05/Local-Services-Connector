export const navbarStyles = {
  appBar: (isScrolled) => ({
    background: isScrolled 
      ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(33, 203, 243, 0.95) 100%)'
      : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    borderRadius: '0 0 16px 16px',
    boxShadow: isScrolled 
      ? '0 4px 20px rgba(0, 0, 0, 0.1)'
      : '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease-in-out',
    padding: '4px 0',
  }),

  toolbar: {
    minHeight: '56px',
    padding: '0 16px',
  },

  logoContainer: (isScrolled) => ({
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    textDecoration: 'none',
    color: isScrolled ? 'white' : 'primary.main',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      opacity: 0.9,
    },
  }),

  logoIcon: {
    marginRight: 1,
    fontSize: '24px',
  },

  logoText: {
    fontWeight: 700,
    letterSpacing: '.1rem',
    fontSize: '1.2rem',
  },

  mobileMenuButton: (isScrolled) => ({
    color: isScrolled ? 'white' : 'primary.main',
    marginRight: 1,
    padding: '8px',
  }),

  mobileLogoContainer: (isScrolled) => ({
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    alignItems: 'center',
    textDecoration: 'none',
    color: isScrolled ? 'white' : 'primary.main',
  }),

  desktopMenuContainer: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    gap: 1,
  },

  menuButton: (isScrolled, isActive) => ({
    color: isScrolled ? 'white' : 'primary.main',
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    px: 1.5,
    py: 0.75,
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(25, 118, 210, 0.1)',
      opacity: isActive ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
    },
    '&:hover': {
      '&::before': {
        opacity: 1,
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: isActive ? '80%' : '0%',
      height: '2px',
      backgroundColor: isScrolled ? 'white' : 'primary.main',
      transition: 'all 0.3s ease-in-out',
      transform: 'translateX(-50%)',
    },
    '&:hover::after': {
      width: '80%',
    },
  }),

  menuIcon: {
    fontSize: '20px',
  },

  userMenuButton: (isScrolled) => ({
    padding: '4px',
  }),

  avatar: (isScrolled) => ({
    width: 32,
    height: 32,
    bgcolor: isScrolled ? 'white' : 'primary.main',
    color: isScrolled ? 'primary.main' : 'white',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }),

  mobileMenu: {
    display: { xs: 'block', md: 'none' },
    '& .MuiPaper-root': {
      borderRadius: '12px',
      marginTop: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
  },

  mobileMenuItem: (isActive) => ({
    padding: '8px 16px',
    borderRadius: '8px',
    margin: '4px 8px',
    backgroundColor: isActive ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(25, 118, 210, 0.12)',
    },
  }),

  userMenu: {
    marginTop: '45px',
    '& .MuiPaper-root': {
      borderRadius: '12px',
      minWidth: '150px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
  },

  userMenuItem: {
    padding: '8px 16px',
    '&:hover': {
      backgroundColor: 'rgba(25, 118, 210, 0.08)',
    },
  },
}; 