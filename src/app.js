import express from "express";
import api from "./Routes/api.js";
import db from "./Config/db.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.get('/', (req, res) => {
    res.send('Working');
});


export default app;