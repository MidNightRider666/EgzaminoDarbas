const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'bills';
const tablename2 = 'registers';

async function GetBillsByGroupID(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    SELECT bills.id, bills.Status, bills.Expenses, registers.Title AS 'register'
    FROM ${tableName}
    LEFT JOIN ${tablename2}
    ON bills.register_id = registers.id
    WHERE register_id = ? `;
    const [bills] = await conn.query(sql, [id]);
    await conn.close();
    return bills;
  } catch (error) {
    console.log('error===', error)
    return false;
  }
}

async function PostBils(NewBillsData) {
  try {
    const { register_id, Status, Expenses } = NewBillsData;
    const conn = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO ${tableName} (register_id , Status, Expenses ) VALUES (?, ?, ?)`;
    const [addBillsResult] = await conn.execute(sql, [
      register_id,
      Status,
      Expenses,
    ]);
    await conn.close();
    return addBillsResult;
  } catch (error) {
    console.log('error===', error)
    return false;
  }
}

async function removeBilds(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `DELETE FROM ${tableName} WHERE id = ? LIMIT 1`;
    const [deleteResult] = await conn.execute(sql, [id]);
    await conn.close();
    return deleteResult;
  } catch (error) {
    console.log('deleteResult ===', error);
    return false;
  }
}


module.exports = {
  GetBillsByGroupID,
  PostBils,
};
