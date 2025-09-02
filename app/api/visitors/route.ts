import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const VISITORS_FILE = path.join(process.cwd(), 'data', 'visitors.json');

// Ensure data directory exists
const ensureDataDir = () => {
    const dataDir = path.dirname(VISITORS_FILE);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
};

// Read current visitor count
const readVisitors = (): { count: number; lastUpdated: string } => {
    try {
        ensureDataDir();
        if (fs.existsSync(VISITORS_FILE)) {
            const data = fs.readFileSync(VISITORS_FILE, 'utf-8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error reading visitors file:', error);
    }

    return { count: 0, lastUpdated: new Date().toISOString() };
};

// Write visitor count
const writeVisitors = (data: { count: number; lastUpdated: string }) => {
    try {
        ensureDataDir();
        fs.writeFileSync(VISITORS_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing visitors file:', error);
    }
};

export async function GET() {
    try {
        const visitors = readVisitors();
        return NextResponse.json({
            count: visitors.count,
            lastUpdated: visitors.lastUpdated
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get visitor count' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { visitorId } = await request.json();

        if (!visitorId) {
            return NextResponse.json({ error: 'Visitor ID required' }, { status: 400 });
        }

        const visitors = readVisitors();

        // Check if this is a new visitor (increment only once per unique visitor)
        const visitorsData = readVisitors();
        const newCount = visitorsData.count + 1;

        const updatedData = {
            count: newCount,
            lastUpdated: new Date().toISOString()
        };

        writeVisitors(updatedData);

        return NextResponse.json({
            count: newCount,
            message: 'Visitor counted successfully'
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to count visitor' }, { status: 500 });
    }
}
