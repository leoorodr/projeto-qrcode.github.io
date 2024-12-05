async function selectProfessor(){
const conn= await connect();
const [rows] = conn.query('SELECT * FROM professor')
return await rows;



}
async function insertProfessor(professores){

    const conn = await connect();
    const sql = 'INSERT INTO professores(nome, manual , funcionamento) VALUES (?, ?, ?);';
    const values = [professor.nome];
    return await conn.query(sql, values);
}

async function updateProfessor(id, Professor){

    const conn = await connect();
    const sql = 'UPDATE professores SET nome=? , manual=?, funcionamento=?, id=?';
    const values = [professor.nome, professor.manual, professor.funcionamento, id];
    return await conn.query(sql, values);
}
async function deleteProfessor(id){
    const conn = await connect();
    const sql = 'DELETE FROM maquina where id = ?;';
    return await conn.query(sql, [id]);
}


module.exports = {selectProfessor, insertProfessor, updateProfessor, deleteProfessor}

