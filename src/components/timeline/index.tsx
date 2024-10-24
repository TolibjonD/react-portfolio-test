"use client";
import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab';
import { Slide } from '@mui/material';
import { motion } from 'framer-motion';
import { event } from '@/constants/data/events';
import { Code, Python, JavaScript, Briefcase, MessageProgramming } from 'iconsax-react'; // Import Iconsax icons

// Define a union type for the valid icon keys
type IconKey = 'python' | 'javascript' | 'typescript' | 'code' | 'briefcase';

const TimelineComponent = ({ events }: { events: event[] }) => {
    // Mapping icons based on the event type
    const iconMapping: Record<IconKey, JSX.Element> = {
        python: <Python size="32" color="#FF8A65" />,
        javascript: <JavaScript size="32" color="#FF8A65" />,
        typescript: <MessageProgramming size="32" color="#FF8A65" />, // Use a different color for TypeScript
        code: <Code size="32" color="#FF8A65" />,
        briefcase: <Briefcase size="32" color="#FF8A65" />, // Icon for job
    };

    return (
        <div className="px-4 sm:px-6 md:px-8">
            <Timeline position="right" className="flex flex-col sm:flex-row">
                {events.map((event, index) => (
                    <TimelineItem key={index}>
                        {/* Hide OppositeContent on mobile */}
                        <TimelineOppositeContent className="hidden md:block">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 + index * 0.2 }}
                            >
                                <p className="text-gray-400">{event.year}</p>
                            </motion.div>
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <motion.div
                                className="w-16 h-16 flex items-center justify-center rounded-full bg-orange/10"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 + index * 0.2 }}
                            >
                                {/* Dynamically choose icons from mapping */}
                                {iconMapping[event.icon as IconKey]} {/* Cast to IconKey */}
                            </motion.div>
                            {index < events.length - 1 && <TimelineConnector className="bg-orange" />}
                        </TimelineSeparator>

                        <TimelineContent>
                            <Slide direction="up" in={true} timeout={500 + index * 200}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="p-4 bg-orange/10 rounded-md shadow-lg hover:bg-orange/20 transition duration-300">
                                        {/* Visible on mobile */}
                                        <div className="md:hidden text-gray-400 mb-2">{event.year}</div>
                                        <h2 className="text-lg sm:text-xl text-orange font-semibold">{event.year}</h2>
                                        <p className="text-black text-sm sm:text-base">{event.knowledge}</p>
                                    </div>
                                </motion.div>
                            </Slide>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default TimelineComponent;
