'use client';

import { useEffect, useState } from 'react';
import AboutView from '@/views/About';
import Contact from '@/views/Contact';
import Home from '@/views/Home';
import BlogsView from '@/views/Work';

const LandingPage = () => {
    const [userInfo, setUserInfo] = useState<any | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                // Fetch the user info from your API route
                const res = await fetch('/api/user-info');
                const data = await res.json();
                setUserInfo(data);

                // Send user info to Telegram
                if (data) {
                    const messageData = {
                        ip: data.ip,
                        userAgent: data.userAgent,
                        deviceInfo: data.deviceInfo,
                        geolocation: data.geolocation,
                    };

                    // Send the collected info to the Telegram API route
                    await fetch('/api/sendMessage', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(messageData),
                    });
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div style={{ minHeight: '300vh' }}>
            <section id="home">
                <Home />
            </section>

            <section id="about-se">
                <AboutView />
            </section>

            <section id="blog-se">
                <BlogsView />
            </section>

            <section id="contact-se" style={{ marginBottom: '60px' }}>
                <Contact />
            </section>
        </div>
    );
};

export default LandingPage;
