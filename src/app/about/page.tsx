'use client';

import { useEffect, useState } from 'react';

interface DeviceInfo {
    device: {
        type: string | null;
        model: string | null;
    };
    os: {
        name: string | null;
        version: string | null;
    };
    browser: {
        name: string | null;
        version: string | null;
    };
    cpu: {
        architecture: string | null;
    };
}

interface Geolocation {
    country: string;
    region: string;
    city: string;
    isp: string;
    lat: string;
    lon: string;
}

interface UserInfo {
    ip: string;
    userAgent: string;
    deviceInfo: DeviceInfo;
    geolocation: Geolocation;
}

const Page = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const res = await fetch('/api/user-info');
                const data = await res.json();
                setUserInfo(data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    const { ip, userAgent, deviceInfo, geolocation } = userInfo;

    return (
        <div>
            <h1>Information About Your Connection</h1>
            <p><strong>Your IP Address:</strong> {ip}</p>
            <p><strong>Your User-Agent:</strong> {userAgent}</p>

            <h2>Device Information:</h2>
            <ul>
                <li><strong>Device Type:</strong> {deviceInfo.device?.type || 'Unknown'}</li>
                <li><strong>Device Model:</strong> {deviceInfo.device?.model || 'Unknown'}</li>
                <li><strong>OS:</strong> {deviceInfo.os?.name ? `${deviceInfo.os.name} ${deviceInfo.os.version}` : 'Unknown'}</li>
                <li><strong>Browser:</strong> {deviceInfo.browser?.name ? `${deviceInfo.browser.name} ${deviceInfo.browser.version}` : 'Unknown'}</li>
                <li><strong>CPU Architecture:</strong> {deviceInfo.cpu?.architecture || 'Unknown'}</li>
            </ul>

            <h2>Geolocation:</h2>
            <p><strong>Country:</strong> {geolocation.country || 'Unknown'}</p>
            <p><strong>Region:</strong> {geolocation.region || 'Unknown'}</p>
            <p><strong>City:</strong> {geolocation.city || 'Unknown'}</p>
            <p><strong>ISP:</strong> {geolocation.isp || 'Unknown'}</p>
            <p><strong>Latitude:</strong> {geolocation.lat || 'Unknown'}</p>
            <p><strong>Longitude:</strong> {geolocation.lon || 'Unknown'}</p>
        </div>
    );
};

export default Page;
