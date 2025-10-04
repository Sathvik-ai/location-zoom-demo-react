# Location Zoom Demo - React + Node.js

An interactive visualization that takes you on a cinematic journey from the solar system down to your exact GPS location using React.js and Node.js.

Experience a realistic space-to-Earth animation featuring all 9 planets, smooth camera transitions, and an 8-level zoom sequence that pinpoints your location with precise coordinates.

## Project Structure

```
location-zoom-demo-react/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ControlPanel.jsx
│   │   │   ├── EarthGlobe.jsx
│   │   │   ├── MapView.jsx
│   │   │   ├── SolarSystem.jsx
│   │   │   ├── ZoomLabel.jsx
│   │   │   └── ZoomStage.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Node.js backend
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## Installation & Setup

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Install Frontend Dependencies
```bash
cd ../client
npm install
```

## Running the Application

### Option 1: Run Both Servers Separately

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm start
```
Server will run on http://localhost:5000

**Terminal 2 - Start Frontend:**
```bash
cd client
npm start
```
Frontend will run on http://localhost:3000

### Option 2: Development Mode
```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm start
```

## Features

###  Realistic Solar System Animation
- **All 9 planets** (Mercury to Pluto) with accurate colors and sizes
- **Top-down view** that smoothly rotates to side view
- **3D camera transitions** using CSS transforms
- Saturn with visible rings
- Earth with atmospheric glow
- Pulsing sun with realistic lighting
- Twinkling stars background

###  Earth Transition
- Rotating Earth globe with atmosphere
- Smooth zoom from space into Earth's atmosphere
- Cinematic entry animation

###  8-Level Zoom Sequence
1. **Planet Earth** - Global view
2. **Continent** - Auto-detected (Asia, Europe, Africa, Americas, Australia)
3. **Country** - Your country name
4. **State/Region** - Your state or region
5. **District** - District/county level
6. **City** - Your city name
7. **Your Location** - Street-level view with marker
8. **Coordinates** - Precise latitude & longitude (6 decimal places)

###  GPS Location Detection
- Automatic GPS detection on app load
- Browser Geolocation API
- Fallback to default location if permission denied
- Real-time location information from backend API

### User Interface
- Clean, intuitive controls
- "Start Journey" button to begin animation
- "Replay" button to watch again
- Animated labels showing current location level
- Smooth transitions throughout

## Technologies Used

### Frontend
- React 18.2.0
- React Scripts 5.0.1
- OpenLayers (ol ^7.5.2) - for interactive maps
- Axios (^1.6.0) - for API calls
- CSS3 Animations

### Backend
- Node.js with Express
- Express (^4.18.2)
- CORS (^2.8.5)
- Axios (^1.6.0)
- dotenv (^16.3.1)
- Nodemon (^3.0.1) - for development

## How It Works

### Animation Flow
```
Solar System (Top View)
    ↓ (3 seconds - planets rotating)
Camera Rotates to Side View
    ↓ (2 seconds - smooth rotation)
Focus on Earth
    ↓ (2 seconds - zoom in)
Earth Globe (Rotating)
    ↓ (3 seconds - approaching)
Entering Atmosphere
    ↓ (1.5 seconds - transition)
Map View - 8 Zoom Levels
    ↓ (Each level: 2-3 seconds)
Final: Your Location + Coordinates
```

### GPS Location Detection
1. App loads and automatically requests GPS permission
2. User allows location access
3. Browser Geolocation API provides coordinates
4. Backend API reverse-geocodes to get location names
5. Animation begins when "Start Journey" is clicked

## API Endpoints

The backend server provides the following endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/location-info?lat={lat}&lon={lon}` - Reverse geocoding for location names

## Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change PORT in `server/.env` to a different port (e.g., 5001)
   - Update proxy in `client/package.json` to match

2. **Location permission denied**
   - Check browser settings → Site permissions → Location
   - App will fall back to default location (center of India)

3. **Map tiles not loading**
   - Ensure stable internet connection
   - OpenStreetMap tiles require internet access

4. **CORS errors**
   - Verify backend server is running on port 5000
   - Check that proxy is configured in `client/package.json`

5. **Module not found errors**
   - Run `npm install` in both `server/` and `client/` directories
   - Delete `node_modules` and reinstall if issues persist

6. **Animation not starting**
   - Ensure location is detected (check browser console)
   - Wait for "Start Journey" button to appear
   - Refresh page if needed

## Browser Compatibility

Works best on modern browsers:
-  Chrome (latest)
-  Firefox (latest)
-  Edge (latest)
-  Safari (latest)

Requires JavaScript and Geolocation API support.

## Performance

- **Total animation duration**: ~30-35 seconds
- **Initial load time**: 2-3 seconds
- **Location detection**: 1-2 seconds
- **Smooth 60fps animations** with CSS transforms

## Credits

- **Map Data**: OpenStreetMap contributors
- **Geocoding**: Nominatim (OpenStreetMap)
- **Map Library**: OpenLayers
- **Inspiration**: Bhuvan Maps (ISRO)

## License

MIT License

---

**Enjoy your journey from the cosmos to your doorstep!** 🌌🌍📍
