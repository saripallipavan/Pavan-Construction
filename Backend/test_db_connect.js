require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');

const logFile = 'db_test_result.txt';

const log = (msg) => {
    fs.appendFileSync(logFile, msg + '\n');
    console.log(msg);
};

// Clear previous log
if (fs.existsSync(logFile)) {
    fs.unlinkSync(logFile);
}

const connectDB = async () => {
    try {
        log('Starting connection test...');
        log('URI: ' + (process.env.MONGO_URI || 'UNDEFINED'));

        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000
        });

        log('MongoDB Connected Successfully!');

        // Count documents just to be sure
        // We need a model roughly defined or just check connection state
        log('Connection State: ' + mongoose.connection.readyState);

        process.exit(0);
    } catch (err) {
        log('Connection Error: ' + err.message);
        process.exit(1);
    }
};

connectDB();
