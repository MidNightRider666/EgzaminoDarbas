const express = require('express');
const { GetAccIndex,
    SetArchive,
    GetArchivedRegisters,
    RemoveArchRegisters,
    SendInsertRegisters,} = require('../Controller/RegisterController');
const { validateToken } = require('../Utilities/middleware');

const registerRoutes = express();

registerRoutes.get('/accounts/:user_id', validateToken, GetAccIndex);
registerRoutes.delete('/accounts/setarchive/:id', validateToken, SetArchive);
registerRoutes.delete('/accounts/removearchive/:id', validateToken, RemoveArchRegisters);
registerRoutes.get('/accounts/archived/:user_id', validateToken, GetArchivedRegisters);
registerRoutes.post('/accounts/post', validateToken, SendInsertRegisters)


module.exports = registerRoutes;
