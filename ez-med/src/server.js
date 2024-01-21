const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aarondeo30:nwHacks@nwhacks.uiacifn.mongodb.net/Customers?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('db connected');
});

const app = express();
app.use(express.json());

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const patientSchema = new mongoose.Schema({
    family: ObjectId,
    nurse: ObjectId,
    name: String
});

// Define your user schema
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    type: String
});

// Create the User model associated with the "User" collection
const User = mongoose.model('User', userSchema, 'User');
const Patient = mongoose.model('Patient', patientSchema, 'Patient');

// GET all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a specific user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new user
app.post('/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/patients/:familyId', async (req, res) => {
    try {
        const familyId = req.params.familyId;

        // Validate if the provided familyId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(familyId)) {
            return res.status(400).json({ error: 'Invalid family ID format' });
        }

        const patients = await Patient.find({ family: familyId });
        res.json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(8080, () => {
    console.log('API server is running on port 8080');
});
