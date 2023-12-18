const Keyv = require('keyv'); 
const keyv = new Keyv();

const set = (key, value, ttl = undefined) => keyv.set(key, value, ttl);

const get = (key) => keyv.get(key);

const del = (key) => keyv.delete(key);

const clear = () => keyv.clear();

module.exports = {
    set,
    get,
    del,
    clear,
}