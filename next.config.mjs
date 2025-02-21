/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // Webpack configuration for GLSL files
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader'],
        });
        return config;
    },
    
    // Image optimization configuration
    images: {
        domains: ['yourcreative.com.au'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        formats: ['image/webp'],
    },
    
    // Performance optimizations
    swcMinify: true,
    
    // Environment configuration
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
    
    // Build configuration
    compress: true,
    poweredByHeader: false,
    
    // Internationalization (if needed)
    // i18n: {
    //   locales: ['en'],
    //   defaultLocale: 'en',
    // },
};

export default nextConfig;
