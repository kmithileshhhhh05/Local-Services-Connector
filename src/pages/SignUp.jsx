import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Box, Container } from '@mui/material';

const SignUpPage = () => {
  return (
    <Box sx={{ 
      bgcolor: '#f5f5f5', // Light gray background to match services.jsx
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: { xs: 4, sm: 8 }
    }}>
      <Container maxWidth="sm">
        <Box sx={{ 
          bgcolor: '#ffffff', // White card background
          borderRadius: 3,
          border: '1px solid #1976d2', // Blue border
          p: { xs: 3, sm: 4 },
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Lighter shadow
          maxWidth: '450px',
          mx: 'auto',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -1,
            borderRadius: '24px',
            padding: '1px',
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)', // Blue gradient
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }
        }}>
          <SignUp 
            routing="path" 
            path="/sign-up"
            redirectUrl="/"
            appearance={{
              elements: {
                rootBox: {
                  width: '100%',
                  margin: '0 auto'
                },
                card: {
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                  width: '100%'
                },
                headerTitle: {
                  color: '#1a1a1a', // Dark gray for primary text
                  fontSize: { xs: '28px', sm: '32px' },
                  fontWeight: 600,
                  textAlign: 'center',
                  marginBottom: '1rem'
                },
                headerSubtitle: {
                  color: '#666666', // Medium gray for secondary text
                  fontSize: { xs: '14px', sm: '16px' },
                  textAlign: 'center'
                },
                formButtonPrimary: {
                  backgroundColor: '#1976d2', // Blue button
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '12px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#42a5f5' // Light blue on hover
                  }
                },
                formFieldInput: {
                  backgroundColor: '#f5f5f5', // Light gray input background
                  borderColor: '#1976d2', // Blue border
                  color: '#1a1a1a', // Dark gray text
                  borderRadius: '8px',
                  padding: '12px',
                  '&:focus': {
                    borderColor: '#42a5f5', // Light blue on focus
                    backgroundColor: '#f5f5f5'
                  }
                },
                formFieldLabel: {
                  color: '#666666', // Medium gray labels
                  fontSize: '14px'
                },
                footer: {
                  color: '#666666' // Medium gray footer text
                },
                footerActionLink: {
                  color: '#1976d2', // Blue link
                  fontWeight: 500,
                  '&:hover': {
                    color: '#42a5f5' // Light blue on hover
                  }
                },
                dividerLine: {
                  backgroundColor: '#e0e0e0' // Light gray divider
                },
                dividerText: {
                  color: '#666666' // Medium gray divider text
                },
                socialButtonsBlockButton: {
                  border: '1px solid #e0e0e0', // Light gray border
                  backgroundColor: '#ffffff', // White background
                  color: '#1a1a1a', // Dark gray text
                  '&:hover': {
                    backgroundColor: '#f5f5f5' // Light gray on hover
                  }
                },
                socialButtonsBlockButtonText: {
                  color: '#1a1a1a', // Dark gray text
                  fontSize: '14px',
                  fontWeight: 500
                },
                formFieldWarning: {
                  color: '#ff4d4f' // Keep red for warnings
                },
                alert: {
                  borderRadius: 2,
                  marginBottom: 2,
                  backgroundColor: '#f5f5f5', // Light gray alert background
                  color: '#1a1a1a' // Dark gray text
                }
              },
              layout: {
                socialButtonsPlacement: 'top',
                showOptionalFields: false
              }
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SignUpPage;