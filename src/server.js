const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const userRoutes = require('./routes/UserRoutes');
const BillRoutes = require('./routes/BillsRoute');
const groupsRoutes = require('./routes/GroupsRoute');

app.use(morgan('common'));
app.use(cors());
app.use(express.json());


app.use('/auth/', userRoutes);
app.use('/', BillRoutes);
app.use('/', groupsRoutes)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
