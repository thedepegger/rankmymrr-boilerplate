# RankMyMRR - SaaS Pre-Launch Boilerplate

A sleek, animated pre-launch landing page boilerplate for SaaS products. Perfect for building anticipation and collecting early user interest before your product launch.

## 🚀 Features

- **Smooth Logo Animation**: Eye-catching zoom in/out effect on page load
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Hardware-accelerated animations with minimal load time
- **Download Protection**: Logo assets protected from easy downloading
- **Dark Theme**: Modern black background design
- **React + TypeScript**: Built with modern web technologies

## 🎨 Animation Details

The logo features a professional animation sequence:
- Smooth zoom-in from 60% to 110% scale
- Gentle zoom-out to final size
- 1.5 second duration with optimized easing
- Hardware-accelerated for blur-free rendering

## 🛠️ Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thedepegger/rankmymrr-boilerplate.git
cd rankmymrr-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Creates an optimized production build in the `build` folder.

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for full configuration control.

## 🎯 Customization

### Logo
Replace `/public/logo.png` with your own logo file. The animation will automatically apply to your new logo.

### Animation Timing
Adjust animation parameters in `src/App.css`:
- Duration: Change `1.5s` in the animation property
- Scale values: Modify the `scale()` values in `@keyframes smoothZoom`

### Colors
Update the background color in `src/App.css`:
```css
.App {
  background: #000000; /* Change this to your brand color */
}
```

## 📱 Responsive Breakpoints

- Desktop: max-width 300px logo
- Tablet (768px): max-width 250px logo
- Mobile landscape (640px): max-width 200px logo
- Mobile portrait (480px): max-width 150px logo
- Small mobile (360px): max-width 120px logo

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build folder is ready to be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- [Live Demo](https://your-demo-url.com) *(Add your deployment URL)*
- [Report Issues](https://github.com/thedepegger/rankmymrr-boilerplate/issues)

---

Built with ❤️ for the SaaS community