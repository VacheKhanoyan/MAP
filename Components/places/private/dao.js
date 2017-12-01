const mongoose = require('mongoose');
require('./schema');
const BaseDao = require('./../../core/basedao');
const Conn = require('./../../core/dbconnections');

class UserDAO extends BaseDao {
    constructor() {
        super(Conn.model('places'));
    }
}
module.exports = new UserDAO();
