"use client"
import { Box, Button, InputAdornment, Stack, TextField, Typography, CircularProgress } from '@mui/material';
import { Call, Location, Message, Send2, User, UserSquare } from 'iconsax-react';
import React, { useState } from 'react';

// Define a type for form data
interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    // Telegram bot token and chat ID
    const BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your bot token
    const CHAT_ID = 'YOUR_CHAT_ID'; // Replace with your chat ID

    // Specify the event type for handleInputChange
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Specify the event type for handleSubmit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false); // Reset success message on new submission
        const BOT_TOKEN = "7796828329:AAFzE55aLC9LZg92bnukBeZf70JkpWR5KVo"
        const CHAT_ID = "5944280734"
        const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                setSuccess(true);
                // Reset form data
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert("Message sending failed")
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: { xs: '10px', md: '100px' }, mt: "80px", mb: "200px" }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px'
            }}>
                <Box sx={{ width: { xs: '100%', md: '900px' }, }}>
                    <Typography variant='h4'>Love to hear from you,</Typography>
                    <Typography variant='h4'>Get in touch 👋</Typography>
                    <Typography variant='body1'>
                        <UserSquare size="20" color="#757474" variant="Bulk" style={{ display: "inline", marginRight: '5px' }} />
                        Tolibjon Saidkodirov
                    </Typography>
                    <Typography variant='body1'>
                        <Call size="20" color="#757474" variant="Bulk" style={{ display: "inline", marginRight: '5px' }} />
                        +998 (94) 274 20 07
                    </Typography>
                    <Typography variant='body1'>
                        <Location size="20" color="#757474" variant="Bulk" style={{ display: "inline", marginRight: '5px' }} />
                        Pop, Namangan, Uzbekistan.
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: '100%', md: '900px' }, }}>
                    <form onSubmit={handleSubmit}>
                        <Stack direction={"row"} gap={"10px"} width={"100%"}>
                            <TextField
                                name="name"
                                variant="filled"
                                label="Your name"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <User variant='Bulk' size={20} color='#545252' />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <TextField
                                name="email"
                                fullWidth
                                variant="filled"
                                label="Your email"
                                type='email'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Message variant='Bulk' size={20} color='#545252' />
                                        </InputAdornment>
                                    ),
                                }}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Stack>
                        <TextField
                            id="filled-multiline-static"
                            name="message"
                            label="Message"
                            multiline
                            rows={6}
                            variant="filled"
                            sx={{ width: '100%', my: "10px" }}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                        <Button
                            type="submit"
                            sx={{ color: '#545252', borderColor: '#545252', position: 'relative' }}
                            variant='outlined'
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <CircularProgress size={20} color="inherit" sx={{ marginRight: '8px' }} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Just Send <Send2 variant='Bulk' size={20} color='#545252' />
                                </>
                            )}
                        </Button>
                        {success && <Typography variant="body2" color="success.main">Message sent successfully!</Typography>}
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
