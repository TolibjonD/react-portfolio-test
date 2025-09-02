import { useState, useEffect } from 'react';

export const useVisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const trackVisitor = async () => {
            try {
                // Generate a unique visitor ID using localStorage
                const visitorId = localStorage.getItem('visitorId') ||
                    Math.random().toString(36).substring(2, 15) +
                    Math.random().toString(36).substring(2, 15);

                localStorage.setItem('visitorId', visitorId);

                // Check if this visitor has already been counted today
                const lastVisitDate = localStorage.getItem('lastVisitDate');
                const today = new Date().toDateString();

                if (lastVisitDate !== today) {
                    // Count new visitor
                    const response = await fetch('/api/visitors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ visitorId }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setVisitorCount(data.count);
                        localStorage.setItem('lastVisitDate', today);
                    }
                } else {
                    // Just fetch current count
                    const response = await fetch('/api/visitors');
                    if (response.ok) {
                        const data = await response.json();
                        setVisitorCount(data.count);
                    }
                }
            } catch (error) {
                console.error('Error tracking visitor:', error);
                // Fallback: try to get current count
                try {
                    const response = await fetch('/api/visitors');
                    if (response.ok) {
                        const data = await response.json();
                        setVisitorCount(data.count);
                    }
                } catch (fallbackError) {
                    console.error('Error fetching visitor count:', fallbackError);
                }
            } finally {
                setIsLoading(false);
            }
        };

        trackVisitor();
    }, []);

    return { visitorCount, isLoading };
};
