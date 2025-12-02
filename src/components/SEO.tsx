import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
}

const SEO = ({
    title,
    description,
    keywords = ["Saurav Kumar", "Backend Developer", "Java", "Spring Boot", "Saurav IIT", "Saurav India"],
    image = "/og-image.png",
    url = "https://sauravk.in"
}: SEOProps) => {
    const siteTitle = `${title} | Saurav Kumar`;

    // Structured Data for Person
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Saurav Kumar",
        "url": "https://sauravk.in",
        "image": "https://sauravk.in/profile.jpg", // You should add a profile image
        "sameAs": [
            "https://github.com/kusaurav",
            "https://www.linkedin.com/in/sauravk02/"
        ],
        "jobTitle": "Software Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "Dealshare"
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Indian Institute of Technology, Kanpur",
            "sameAs": "https://www.iitk.ac.in/"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": "UAE"
        },
        "description": description
    };

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <meta name="author" content="Saurav Kumar" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
