const { failResponce, successResponce } = require('../Utilities/dbHelper');
const {
  GetAccByUserAndRegisters,
  insertRegisters,
  insertingRegisters,
  ArchiveRegisters,
  RemoveArchiveRegisters,
  ArchivedRegisters,
} = require('../Models/RegisterModel');

async function GetAccIndex(req, res) {
  const { user_id } = req;
  const FoundRegisters = await GetAccByUserAndRegisters(user_id);
  console.log('FoundRegisters===', FoundRegisters);
  return FoundRegisters === false
    ? failResponce(res)
    : successResponce(res, FoundRegisters);
}

async function SendInsertRegisters(req, res) {
  const { user_id } = req;
  const NewRegistersData = req.body;
  const FoundRegisters = await insertRegisters(NewRegistersData);
  console.log('NewRegistersData===', NewRegistersData);
  console.log('FoundRegisters==', FoundRegisters);
  const serverResponse = await insertingRegisters(FoundRegisters.insertId, user_id);
  console.log('serverResponse===', serverResponse);
  return FoundRegisters === false
    ? failResponce(res)
    : successResponce(res, FoundRegisters);
}

async function SetArchive(req, res) {
  const { id } = req.params;
  const FoundRegisters = await ArchiveRegisters(id);
  return FoundRegisters === false
    ? failResponce(res)
    : successResponce(res, FoundRegisters);
}

async function RemoveArchRegisters(req, res) {
  const { id } = req.params;
  const FoundRegisters = await RemoveArchiveRegisters(id);
  return FoundRegisters === false
    ? failResponce(res)
    : successResponce(res, FoundRegisters);
}

async function GetArchivedRegisters(req, res) {
  const { user_id } = req;
  const FoundRegisters = await ArchivedRegisters(user_id);

  return FoundRegisters === false
    ? failResponce(res)
    : successResponce(res, FoundRegisters);
}

module.exports = {
  GetAccIndex,
  SetArchive,
  GetArchivedRegisters,
  RemoveArchRegisters,
  SendInsertRegisters,
};
