const pool = require("./db");

const sql = 'DELETE FROM "LactaoenCortez"."LC_supplier" WHERE supp_id = $1 RETURNING *';
const data = [2];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});
pool.end();