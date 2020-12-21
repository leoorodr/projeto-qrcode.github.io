async function selectProfessor(){
    const conn= await connect();
    const [rows] = conn.query('SELECT * FROM professor')
    return await rows;
    
    
    
    }
    async function insertProfessor(professor){
    
        const conn = await connect();
        const sql = 'INSERT INTO professor(nomeCompleto, NIF, email, senha, id) VALUES (?, ?, ?, ?, ?);';
        const values = [professor.nome, professor.nif, professor.email, professor.senha];
        return await conn.query(sql, values);
    }
    
    async function updateProfessor(id, professor){
    
        const conn = await connect();
        const sql = 'UPDATE professor SET nomeCompleto=? ,NIF=?, email=?, senha=?';
        const values = [professor.nome, professor.nif, professor.email, professor.senha];
        return await conn.query(sql, values);
    }
    async function deleteProfessor(id){
        const conn = await connect();
        const sql = 'DELETE FROM professor where id = ?;';
        return await conn.query(sql, [id]);
    }
    
    
    module.exports = {selectProfessor, insertProfessor, updateProfessor, deleteProfessor}
    
    