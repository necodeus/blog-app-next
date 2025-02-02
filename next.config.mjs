process.env.APP_ENV = process.env.APP_ENV || 'development';

const env = {};

switch (process.env.APP_ENV) {
    // local api
    case 'local':
        env.API_BASE_URL = 'http://localhost:8000/api';
        break;
    // development api
    case 'development':
        env.API_BASE_URL = 'https://blog-api.necodeo.com/api';
        break;
    // production api
    case 'production':
        env.API_BASE_URL = 'https://blog-api.necodeo.com/api';
        break;
}

console.log('Running in', process.env.APP_ENV, 'mode');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env,
    poweredByHeader: false,
    trailingSlash: false,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: 'top-right',
        appIsrStatus: true,
    },
    deploymentId: `${process.env.APP_ENV}-${Date.now()}`,
    // useFileSystemPublicRoutes: false,
};

export default nextConfig;
