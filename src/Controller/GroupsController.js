const { failResponce, successResponce } = require('../Utilities/dbHelper');
const {
  GetAccByUserAndGroups,
  ArchiveGroups,
  ArchivedGroups
} = require('../Models/GroupsModel');

async function GetAccIndex(req, res) {
  const { Users_id } = req;
const FoundGroups = await GetAccByUserAndGroups(Users_id);

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

async function GetArchivedGroups(req, res) {
    const { Users_id } = req;
    const FoundGroups = await ArchivedGroups(Users_id);
  
    return FoundGroups === false
      ? failResponce(res)
      : successResponce(res, FoundGroups);
  }

module.exports = {
  GetAccIndex,
  ArchGroups,
  GetArchivedGroups
};
