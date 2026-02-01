/// <reference types="vite/client" />
import { useRef, useState } from 'react';
import { Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [snackBarSeverity, setSnackBarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');

  const closeSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackBarOpen(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      form.current!,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY! }
    ).then(() => {
      setSnackBarMessage('Message sent successfully!');
      setSnackBarSeverity('success');
      setSnackBarOpen(true);
      if (form.current) {
        form.current.reset();
      }
    }, (error) => {
      console.log('FAILED...', error.text);
      setSnackBarMessage('Failed to send message. Try again later.');
      setSnackBarSeverity('error');
      setSnackBarOpen(true);
    },
    );
  };

  return (
    <>
      <Typography variant="h5" component="h1" gutterBottom>
        Leave me a message!
      </Typography>

      <form ref={form} onSubmit={handleSubmit}>
        <TextField
          required
          label="Name"
          variant="outlined"
          name="user_name"
          fullWidth
        />

        <TextField
          required
          label="Email"
          variant="outlined"
          name="user_email"
          type="email"
          fullWidth
          sx={{ mt: 2 }}
        />

        <TextField
          required
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4}
          fullWidth
          sx={{ mt: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </form>

      <Snackbar 
        open={snackBarOpen} 
        autoHideDuration={5000} 
        onClose={() => setSnackBarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
      >
        <Alert onClose={() => setSnackBarOpen(false)} severity={snackBarSeverity}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};