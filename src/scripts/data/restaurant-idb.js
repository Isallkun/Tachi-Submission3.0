import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DB_NAME, DB_VERSION, STORE_NAME } = CONFIG;

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(database) {
    database.createObjectStore(STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(STORE_NAME, id);
  },

  async getAllRestaurant() {
    return (await dbPromise).getAll(STORE_NAME);
  },

  async putRestaurant(restaurant) {
    return (await dbPromise).put(STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
