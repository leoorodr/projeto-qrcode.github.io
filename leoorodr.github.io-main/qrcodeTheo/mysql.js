const mariadb = require('mariadb');
const pool = mariadb.createPool({
host: 'qrcode.brazilsouth.cloudapp.azure.com',
user: 'app_qrcode',
password: 'Senai115',
connectionLimit: 5
});
pool.getConnection()
.then(conn => {
   conn.query("SELECT 1 as val")
   .then((rows) => {

    console.log(rows);

    return conn.query("INSERT INTO mytable value (?, ?)", [1, "mariadb"])
   })
   .then((res) => {
     console.log(res);
     conn.end();
   })
   .catch(err => {
     console.log(err);
     console.end();
   })
   
  }).catch(err =>{

  })