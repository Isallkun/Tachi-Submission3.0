import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template_creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading" id="foods">Explore Restaurants</h2>
      <hr/>
      <div class="latest">
        <form class="search-form">
          <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search by name">
            <button type="button" id="searchButton">Search</button>
          </div>
          <div class="sort-container">
            <select id="sortSelect">
              <option value="default">Sort by</option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </form>
      </div>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const searchButton = document.querySelector('#searchButton');
    const searchInput = document.querySelector('#searchInput');
    const sortSelect = document.querySelector('#sortSelect');

    const renderRestaurants = (restaurants) => {
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((rest) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(rest);
      });
    };

    const fetchAndRenderRestaurants = async () => {
      const resto = await RestaurantSource.homeResto();
      renderRestaurants(resto);
    };

    const searchRestaurants = async () => {
      const query = searchInput.value.toLowerCase();
      let filteredRestaurants = await RestaurantSource.homeResto();

      if (query) {
        // eslint-disable-next-line max-len
        filteredRestaurants = filteredRestaurants.filter((resto) => resto.name.toLowerCase().includes(query));
      }

      renderRestaurants(filteredRestaurants);
    };

    const sortRestaurants = async () => {
      const sortBy = sortSelect.value;
      const sortedRestaurants = await RestaurantSource.homeResto();

      if (sortBy === 'name') {
        sortedRestaurants.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'rating') {
        sortedRestaurants.sort((a, b) => b.rating - a.rating);
      }

      renderRestaurants(sortedRestaurants);
    };

    searchButton.addEventListener('click', searchRestaurants);
    sortSelect.addEventListener('change', sortRestaurants);

    await fetchAndRenderRestaurants();
  },
};

export default Home;
