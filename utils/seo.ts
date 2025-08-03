// utils/seo.ts
export interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    keywords?: string;
    type?: string;
}

export function generateSEO({
    title = 'Tolibjon Saidkodirov - Professional Web Developer & UI/UX Designer | Website Creation Services',
    description = 'Professional web developer and UI/UX designer offering fast, high-quality website creation services. Specializing in React, Next.js, and modern web technologies. Based in Tashkent, Uzbekistan.',
    url = 'https://saidkodirov.uz',
    image = '/images/heyUser.jpg',
    keywords = [
        // English Keywords
        "web developer", "website creation", "web design", "UI/UX design", "React developer", "Next.js developer",
        "frontend developer", "website builder", "professional web services", "custom website development",
        "responsive web design", "modern website", "fast website development", "quality website creation",
        "web application development", "e-commerce website", "business website", "portfolio website",
        "website optimization", "SEO friendly website", "mobile responsive design", "web development services",
        "website maintenance", "web consulting", "digital solutions", "web technology expert",
        "Tolibjon Saidkodirov", "Tashkent web developer", "Uzbekistan web services",

        // Uzbek Keywords
        "veb dasturchi", "veb sayt yaratish", "veb dizayn", "UI/UX dizayn", "React dasturchi", "Next.js dasturchi",
        "frontend dasturchi", "veb sayt quruvchi", "professional veb xizmatlar", "maxsus veb sayt ishlab chiqish",
        "responsive veb dizayn", "zamonaviy veb sayt", "tez veb sayt ishlab chiqish", "sifatli veb sayt yaratish",
        "veb ilova ishlab chiqish", "e-commerce veb sayt", "biznes veb sayti", "portfolio veb sayti",
        "veb sayt optimizatsiyasi", "SEO do'stona veb sayt", "mobil responsive dizayn", "veb ishlab chiqish xizmatlari",
        "veb sayt texnik xizmati", "veb maslahatchi", "raqamli yechimlar", "veb texnologiya mutaxassisi",
        "Tolibjon Saidkodirov", "Toshkent veb dasturchi", "O'zbekiston veb xizmatlari",

        // Russian Keywords
        "веб-разработчик", "создание сайтов", "веб-дизайн", "UI/UX дизайн", "React разработчик", "Next.js разработчик",
        "frontend разработчик", "создатель сайтов", "профессиональные веб-услуги", "разработка индивидуальных сайтов",
        "адаптивный веб-дизайн", "современный сайт", "быстрая разработка сайтов", "качественное создание сайтов",
        "разработка веб-приложений", "интернет-магазин", "корпоративный сайт", "сайт-портфолио",
        "оптимизация сайтов", "SEO-дружественный сайт", "мобильный адаптивный дизайн", "услуги веб-разработки",
        "техническое обслуживание сайтов", "веб-консалтинг", "цифровые решения", "эксперт по веб-технологиям",
        "Толибжон Саидкодиров", "веб-разработчик Ташкент", "веб-услуги Узбекистан"
    ].join(", "),
    type = 'website',
}: SEOProps) {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url,
            type,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
} 