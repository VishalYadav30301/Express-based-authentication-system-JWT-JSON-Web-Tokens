const app = require('./app');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/profile', (req, res) => {
    res.send('Welcome to your profile!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
