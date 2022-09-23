 const dotenv = require('dotenv') 
 const app = require('./app');
 require('./database/index');
 const PORT = process.env.DATABASE_URL;


 dotenv.config();

 app.listen(process.env.PORT || 3333);
 