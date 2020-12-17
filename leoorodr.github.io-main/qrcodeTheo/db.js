
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected' )
     return global.connection;

const mysql = require("mysql/promise");
const connection = await mysql.createConnection("mysql://app_qrcode:Senai115@qrcode.brazilsouth.cloudapp.azure.com:3306/db_qrcode");
console.log("Conectou no MySQL!");
global.connection = connection;
return connection;
}
connect();

async function selectMaquinas(){
const conn= await connect();
const [rows] = conn.query('SELECT * FROM maquina')
return await rows;



}
async function insertMaquinas(maquina){

    const conn = await connect();
    const sql = 'INSERT INTO maquina(nome, manualMaquina ,manualFuncionamento, id ) VALUES (?, ?, ?);';
    const values = [maquina.nome, maquina.manualMaquina, maquina.manualFuncionamento];
    return await conn.query(sql, values);
}

async function updateMaquinas(id, maquina){

    const conn = await connect();
    const sql = 'UPDATE maquina SET nome=? , manual=?, funcionamento=?, id=?';
    const values = [maquina.nome, maquina.manual, maquina.funcionamento, id];
    return await conn.query(sql, values);
}
async function deleteMaquinas(id){
    const conn = await connect();
    const sql = 'DELETE FROM maquina where id = ?;';
    return await conn.query(sql, [id]);
}


module.exports = {selectMaquinas, insertMaquinas, updateMaquinas, deleteMaquinas}

