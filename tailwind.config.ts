/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		screens: {
  			'3xl': '1600px'
  		},
  		colors: {
  			primary: '#615EFC',
  			grayDarkest: '#1a1b1e',
  			grayDarker: '#212126',
  			grayDark: '#9394A1'
  		},
  		fontFamily: {
  			primary: ["var(--font-manrope)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default withUt(config);
