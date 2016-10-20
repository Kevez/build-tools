const del = require('del');

module.exports = () => {
    console.log('--- clean');
    return () => {
        del.sync(['./build-output']);
    };
};