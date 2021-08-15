const fs = require('fs')

const log = console.log;

let data = JSON.parse(fs.readFileSync("./1-json.json").toString());

data = {
    ...data,
    timesModified: data.timesModified ? ++data.timesModified : 1
}

fs.writeFileSync("./1-json.json", JSON.stringify(data))
log(data);
log({ data });