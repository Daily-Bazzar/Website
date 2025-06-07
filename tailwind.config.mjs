/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          urbanist: ['Urbanist', 'sans-serif'],
          hedvig: ['Noto Serif Display', 'serif'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(ellipse at center top, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  }