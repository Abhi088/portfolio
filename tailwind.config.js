// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}', // <-- important for Angular
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        // Add others as needed...
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
}
