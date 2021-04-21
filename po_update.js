const pool = require('./db');

const sql = 'UPDATE "LactaoenCortez"."LC_PurchaseOrder" SET po_condi = $1 WHERE po_id =4 RETURNING *';
const data = ['brocken'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();