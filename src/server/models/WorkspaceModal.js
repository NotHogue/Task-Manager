const mongoose = require('mongoose');
const MONGO_URI = ''; //enter db uri here



// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,

//     dbName: 'workspaces'
// }).then(() => console.log('Connected to db'))
//     .catch(err => console.log(err));

const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
    name: String,
    toDo: Array,
    doing: Array,
    done: Array,
})

const Workspaces = mongoose.model('workspaces', workspaceSchema);

module.exports = {
    Workspaces
}
