
import app from './app.js';
import db from './Config/db.js';

db.query("SELECT 1")
  .then(() => {
    console.log("db connected");

    app.listen(3008, () => {
      console.log("Working");
    });
  })
  .catch((e) => {
    console.error("DB connection failed", e);
  });
