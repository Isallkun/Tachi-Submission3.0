import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestoItemTemplate } from '../templates/template_creator';

const Like = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Favorite Restaurants</h2>
            <div id="restaurants" class="restaurants">

            </div>
        </div>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
