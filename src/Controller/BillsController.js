const { failResponce, successResponce } = require('../Utilities/dbHelper');
const { GetBillsByGroupID, PostBils, removeBills } = require('../Models/BillsModel');

async function GetBills(req, res) {
  const { id } = req.params;
  const FoundBills = await GetBillsByGroupID(id);

  return FoundBills === false
    ? failResponce(res)
    : successResponce(res, FoundBills);
}

async function InsertBills(req, res) {
  const NewBillData = req.body;
  const BillAddingResult = await PostBils(NewBillData);
  return BillAddingResult === false
    ? failResponce(res)
    : successResponce(res, BillAddingResult);
}

async function deleteBills(req, res) {
  const { id } = req.params;
  const deleteResult = await removeBills(id);
  return deleteResult === false
    ? failResponce(res)
    : successResponce(res, deleteResult);
}


module.exports = {
  GetBills,
  InsertBills,
  deleteBills
};
