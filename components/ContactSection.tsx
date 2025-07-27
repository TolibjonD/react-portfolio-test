"use client"
import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Sms, Call, User, Message, DirectboxSend, Location, InfoCircle, Send2, Instagram, Global, Profile2User } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

// Toast component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-6 right-6 z-[9999] px-6 py-4 rounded-xl shadow-lg text-base font-semibold flex items-center gap-3
        ${type === 'success' ? 'bg-green-500/90 text-white' : 'bg-rose-600/90 text-white'}`}
            role="alert"
            aria-live="polite"
        >
            {type === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
            <span>{message}</span>
            <button onClick={onClose} className="ml-2 text-white/80 hover:text-white text-lg font-bold focus:outline-none">×</button>
        </motion.div>
    </AnimatePresence>
);

// Loader spinner
const Loader = () => (
    <span className="inline-block align-middle">
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
    </span>
);

const reasons = [
    'Start a new project',
    'Discuss collaboration',
    'Ask a question',
    'Request a quote',
    'Just say hello!'
];

const faqs = [
    {
        q: 'How soon can I expect a reply?',
        a: 'I usually respond within 1-2 business days.'
    },
    {
        q: 'What information should I include in my message?',
        a: 'A brief description of your project, goals, and any deadlines helps me respond more effectively.'
    },
    {
        q: 'Do you work with international clients?',
        a: 'Absolutely! I collaborate with clients and teams worldwide.'
    },
    {
        q: 'Can we schedule a call?',
        a: 'Yes, just mention your preferred time and platform in your message.'
    },
];

export const ContactSection = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const router = useRouter();
    const [formState, handleSubmit] = useForm('mldlgnyb');
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Show toast on success/error
    React.useEffect(() => {
        if (formState.succeeded) {
            setToast({ message: 'Thank you! Your message has been sent.', type: 'success' });
        } else if (Array.isArray(formState.errors) && formState.errors.length > 0) {
            setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
        }
        if (formState.succeeded || (Array.isArray(formState.errors) && formState.errors.length > 0)) {
            const timeout = setTimeout(() => setToast(null), 4000);
            return () => clearTimeout(timeout);
        }
    }, [formState.succeeded, formState.errors]);

    return (
        <Section
            id="contact"
            blurredBg
            title="Contact Me"
            subtitle={undefined}
            className="flex flex-col items-center justify-center"
        >
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 tracking-tight">Let’s Connect</h3>
                <p className="text-zinc-400 text-base sm:text-lg font-medium mb-6">Whether you have a project in mind, want to collaborate, or just want to say hi, I’d love to hear from you. Reach out and let’s make something great together.</p>
                <ul className="flex flex-wrap justify-center gap-3 mb-2">
                    {reasons.map((r, i) => (
                        <li key={r} className="px-4 py-1 rounded-full bg-zinc-800/70 text-zinc-300 text-xs sm:text-sm font-medium border border-zinc-700 shadow backdrop-blur">
                            {r}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch py-10 px-2 sm:px-8">
                {/* Left: Map only */}
                <div className="w-full h-full flex-1 flex items-start justify-start lg:col-span-7 col-span-1">
                    <div className="w-full h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-2 border-zinc-800">
                        <iframe
                            title="Tashkent Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5997.073964479836!2d69.279737!3d41.311081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2b0b0b0b0b%3A0x7b0b0b0b0b0b0b0b!2sTashkent!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg)' }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                {/* Right: Contact form with contact info at the top */}
                <form
                    className="w-full h-full flex-1 bg-zinc-900/60 backdrop-blur-sm rounded-3xl shadow-2xl p-0 flex flex-col gap-0 border-2 border-zinc-800 justify-start overflow-hidden lg:col-span-5 col-span-1"
                    style={{ minHeight: '28rem' }}
                    onSubmit={handleSubmit}
                >
                    {/* Contact info at the top, items-start */}
                    <div className="p-5 border-b border-zinc-800 flex flex-col gap-3 items-start">
                        <div className="flex items-center gap-3 text-zinc-200 text-lg font-semibold">
                            <Call size={24} variant="Bold" color="#f43f5e" />
                            <span>+998 (94) 274 2007</span>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-200 text-lg font-semibold">
                            <Sms size={24} variant="Bold" color="#f43f5e" />
                            <span>stolibjon123@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-200 text-lg font-semibold">
                            <Profile2User size={22} color="#f43f5e" />
                            <span onClick={() => router.push('https://www.linkedin.com/in/tolibjon/')} className="hover:text-rose-400 cursor-pointer transition">LinkedIn</span>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-200 text-lg font-semibold">
                            <Global size={22} color="#f43f5e" />
                            <span onClick={() => router.push('https://www.upwork.com/freelancers/~012bf0839b4b35ae4d?mp_source=share')} className="hover:text-rose-400 cursor-pointer transition">Upwork</span>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-200 text-lg font-semibold">
                            <Instagram size={22} color="#f43f5e" />
                            <span onClick={() => router.push('https://www.instagram.com/saidkodirof/')} className="hover:text-rose-400 cursor-pointer transition">Instagram</span>
                        </div>
                        <div className="text-zinc-400 text-base flex items-center gap-2">
                            <InfoCircle size={18} color="#f43f5e" />
                            I usually respond within 1-2 business days.
                        </div>
                    </div>
                    {/* Form fields */}
                    <div className="p-5 border-b border-zinc-800 flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-zinc-100 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-rose-400 transition text-base"
                                disabled={formState.submitting || formState.succeeded}
                            />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-zinc-100 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-rose-400 transition text-base"
                                disabled={formState.submitting || formState.succeeded}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label htmlFor="subject" className="text-zinc-200 font-medium mb-1 text-base block">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-zinc-100 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-rose-400 transition text-base"
                                    defaultValue=""
                                    disabled={formState.submitting || formState.succeeded}
                                >
                                    <option value="" disabled>Select a subject</option>
                                    <option value="project">Project Inquiry</option>
                                    <option value="collaboration">Collaboration</option>
                                    <option value="question">General Question</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-zinc-200 font-medium mb-1 text-base block">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Type your message here..."
                                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-zinc-100 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-rose-400 transition text-base resize-none"
                                disabled={formState.submitting || formState.succeeded}
                            />
                        </div>
                        <ValidationError prefix="Message" field="message" errors={formState.errors} />
                    </div>
                    {/* Submit Button & Success/Error */}
                    <div className="p-5 flex flex-col gap-3">
                        <Button
                            type="submit"
                            className="w-full rounded-full border-2 border-rose-500 bg-rose-500/10 text-rose-200 px-5 py-3 text-base font-bold shadow-lg hover:bg-rose-500/20 hover:text-white transition-colors duration-200 backdrop-blur flex items-center justify-center gap-2 sm:px-8 sm:py-4 sm:text-lg"
                            disabled={formState.submitting || formState.succeeded}
                        >
                            <div className="flex items-center justify-center gap-2 w-full">
                                {formState.submitting ? <Loader /> : null}
                                <span>{formState.submitting ? 'Sending...' : formState.succeeded ? 'Sent!' : 'Send Message'}</span>
                                <Send2 size={26} variant="Bold" color="currentColor" />
                            </div>
                        </Button>
                        {formState.succeeded && (
                            <div className="text-green-400 text-base font-medium mt-2">Thank you! Your message has been sent.</div>
                        )}
                        <ValidationError errors={formState.errors} />
                    </div>
                </form>
            </div>
            {/* FAQ Accordion */}
            <div className="max-w-2xl mx-auto mt-12 mb-4 px-4">
                <h4 className="text-xl font-bold text-zinc-100 mb-4 text-center">Frequently Asked Questions</h4>
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        return (
                            <div key={faq.q} className={`rounded-xl border ${isOpen ? 'border-rose-500/70 bg-zinc-900/80' : 'border-zinc-800 bg-zinc-900/60'} overflow-hidden transition-colors duration-200`}>
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${idx}`}
                                    className={`w-full flex justify-between items-center px-5 py-4 text-left text-zinc-200 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-rose-400 transition group ${isOpen ? 'text-rose-400' : ''}`}
                                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                                >
                                    <span>{faq.q}</span>
                                    <span className="ml-4 flex items-center">
                                        <motion.span
                                            initial={false}
                                            animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? '#f43f5e' : '#a1a1aa' }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                                            className="inline-block"
                                        >
                                            {isOpen ? (
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 13L11 7.5L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            ) : (
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 9L11 12.5L14.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            )}
                                        </motion.span>
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-panel-${idx}`}
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { height: 'auto', opacity: 1 },
                                                collapsed: { height: 0, opacity: 0 }
                                            }}
                                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="px-5 pb-4 pt-1 text-zinc-400 text-sm">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-zinc-400 text-base sm:text-lg font-medium text-center max-w-2xl mx-auto mt-8 mb-2">
                I look forward to connecting with you!
            </div>
        </Section>
    );
}; 