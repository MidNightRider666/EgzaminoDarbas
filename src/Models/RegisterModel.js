const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'accounts';
const tablename2 = `registers`;
const tablename3 = 'users';

async function GetAccByUserAndRegisters(userId) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      SELECT registers.Id, registers.Title, registers.Category, registers.Description
        FROM ((${tableName} 
          INNER JOIN ${tablename2} ON accounts.register_id = registers.Id) 
          INNER JOIN ${tablename3} ON accounts.user_id = users.id)
          WHERE registers.Archived = 0
          AND
          user_id = ?;`;
    const [Acc] = await conn.query(sql, [userId]);
    await conn.close();
    return Acc;
  } catch (error) {
    console.log('error===', error)
    return false;
  }
}

async function insertRegisters(NewRegistersData) {
  try {
    const { Title, Category, Description } = NewRegistersData;
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    INSERT INTO ${tablename2} (Title, Category, Description) VALUES (?, ?, ?)
    `;
    const [InsertRegisters] = await conn.execute(sql, [
      Title,
      Category,
      Description,
    ]);
    await conn.close();
    return InsertRegisters;
  } catch (error) {
    console.log('error===', error)
    return false;
  }
}

async function insertingRegisters(register_id, user_id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      INSERT INTO ${tableName} (register_id, user_id) 
      VALUES(?, ?)
    `;
    const [InsertRegisters] = await conn.execute(sql, [register_id, user_id]);
    await conn.close();
    return InsertRegisters;
  } catch (error) {
    console.log('error===', error)
    return false;
  }
}

async function ArchiveRegisters(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    UPDATE ${tablename2}
    SET archived = 1
    WHERE id = ?
    `;
    const [insertResult] = await conn.execute(sql, [id]);
    await conn.close();
    return insertResult;
  } catch (error) {
    console.log('error===', error)
    return false;
  }
}

async function RemoveArchiveRegisters(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    UPDATE ${tablename2}
    SET archived = 0
    WHERE id = ?
    `;
    const [insertResult] = await conn.execute(sql, [id]);
    await conn.close();
    return insertResult;
  } catch (error) {
    console.log('error===', error)
    return false;
  }
}

async function ArchivedRegisters(userId) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      SELECT registers.Id, registers.Title
        FROM ((${tableName} 
          INNER JOIN ${tablename2} ON accounts.register_id = registers.Id) 
          INNER JOIN ${tablename3} ON accounts.user_id = users.id)
          WHERE registers.Archived = 1
          AND
          user_id = ?;`;
    const [Acc] = await conn.query(sql, [userId]);
    await conn.close();
    return Acc;
  } catch (error) {
    return false;
  }
}

module.exports = {
  GetAccByUserAndRegisters,
  insertRegisters,
  insertingRegisters,
  ArchiveRegisters,
  RemoveArchiveRegisters,
  ArchivedRegisters,
};
