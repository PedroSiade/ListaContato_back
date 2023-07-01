import ContactsController from "./controller/ContactsController";

const express = require("express");
import route from './routes'
const app = express();
var cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(route)
app.listen(3333, () => 'server running on port 3333')

