class BaseDao {

    constructor(collection) {
        this.collection = collection;
    }

    getData(query) {
        if(!this.collection) {
            throw 'contract violation';
        }
        query = query || {};
        return this.collection.find(query);
    }

    insertData(query) {
        console.log(query)
        if(!query) {
            throw 'query invalid';
        }
        return this.collection.create(query);
    }
    deleteData(query) {
        if(!this.collection) {
            throw 'contract violation';
        }
        console.log(query);
        return this.collection.findOneAndRemove(query);
    }
}
module.exports = BaseDao;
