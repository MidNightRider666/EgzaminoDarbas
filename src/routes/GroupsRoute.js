const express = require('express');
const {  GetAccIndex,
    ArchGroups,
    GetArchivedGroups } = require('../Controller/GroupsController');
const { validateToken } = require('../Utilities/middleware');

const groupsRoutes = express();

groupsRoutes.get('/accounts/:user_id', validateToken, GetAccIndex);
groupsRoutes.delete('/accounts/:id', validateToken, ArchGroups);
groupsRoutes.get('/accounts/archived/:user_id', validateToken, GetArchivedGroups);


module.exports = groupsRoutes;
