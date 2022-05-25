const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'bills';
const tablename2 = 'groups';

async function GetBillsByGroupID(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    SELECT bills.id, bills.Status, bills.Expenses, groups.Title AS 'Group'
    FROM ${tableName}
    LEFT JOIN ${tablename2}
    ON bills.Group_id = groups.id
    WHERE Group_id = ? `;
    const [bills] = await conn.query(sql, [id]);
    await conn.close();
    return bills;
  } catch (error) {
    return false;
  }
}

async function PostBils(NewBillsData) {
  try {
    const { Group_id, Status, Expenses } = NewBillsData;
    const conn = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO ${tableName} (Group_id , Status, Expenses ) VALUES (?, ?, ?)`;
    const [addBillsResult] = await conn.execute(sql, [
      Group_id,
      Status,
      Expenses,
    ]);
    await conn.close();
    return addBillsResult;
  } catch (error) {
    return false;
  }
}

module.exports = {
  GetBillsByGroupID,
  PostBils,
};
