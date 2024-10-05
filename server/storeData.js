const fs = require("fs");
const path = require("path");

const weekDay = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];


const StoreData = (DATA) => {
    const today = new Date();
    let dayName = weekDay[today.getDay()];
    const filePath = path.join(__dirname, 'data', dayName + '.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading JSON file:', err);
        }
            try {
                let jsonData = JSON.parse(data);
                DATA.calories += jsonData.calories;
                fs.writeFile(filePath, JSON.stringify(DATA, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error('Error writing JSON file:', err);
                    } else {
                        console.log('Data has been written to data.json');
                    }
                });
              } catch (parseError) {
                console.error('Error parsing JSON data:', parseError);
              }
        })
}

module.exports = StoreData;