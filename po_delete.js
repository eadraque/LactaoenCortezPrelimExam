const pool = require('./db'); 
const sql = 'DELETE FROM "LactaoenCortez"."LC_PurchaseOrder" WHERE po_id = $1 RETURNING*';
const data = [4];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();