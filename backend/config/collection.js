const Datastore = require('nedb');
const path = require('path');

module.exports = {
    User: new Datastore({ autoload: true, filename: path.resolve('collection/User-data.db')}),
    Siswa: new Datastore({ autoload: true, filename: path.resolve('collection/Data-Siswa.db')})
}