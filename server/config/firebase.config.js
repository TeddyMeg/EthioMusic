const admin = require("firebase-admin");


const fs = require('fs');

// Read the service account key file
const serviceAccount = JSON.parse(fs.readFileSync('/etc/secrets/serviceAccountKey.json', 'utf8'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
