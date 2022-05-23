const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'accounts';
const tablename2 = 'groups';
const tablename3 = 'users';

async function GetAccByUserAndGroups(userId) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      SELECT groups.id, groups.Title 
      FROM ((${tableName} 
      INNER JOIN ${tablename2} ON accounts.Groups_id = groups.id) 
      INNER JOIN ${tablename3} ON accounts.Users_id = users.id)
      WHERE groups.Archived = 0;
      WHERE Users_id = ?;`;
    const [Acc] = await conn.query(sql, [userId]);
    await conn.close();
    return Acc;
  } catch (error) {
    return false;
  }
}

async function ArchiveGroups(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    UPDATE ${tablename2}
    SET archived = 1
    WHERE id = ?
    `;
    const [insertResult] = await conn.execute(sql [id]);
    await conn.close();
    return insertResult;
  } catch (error) {
    return false;
  }
}

async function ArchivedGroups(id) {
    try {
      const conn = await mysql.createConnection(dbConfig);
      const sql = `
      SELECT groups.id, groups.Title 
      FROM ((${tableName} 
      INNER JOIN ${tablename2} ON accounts.Groups_id = groups.id) 
      INNER JOIN ${tablename3} ON accounts.Users_id = users.id)
      WHERE groups.Archived = 1;
      WHERE Users_id = ?;`;
      const [insertResult] = await conn.execute(sql [id]);
      await conn.close();
      return insertResult;
    } catch (error) {
      return false;
    }
  }

module.exports = {
  GetAccByUserAndGroups,
  ArchiveGroups,
  ArchivedGroups
};