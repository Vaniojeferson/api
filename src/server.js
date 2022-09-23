 const dotenv = require('dotenv') 
 const app = require('./app');
 require('./database/index');


 dotenv.config();

 app.listen(process.env.PORT || 3333);
 