const fs = require("fs").promises;
const path = require("path");


const files = ["lun.json", "mar.json", "mer.json", "jeu.json", "ven.json", "sam.json", "dim.json"]

const sendProgress = async () => {
    const promises = files.map(async (file) => {
      try {
        const data = await fs.readFile(path.join(__dirname, 'data', file), 'utf8');
        return JSON.parse(data);
      } catch (err) {
        console.error(err);
        return null;
      }
    });
  
    const result = await Promise.all(promises);

    return result.filter(data => data !== null);
  }

module.exports = sendProgress;