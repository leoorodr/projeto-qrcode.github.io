
(async () => {

    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO MAQUINA');
    const result = await db.insertCustomer({nome: "Torno Schaublin", id:"1"})
    console.log(result);


    console.log('SELECT *FROM MAQUINA');
    const result = await db.selectCustomer({nome: "Torno Schaublin", id:"2"})
    console.log(result);

    console.log('UPDATE MAQUINA');
    const result = await db.updateCustomer({nome: "Torno Schaublin", id:"3"})
    console.log(result);

    console.log('DELETE FROM MAQUINA');
    const result = await db.deleteCustomer({nome: "Torno Schaublin", id:"4"})
    console.log(result);

  
  })();