
(async () => {

    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO MAQUINA');
    const result = await db.insertMaquina({nome: "Torno Schaublin", id:"1"})
    console.log(result);


    console.log('SELECT *FROM MAQUINA');
    const result = await db.selectMaquina({nome: "Tornno Schaublin", id:"1"})
    console.log(maquina);

    console.log('UPDATE MAQUINA');
    ult = await db.updateMaquina({nome: "Torno Schaublin", id:"1"})
    console.log(result2);

    console.log('DELETE FROM MAQUINA');
    const result2 = await db.deleteMaquina({id:"1"})
    console.log(result3);

  
  })();