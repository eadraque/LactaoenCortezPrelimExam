select;

const pool = require('./db'); 


pool.query('SELECT * FROM "LactaoenCortez"."LC_PurchaseOrder"', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});


pool.end();