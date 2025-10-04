const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running', timestamp: new Date() });
});

// Reverse geocoding endpoint
app.post('/api/geocode/reverse', async (req, res) => {
    try {
        const { lat, lon } = req.body;
        
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        // Use Nominatim for reverse geocoding
        const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`,
            {
                headers: {
                    'User-Agent': 'LocationZoomDemo/1.0'
                }
            }
        );

        const data = response.data;
        
        res.json({
            city: data.address?.city || data.address?.town || data.address?.village || 'Unknown City',
            state: data.address?.state || 'Unknown State',
            country: data.address?.country || 'Unknown Country',
            district: data.address?.state_district || data.address?.county,
            fullAddress: data.display_name
        });
    } catch (error) {
        console.error('Geocoding error:', error.message);
        res.status(500).json({ 
            error: 'Failed to geocode location',
            message: error.message 
        });
    }
});

// Get location info endpoint (GPS-based)
app.get('/api/location-info', async (req, res) => {
    try {
        const { lat, lon } = req.query;
        
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`,
            {
                headers: {
                    'User-Agent': 'LocationZoomDemo/1.0'
                }
            }
        );

        const data = response.data;
        
        res.json({
            success: true,
            location: {
                city: data.address?.city || data.address?.town || data.address?.village,
                state: data.address?.state,
                country: data.address?.country,
                district: data.address?.state_district || data.address?.county,
                fullAddress: data.display_name
            }
        });
    } catch (error) {
        console.error('Location info error:', error.message);
        res.status(500).json({ 
            success: false,
            error: 'Failed to get location info' 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});
