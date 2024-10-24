import AboutView from '@/views/About'
import Contact from '@/views/Contact'
import Home from '@/views/Home'
import BlogsView from '@/views/Work'
import React from 'react'

const LandingPage = () => {
    return (
        <div style={{ height: "300vh" }}>
            <section id="home">
                <Home />
            </section>

            <section id="about-se">
                <AboutView />
            </section>

            <section id="blog-se">
                <BlogsView />
            </section>

            <section id="contact-se">
                <Contact />
            </section>
        </div>
    )
}

export default LandingPage