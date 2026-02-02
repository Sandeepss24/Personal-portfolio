# Portfolio - Sandeep S S

A clean, modern portfolio website built with React and JavaScript.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light theme toggle
- 🎭 Smooth animations with Framer Motion
- 🎯 3D interactive elements with Three.js
- 🆔 Interactive ID card with physics simulation
- 📱 Mobile-first responsive design
- ⚡ Fast and lightweight

## Tech Stack

- **React 19** - UI library
- **JavaScript** - Programming language
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Rapier** - Physics engine
- **Vite** - Build tool
- **Wouter** - Lightweight routing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
client/
├── public/
│   └── assets/
│       ├── card.glb          # 3D model for ID card
│       └── lanyard.png       # Texture for lanyard
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Lanyard.jsx   # Interactive 3D ID card
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Experience.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── not-found.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── index.html
```

## Customization

1. **Personal Info**: Update name, bio, and contact details in the components
2. **Projects**: Modify the projects array in `Projects.jsx`
3. **Skills**: Update the skills array in `Skills.jsx`
4. **Experience**: Edit the experiences array in `Experience.jsx`
5. **Styling**: Customize colors and fonts in `index.css`
6. **3D Card**: Replace `card.glb` and `lanyard.png` in `public/assets/` with your own

## Interactive Features

- **Draggable ID Card**: Click and drag the 3D ID card with realistic physics
- **Physics Simulation**: The card drops from the top and swings naturally with rope physics
- **Interactive Lanyard**: Full rope simulation with multiple joints and colliders
- **Mouse Control**: Grab and throw the card around with mouse/touch controls
- **Responsive 3D**: Optimized performance for mobile and desktop
- **Smooth Scrolling**: Scroll from the interactive card section to the main portfolio

## Assets

The portfolio includes two important 3D assets:
- `public/assets/card.glb` - 3D model of the ID card (editable with [ModelViewer](https://modelviewer.dev/editor/))
- `public/assets/lanyard.png` - Texture for the lanyard strap

## Physics Features

The lanyard component uses:
- **Rapier Physics Engine** for realistic rope simulation
- **Multiple Rigid Bodies** connected with rope joints
- **Collision Detection** for interactive grabbing
- **Kinematic Controls** for smooth mouse interaction
- **Optimized Performance** with different settings for mobile/desktop

## License

MIT License - feel free to use this template for your own portfolio!