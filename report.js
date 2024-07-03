const newman = require('newman');
require('dotenv').config();
newman.run({
    collection:'https://api.postman.com/collections/27409493-d6175679-c018-4e16-8adb-ceccd2dc011c?access_key=${process.env.secretKey}',
    reporters:'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err){
    if (err) {throw err; }
    console.log('çollection run complete' ); 

});