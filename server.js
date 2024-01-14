// Dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT);

// Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Task Schema
const taskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Tasks!');
});

// CRUD for Tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const { description, completed } = req.body;
    const newTask = new Task({ description, completed });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const { description, completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { description, completed },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('*', (req, res) => {
  res.send('404');
});

// Listen
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});