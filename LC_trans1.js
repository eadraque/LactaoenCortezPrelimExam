const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
       
      await client.query('BEGIN');
      const q1 = `INSERT INTO "LactaoenCortez"."LC_supplier" 
                    (supp_id, 
                     supp_name, 
                     supp_loc) 
                  VALUES ($1, 
                          $2, 
                          $3)`;
      const data1 = [2,
                     'Chester Bernabe',
                     'Buhangin'];
      const res = await client.query(q1,data1);
  
      const q2 = `INSERT INTO"LactaoenCortez"."LC_supplier"
                    (supp_id, 
                     supp_name, 
                     supp_loc) 
                  VALUES ($1, 
                          $2, 
                          $3)`;
      const data2 = [3,
                     'Eddie Edraque',
                     'Calinan'];
      await client.query(q2,data2);

      const q3 = `INSERT INTO "LactaoenCortez"."LC_supplier"
      (supp_id, 
       supp_name, 
       supp_loc) 
    VALUES ($1, 
            $2, 
            $3)`;
const data3 = [4,
       'Reniel Espinosa',
       'Cotabato'];
await client.query(q3,data3);

const q4 = `INSERT INTO "LactaoenCortez"."LC_supplier"
(supp_id, 
 supp_name, 
 supp_loc) 
VALUES ($1, 
      $2, 
      $3)`;
const data4 = [5,
 'Ricart Narvasa',
 'Panabo'];
await client.query(q4,data4);

const q5 = `INSERT INTO "LactaoenCortez"."LC_supplier"
(supp_id, 
 supp_name, 
 supp_loc) 
VALUES ($1, 
      $2, 
      $3)`;
const data5 = [6,
 'Bryan Apale',
 'Buhangin'];
await client.query(q5,data5);
await client.query('COMMIT');

    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state
      client.release();
    }
  })().catch(e=>console.error(e.stack))