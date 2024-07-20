import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestoDetailTemplate,
  createReviewTemplate,
} from '../templates/template_creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>

      <div id="addReview"></div>
      <div id="messageContainer"></div>
      <div id="customAlert" class="custom-alert">
        <div class="custom-alert-content">
          <span id="customAlertMessage"></span>
          <button id="customAlertClose" class="custom-alert-button">OK</button>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestaurantSource.detailResto(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
          description: restaurant.description,
        },
      });

      const addReview = document.querySelector('#addReview');
      addReview.innerHTML = createReviewTemplate();
      const submitButton = document.querySelector('#submit');
      const reviewer = document.querySelector('#formNama');
      const formReview = document.querySelector('#formReview');
      const restaurantId = restaurant.id;
      const messageContainer = document.querySelector('#messageContainer');
      const customAlert = document.querySelector('#customAlert');
      const customAlertMessage = document.querySelector('#customAlertMessage');
      const customAlertClose = document.querySelector('#customAlertClose');
      submitButton.addEventListener('click', async (ev) => {
        ev.preventDefault();
        if (reviewer.value.trim() === '' || formReview.value.trim() === '') {
          messageContainer.innerText = 'Harap lengkapi semua form';
        } else {
          const review = {
            id: restaurantId,
            name: reviewer.value,
            review: formReview.value,
          };
          try {
            await RestaurantSource.reviewResto(review);
            reviewer.value = '';
            formReview.value = '';
            customAlertMessage.innerText = 'Review berhasil dikirim';
            customAlert.style.display = 'block';
            setTimeout(() => {
              location.reload();
            }, 10000);
          } catch (error) {
            messageContainer.innerText = 'Gagal mengirim review';
            console.error(error);
          }
        }
      });
      customAlertClose.addEventListener('click', () => {
        customAlert.style.display = 'none';
      });
    } catch (error) {
      console.error('Failed to fetch restaurant details:', error);
    }
  },
};

export default Detail;
