const pool = require('./db'); 



const sql = 'UPDATE "LactaoenCortez"."LC_supplier" SET supp_loc = $1 WHERE supp_id =3 RETURNING *';
const data = ["panacan"];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();