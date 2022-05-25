const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { port } = require('./dbConfig');
const app = express();
const userRoutes = require('./routes/UserRoutes');
const BillRoutes = require('./routes/BillsRoute');
const registerRoutes = require('./routes/RegisterRoutes');

app.use(morgan('common'));
app.use(cors());
app.use(express.json());


app.use('/auth/', userRoutes);
app.use('/', BillRoutes);
app.use('/', registerRoutes)


app.listen(port, () => console.log(`Server is running on port ${port}`));
