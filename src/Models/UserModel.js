const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'users';

async function CreateUser(Email, Password) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      INSERT INTO ${tableName} (Email, Password)
      VALUES (?, ?)
      `;
    const [insertResult] = await conn.execute(sql, [Email, Password]);
    await conn.close();
    return insertResult;
  } catch (error) {
    return false;
  }
}

async function findUserWithEmail(Email) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
      SELECT * FROM ${tableName}
      WHERE Email = ?
      `;
    const [userFound] = await conn.execute(sql, [Email]);
    await conn.close();
    return userFound;
  } catch (error) {
    return false;
  }
}

module.exports = {
  CreateUser,
  findUserWithEmail,
};
