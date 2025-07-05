const fs = require('fs');
const path = require('path');

const getFile = (name) => path.join(__dirname, `${name}.json`);

const getData = (file) => {
  if (!fs.existsSync(file)) fs.writeFileSync(file, '[]');
  return JSON.parse(fs.readFileSync(file));
};

const saveData = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

module.exports = { getFile, getData, saveData };