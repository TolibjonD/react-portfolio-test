import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { MyProvider } from "@/components/MyProvider";


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tolibjon Saidkodirov - Professional Web Developer & UI/UX Designer | Website Creation Services",
  description: "Professional web developer and UI/UX designer offering fast, high-quality website creation services. Specializing in React, Next.js, and modern web technologies. Based in Tashkent, Uzbekistan. Professional web development, website design, and digital solutions.",
  keywords: [
    // English Keywords
    "web developer", "website creation", "web design", "UI/UX design", "React developer", "Next.js developer",
    "frontend developer", "website builder", "professional web services", "custom website development",
    "responsive web design", "modern website", "fast website development", "quality website creation",
    "web application development", "e-commerce website", "business website", "portfolio website",
    "website optimization", "SEO friendly website", "mobile responsive design", "web development services",
    "website maintenance", "web consulting", "digital solutions", "web technology expert",

    // Uzbek Keywords
    "veb dasturchi", "veb sayt yaratish", "veb dizayn", "UI/UX dizayn", "React dasturchi", "Next.js dasturchi",
    "frontend dasturchi", "veb sayt quruvchi", "professional veb xizmatlar", "maxsus veb sayt ishlab chiqish",
    "responsive veb dizayn", "zamonaviy veb sayt", "tez veb sayt ishlab chiqish", "sifatli veb sayt yaratish",
    "veb ilova ishlab chiqish", "e-commerce veb sayt", "biznes veb sayti", "portfolio veb sayti",
    "veb sayt optimizatsiyasi", "SEO do'stona veb sayt", "mobil responsive dizayn", "veb ishlab chiqish xizmatlari",
    "veb sayt texnik xizmati", "veb maslahatchi", "raqamli yechimlar", "veb texnologiya mutaxassisi",

    // Russian Keywords
    "веб-разработчик", "создание сайтов", "веб-дизайн", "UI/UX дизайн", "React разработчик", "Next.js разработчик",
    "frontend разработчик", "создатель сайтов", "профессиональные веб-услуги", "разработка индивидуальных сайтов",
    "адаптивный веб-дизайн", "современный сайт", "быстрая разработка сайтов", "качественное создание сайтов",
    "разработка веб-приложений", "интернет-магазин", "корпоративный сайт", "сайт-портфолио",
    "оптимизация сайтов", "SEO-дружественный сайт", "мобильный адаптивный дизайн", "услуги веб-разработки",
    "техническое обслуживание сайтов", "веб-консалтинг", "цифровые решения", "эксперт по веб-технологиям"
  ].join(", "),
  authors: [{ name: "Tolibjon Saidkodirov" }],
  creator: "Tolibjon Saidkodirov",
  publisher: "Tolibjon Saidkodirov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saidkodirov.uz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tolibjon Saidkodirov - Professional Web Developer & UI/UX Designer",
    description: "Professional web developer and UI/UX designer offering fast, high-quality website creation services. Specializing in React, Next.js, and modern web technologies.",
    url: 'https://saidkodirov.uz',
    siteName: 'Tolibjon Saidkodirov Portfolio',
    images: [
      {
        url: '/images/heyUser.jpg',
        width: 1200,
        height: 630,
        alt: 'Tolibjon Saidkodirov - Professional Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tolibjon Saidkodirov - Professional Web Developer & UI/UX Designer",
    description: "Professional web developer and UI/UX designer offering fast, high-quality website creation services.",
    images: ['/images/heyUser.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: ['/icon.ico']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
