const express = require('express');
const {  GetAccIndex,
    ArchGroups,
    GetArchivedGroups,
    RemoveArchGroups } = require('../Controller/GroupsController');
const { validateToken } = require('../Utilities/middleware');

const groupsRoutes = express();

groupsRoutes.get('/accounts/:user_id', validateToken, GetAccIndex);
groupsRoutes.delete('/accounts/setarchive/:id', validateToken, ArchGroups);
groupsRoutes.delete('/accounts/removearchive/:id', validateToken, RemoveArchGroups);
groupsRoutes.get('/accounts/archived/:user_id', validateToken, GetArchivedGroups);


module.exports = groupsRoutes;
