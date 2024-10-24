import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Saidkodirov Tolibjon",
    description: "Saidkodirov Tolibjon",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
