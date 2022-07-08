import mongo from 'mongodb';
const MongoClient = mongo.MongoClient;

export const conectar = async () => {

    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/equipos');
        const db = client.db('equipos');
        return db;
    } catch (err) {
        console.log(err.stack);
        return err.stack;
    }

};

export const desconectar = async () => {

    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/equipos');
        const db = client.db('equipos');
        return db;
    } catch (err) {
        console.log(err.stack);
        return err.stack;
    }

};

//conectar().then(result => console.log(result))