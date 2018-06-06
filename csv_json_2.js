const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

csv()
.fromFile(path.join(__dirname, 'customer-data.csv'))
.then((jsonObj)=>{
 fs.writeFile (path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj), function(err) {if (err) throw err;});
})
