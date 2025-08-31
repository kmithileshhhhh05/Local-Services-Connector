import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        elements: {
          rootBox: {
            width: '100%',
            margin: '0 auto',
          },
          card: {
            border: 'none',
            boxShadow: 'none',
            width: '100%'
          },
          headerTitle: {
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '2rem'
          },
          formButtonPrimary: {
            backgroundColor: '#FFD700',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#DAA520'
            }
          },
          formFieldInput: {
            borderColor: '#FFD700'
          },
          footerActionLink: {
            color: '#FFD700'
          }
        }
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
