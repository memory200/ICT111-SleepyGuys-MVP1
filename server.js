const express = require('express');
const app = express();
const path = require('path');

// Configure template engine settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse incoming urlencoded form data
app.use(express.urlencoded({ extended: true }));

// In-Memory Database Simulation (Initial sample dataset)
let items = [
    { id: 'LF-001', itemName: 'Student ID Card', location: 'Main Library', status: 'Pending', desc: 'Found near the entrance gate.' },
    { id: 'LF-002', itemName: 'Phone Charger', location: 'ICT Lab 3', status: 'Available', desc: 'Black color USB-C fast charger.' }
];

// Route 1: Home Dashboard View
app.get('/', (req, res) => {
    res.render('index', { items: items, msg: null });
});

// Route 2: Handle Form Submission and Input Validation
app.post('/report', (req, res) => {
    const { reportType, itemName, location, description } = req.body;
    
    // Server-side validation check
    if(!itemName || !location) {
        return res.render('index', { items: items, msg: 'Error: Please fill in required fields!' });
    }

    // Auto-generate record tracking ID
    const newId = `LF-00${items.length + 1}`;
    
    // Append the new structural dataset into memory array
    items.push({
        id: newId,
        itemName: itemName,
        location: location,
        status: reportType === 'Lost' ? 'Pending' : 'Available',
        desc: description
    });

    // Re-render dashboard view with success acknowledgement
    res.render('index', { items: items, msg: 'Report submitted successfully!' });
});

// Route 3: Dynamic Parameter Route for Record Specification View
app.get('/item/:id', (req, res) => {
    const foundItem = items.find(i => i.id === req.params.id);
    if (foundItem) {
        res.render('detail', { item: foundItem });
    } else {
        res.redirect('/');
    }
});

// Bind application and initialize server listener on Port 3000
app.listen(3000, () => {
    console.log('SleepyGuys UI/UX Server is running on http://localhost:3000');
});