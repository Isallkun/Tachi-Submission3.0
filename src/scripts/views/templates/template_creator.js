import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="restaurant__title"><i class="fa fa-cutlery"></i> Detail Restaurant</h2>
  <img class="restaurant__poster lazyload" src="${CONFIG.IMAGE_ENDPOINT_LARGE + resto.pictureId}" alt="${resto.name}" />
  <div class="restaurant__info">
    <h4><i class="fa fa-info-circle"></i> Nama Restaurant</h4>
    <p>${resto.name}</p>
    <h4><i class="fa fa-map-marker"></i> Alamat</h4>
    <p>${resto.address}, ${resto.city}</p>
    <h4><i class="fa fa-file-text"></i> Deskripsi</h4>
    <p>${resto.description}</p>
  </div>
  <h2 class="restaurant__title"><i class="fa fa-book"></i> Menu Restaurant</h2>
  <div class="restaurant__menu">
    <h4><i class="fa fa-cutlery"></i> Detail Makanan</h4>
    <p>${resto.menus.foods.map((food) => `${food.name}`).join(', ')}</p>
    <h4><i class="fa fa-glass"></i> Detail Minuman</h4>
    <p>${resto.menus.drinks.map((drink) => `${drink.name}`).join(', ')}</p>
  </div>
  <h2 class="restaurant__title"><i class="fa fa-star"></i> Review Restaurant</h2>
  <div class="restaurant__reviews">
    ${resto.customerReviews
    .map(
      (review) => `
        <div class="review-item">
          <p class="review-name"><i class="fa fa-user"></i> ${review.name}</p>
          <p class="review-date"><i class="fa fa-calendar"></i> ${review.date}</p>
          <p class="review-text">"${review.review}"</p>
        </div>
      `,
    )
    .join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${resto.name}"
           src="${resto.pictureId ? CONFIG.IMAGE_ENDPOINT_LARGE + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = () => `
  <section class="input_section">
    <h3>Komentar</h3>
    <form action="" method="post" id="addReview" class="form-review">
        <div class="input">
            <label for="nama">Nama</label>
            <input type="text" name="nama" id="formNama" class="form-input" required><br>
        </div>
        <div class="input">
            <label for="review">Review</label>
            <input type="text" name="review" id="formReview" class="form-input" required>
        </div>
        <button type="submit" id="submit">Kirim</button>
    </form>
  </section>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};
