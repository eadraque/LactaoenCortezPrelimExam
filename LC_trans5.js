const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
    
        await client.query('BEGIN');

        const q1 = 'SELECT * FROM "LactaoenCortez"."LC_PurchaseOrder"';
        const res1 = await client.query(q1);

        res1.rows.forEach(el =>
            console.log(
                `SUPPLIER ID: ${el.supp_id}, CUSTOMER ID: ${el.cust_id}, DATE: ${el.po_date}, STATUS: ${el.po_status}`
            )
        );

     
        await client.query('COMMIT');
    } catch (e) {
      
        await client.query('ROLLBACK');
        throw e;
    } finally {
     
        client.release();
    }
})().catch(e => console.error(e.stack));