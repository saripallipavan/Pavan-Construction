const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

const testEndpoints = async () => {
    console.log('Starting API Endpoint Testing...');

    const endpoints = [
        { name: 'Root', url: 'http://localhost:5000/', method: 'GET' },
        { name: 'Projects', url: `${BASE_URL}/projects`, method: 'GET' },
        { name: 'Services', url: `${BASE_URL}/services`, method: 'GET' },
        { name: 'Testimonials', url: `${BASE_URL}/testimonials`, method: 'GET' },
        // Add other endpoints if available
    ];

    let successCount = 0;
    let failCount = 0;

    for (const endpoint of endpoints) {
        try {
            const res = await axios({
                method: endpoint.method,
                url: endpoint.url
            });
            console.log(`[PASS] ${endpoint.name}: Status ${res.status}`);
            successCount++;
        } catch (err) {
            console.log(`[FAIL] ${endpoint.name}: ${err.message}`);
            if (err.response) {
                console.log(`       Status: ${err.response.status}, Data:`, err.response.data);
            }
            failCount++;
        }
    }

    console.log('\nTesting Complete.');
    console.log(`Passed: ${successCount}`);
    console.log(`Failed: ${failCount}`);
};

testEndpoints();
