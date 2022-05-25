const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'accounts';
const tablename2 = 'groups';
const tablename3 = 'users';

async function GetAccByUserAndGroups(userId) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      SELECT groups.Id, groups.Title
        FROM ((${tableName} 
          INNER JOIN ${tablename2} ON accounts.group_id = groups.Id) 
          INNER JOIN ${tablename3} ON accounts.user_id = users.id)
          WHERE groups.Archived = 0
          AND
          user_id = ?;`;
    const [Acc] = await conn.query(sql, [userId]);
    await conn.close();
    return Acc;
  } catch (error) {
    return false;
  }
}

async function insertGroups(NewGroupData) {
  try {
    const { Title, Category, Description} = NewGroupData;
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    INSERT INTO groups (Title, Category, Description)
    VALUES(?, ?, ?);
    `;
    const [InsertGroup] = await conn.execute(sql, [Title, Category, Description]);
    await conn.close();
    return InsertGroup;
  } catch (error) {
    return false;
  }
}

async function insertingGroups(group_id, user_id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      INSERT INTO accounts (group_id, user_id) 
      VALUES(?, ?);
    `;
    const [InsertGroup] = await conn.execute(sql, [group_id, user_id]);
    await conn.close();
    return InsertGroup;
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

async function RemoveArchiveGroups(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    UPDATE ${tablename2}
    SET archived = 0
    WHERE id = ?
    `;
    const [insertResult] = await conn.execute(sql [id]);
    await conn.close();
    return insertResult;
  } catch (error) {
    return false;
  }
}

async function ArchivedGroups(userId) {
    try {
      const conn = await mysql.createConnection(dbConfig);
      const sql = `
      SELECT groups.Id, groups.Title
        FROM ((${tableName} 
          INNER JOIN ${tablename2} ON accounts.group_id = groups.Id) 
          INNER JOIN ${tablename3} ON accounts.user_id = users.id)
          WHERE groups.Archived = 1
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
  GetAccByUserAndGroups,
  ArchiveGroups,
  ArchivedGroups,
  RemoveArchiveGroups,
  insertGroups,
  insertingGroups
};