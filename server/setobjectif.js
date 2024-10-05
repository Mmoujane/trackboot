const {client} = require("./dbconnection");
const objId = require('mongodb').ObjectId;

const setObjectif = async (objectif) => {
    try {
        await client.connect();
        console.log('connected')
        const collection = client.db('trackBot').collection('avencement');
        const query = { _id: new objId('64d3ade9b4177f698939adf8') };
        const updateResult = await collection.updateOne(query, {
            $set: { distance: objectif.distance, temps: objectif.temps }
        });
        console.log(`Modified ${updateResult.modifiedCount} document(s)`);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }

}

module.exports = setObjectif;