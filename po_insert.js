const pool = require('./db'); 

const sql ='INSERT INTO "LactaoenCortez"."LC_PurchaseOrder"(po_id, supp_id, cust_id, po_date,po_status) VALUES ($1,$2,$3,$4,$5) RETURNING *';
const data = [ 1,2, 1, 22,'good'];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();