const app = require('./app')
const dotenv = require('dotenv');
const connectDatabase = require('./database');


// Config

dotenv.config({ path: 'config/config.env' });

// Connecting to dataBase
connectDatabase();


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});