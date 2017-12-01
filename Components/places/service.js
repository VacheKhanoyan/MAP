const placesdao = require('./private/dao');

class PlacesService {

    getlist() {
        return new Promise((resolve, reject) => {
            placesdao.getData().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    insertlist(places) {
        return new Promise((resolve, reject) => {
          console.log('1. coordinates == ', places);
            placesdao.insertData(places).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    deletelist(id) {
        return new Promise((resolve, reject) => {
            placesdao.deleteData(id).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = new PlacesService();
