import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter, sans-serif',
          {
            fontFeatureSettings: 'cv11',
          },
        ],
      },
      colors: {
        primary: '#02315F',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config
