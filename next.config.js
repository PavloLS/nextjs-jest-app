/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_API_URL: 'https://movie-database-alternative.p.rapidapi.com',
    RAPID_API_KEY: '30fd7d91c4msh386557668dc1c7fp1d6b18jsnb5332b45863d'
  }
}

module.exports = nextConfig
