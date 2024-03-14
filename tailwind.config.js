/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Rancho', 'Poppins', 'sans-serif']
      },
      colors: {
        // "mercury-bg-from": '#394147',
        // "mercury-bg-to": '#767f85',
        // "venus-bg-from": '#ac1013',
        // "venus-bg-to": '#e37b62',
        // "earth-bg-from": '#005192',
        // "earth-bg-to": '#0ea7eb',
        // "mars-bg-from": '#ab1c1f',
        // "mars-bg-to": '#e57a35',
        // "jupiter-bg-from": '#ae5f4e',
        // "jupiter-bg-to": '#e28482',
        // "saturn-bg-from": '#a04b36',
        // "saturn-bg-to": '#d1977c',
        // "uranus-bg-from": '#02396f',
        // "uranus-bg-to": '#0f71ad',
        // "neptune-bg-from": '#09225a',
        // "neptune-bg-to": '#4ab5e1',
        "mercury-from": '#394147',
        "mercury-to": '#767f85',
        "venus-from": '#ac1013',
        "venus-to": '#e37b62',
        "earth-from": '#005192',
        "earth-to": '#0ea7eb',
        "mars-from": '#ab1c1f',
        "mars-to": '#e57a35',
        "jupiter-from": '#ae5f4e',
        "jupiter-to": '#e28482',
        "saturn-from": '#a04b36',
        "saturn-to": '#d1977c',
        "uranus-from": '#02396f',
        "uranus-to": '#0f71ad',
        "neptune-from": '#09225a',
        "neptune-to": '#4ab5e1',
      }
    },
  },
  plugins: [],
}
