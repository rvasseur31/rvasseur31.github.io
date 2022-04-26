const writeFile = require("fs").writeFile;

const targetPath = "./src/environments/environment.prod.ts";

const envConfigFile = `export const environment = {
  firebase: {
    projectId: 'personal-cv-c48a7',
    appId: '${process.env.FIREBASE_APP_ID}',
    storageBucket: 'personal-cv-c48a7.appspot.com',
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: 'personal-cv-c48a7.firebaseapp.com',
    messagingSenderId: '${process.env.FIREBASE_SENDER_ID}',
    measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}',
  },
  mailApiKey: '${process.env.MAIL_API_KEY}',
  production: true,
};
`;

writeFile(targetPath, envConfigFile, "utf8", (err) => {
  if (err) {
    return console.log(err);
  }
});
