/////////////////////////////////////
/* const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 7500; 

mongoose.connect('mongodb://localhost/taskmaster', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(user);
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send('Invalid email or password');
    }
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(user);
});
 */

////////////////////////
// Task filtering and search
/* app.get('/tasks', async (req, res) => {
    const { priority, dueDate, search } = req.query;
    const query = { userId: req.user._id };

    if (priority) query.priority = priority;
    if (dueDate) query.deadline = { $lte: new Date(dueDate) };
    if (search) query.title = { $regex: search, $options: 'i' };

    const tasks = await Task.find(query);
    res.send(tasks);
}); */