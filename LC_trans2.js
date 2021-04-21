const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {

        await client.query('BEGIN');

    
        const q1 =
            'INSERT INTO "LactaoenCortez"."LC_lineItem"(po_id, prod_id, quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d1 = [4, 4, 3, 300];
        const res1 = await client.query(q1, d1);

        const q2 =
            'INSERT INTO "LactaoenCortez"."LC_lineItem"(po_id, prod_id, quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d2 = [4, 4, 2, 300];
        const res2 = await client.query(q2, d2);

        const q3 =
            'INSERT INTO "LactaoenCortez"."LC_lineItem"(po_id, prod_id, quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d3 = [4, 4, 5, 250];
        const res3 = await client.query(q3, d3);


        await client.query('COMMIT');
    } catch (e) {
      
        await client.query('ROLLBACK');
        throw e;
    } finally {
  
        client.release();
    }
})().catch(e => console.error(e.stack));
