const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb+srv://aarondeo30:nwHacks@nwhacks.uiacifn.mongodb.net/Customers?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('db connected');
});

const app = express();
app.use(express.json());

app.use(cors());

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

const patientUpdatesSchema = new mongoose.Schema({
    patientid: ObjectId,
    nurseid: ObjectId,
    update: String,
    date: String
});

const statusSchema = new mongoose.Schema({
    id: ObjectId,
    patient: ObjectId,
    state: String,
    lastfoodintakedate: String,
    lastfoodintaketype: String,
});
// Create the User model associated with the "User" collection
const User = mongoose.model('User', userSchema, 'User');
const Patient = mongoose.model('Patient', patientSchema, 'Patient');
const Updates = mongoose.model('Updates', patientUpdatesSchema, 'Updates');
const Status = mongoose.model('Status', statusSchema, 'Status');

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

app.get('/status/:patient', async (req, res) => {
    try {
      const patientId = req.params.patient; // Use req.params.patient to get the patient ID
      const status = await Status.findOne({ patient: patientId }); // Query based on the patient ID
  
      if (!status) {
        return res.status(404).json({ error: 'Status not found' });
      }
  
      res.json(status);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
app.get('/users/email/:email', async (req, res) => {
    try {
        const email = req.params.email; // Extract the email from the request parameters
        const user = await User.findOne({ email: email }); // Find user by email
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

app.get('/patients/family/:familyId', async (req, res) => {
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

app.get('/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/updates', async (req, res) => {
    try {
        const updates = await Updates.find();
        res.json(updates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.get('/updates/:patientid', async (req, res) => {
    try {
        const patientid = req.params.patientid;

        // Validate if the provided familyId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(patientid)) {
            return res.status(400).json({ error: 'Invalid family ID format' });
        }

        const updates = await Updates.find({ patientid: patientid });
        res.json(updates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(8080, () => {
    console.log('API server is running on port 8080');
});
