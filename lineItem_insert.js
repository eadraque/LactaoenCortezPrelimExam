const pool = require('./db'); 

const sql ='INSERT INTO "LactaoenCortez"."LC_lineItem"(po_id, prod_id, quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [1, 2, 5, 5000];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();