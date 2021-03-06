const readline = require('readline');
const fs = require('fs');
const path=require('path');

var buf=''
var value=''
var label=''
var first_line=true

const rl = readline.createInterface({
  input: fs.createReadStream('customer-data.csv'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  //console.log(`Line from file: ${line}`);
  //buf += line + '\n'
  if(first_line) {
    label = line.split(",");
    buf="[\n"
    first_line = false
  }
  else
    {
      value = line.split(",");
      buf = buf + "  {\n"
      for(var i =0;i<label.length;i++){
        buf=buf+"    \""+label[i]+"\": \""+value[i]+"\"";
        if(i==label.length-1)
          buf = buf + "\n"
        else
          buf = buf + ",\n"
        } 
      buf = buf + "  },\n"  
  }
  
});

rl.on('close',() => {
  buf=buf.substring(0,buf.length-2)
  buf=buf+'\n'+"]"
  fs.writeFileSync(path.join(__dirname, 'customer-data.json'), buf)
});
