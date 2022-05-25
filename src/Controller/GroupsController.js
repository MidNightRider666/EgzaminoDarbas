const { failResponce, successResponce } = require('../Utilities/dbHelper');
const {
  GetAccByUserAndGroups,
  ArchiveGroups,
  ArchivedGroups,
  RemoveArchiveGroups,
  insertGroups,
  insertingGroups,
} = require('../Models/GroupsModel');

async function GetAccIndex(req, res) {
  const { user_id } = req;
  const FoundGroups = await GetAccByUserAndGroups(user_id);
  console.log('FoundGroups===', FoundGroups);
  return FoundGroups === false
    ? failResponce(res)
    : successResponce(res, FoundGroups);
}

async function SendInsertGroups(req, res) {
  // const { user_id } = req;
  const NewGroupData = req.body;
  const FoundGroups = await insertGroups(NewGroupData);
  console.log('NewGroupData===', NewGroupData);
  console.log('FoundGroups==', FoundGroups);
  // const serverResponse = await insertingGroups(FoundGroups.insertId, user_id);
  // console.log('serverResponse===', serverResponse);
  return FoundGroups === false
    ? failResponce(res)
    : successResponce(res, FoundGroups);
}

async function ArchGroups(req, res) {
  const FoundGroups = await ArchiveGroups(id);
  return FoundGroups === false
    ? failResponce(res)
    : successResponce(res, FoundGroups);
}

async function RemoveArchGroups(req, res) {
  const FoundGroups = await RemoveArchiveGroups(id);
  return FoundGroups === false
    ? failResponce(res)
    : successResponce(res, FoundGroups);
}

async function GetArchivedGroups(req, res) {
  const { user_id } = req;
  const FoundGroups = await ArchivedGroups(user_id);

  return FoundGroups === false
    ? failResponce(res)
    : successResponce(res, FoundGroups);
}

module.exports = {
  GetAccIndex,
  ArchGroups,
  GetArchivedGroups,
  RemoveArchGroups,
  SendInsertGroups,
};
