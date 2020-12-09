async function connect(){
    if(global.connection && global.connection.state !== 'disconnected' )
     return global.connection;

const mysql = require("mysql2/promise");
const connection = await mysql.createConnection("mysql://app_qrcode:Senai115@DESKTOP-3NR8CSB:3306/CRUD");
console.log("Conectou no MySQL!");
global.connection = connection;
return connection;
}
connect();

async function selecCustomers(){
const conn= await connect();
const [rows] = conn.query('SELECT * FROM maquina')
return await rows;



}
async function insertCustomer(maquina){

    const conn = await connect();
    const sql = 'INSERT INTO maquina(nome, manual , funcionamento) VALUES (?, ?, ?);';
    const values = [maquina.nome, maquina.manual, maquina.funcionamento];
    await conn.query(sql, values);
}

async function updateCustomer(id, maquina){

    const conn = await connect();
    const sql = 'UPDATE maquina SET nome=? , manual=?, funcionamento=?, id=?';
    const values = [maquina.nome, maquina.manual, maquina.funcionamento];
    return await conn.query(sql, values);
}
async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM maquina where id=?';
    return await conn.query(sql, [id]);
}


module.exports = {selectCustomers, insertCustomers, updateCustomers, deleteCustomers}

