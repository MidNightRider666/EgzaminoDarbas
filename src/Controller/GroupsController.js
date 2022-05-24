const { failResponce, successResponce } = require('../Utilities/dbHelper');
const {
  GetAccByUserAndGroups,
  ArchiveGroups,
  ArchivedGroups,
  RemoveArchiveGroups
} = require('../Models/GroupsModel');

async function GetAccIndex(req, res) {
  const { user_id} = req;
const FoundGroups = await GetAccByUserAndGroups(user_id);

  return FoundGroups === false
    ? failResponce(res)
    : successResponce(res, FoundGroups);
}

async function ArchGroups(req, res) {;
  const FoundGroups = await ArchiveGroups(id);
  return FoundGroups === false
    ? failResponce(res)
    : successResponce(res, FoundGroups);
}

async function RemoveArchGroups(req, res) {;
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
  RemoveArchGroups
};
