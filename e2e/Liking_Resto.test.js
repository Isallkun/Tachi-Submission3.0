/* eslint-disable no-undef */
const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('fondness restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/');
  I.wait(3);
});

Scenario('showing empty fondness restaurant', ({ I }) => {
  I.amOnPage('/#/fav');
  I.wait(3);
  I.seeElement('.content');
  I.wait(3);
  I.see('', '.content');
});

Scenario('fondness one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(3);
  I.seeElement('h3 a');
  I.wait(3);
  const firstResto = locate('h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/fav');
  I.wait(3);
  I.seeElement('.restaurant-item');
  I.wait(3);
  const likedRestoTitle = await I.grabTextFrom('h3 a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unfondness one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(2);

  const firstCard = locate('h3').first();
  const cardLink = firstCard.find('a');
  I.click(cardLink);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');
  I.wait(2);
  const firstLikedCard = locate('h3').first();
  const cardLikedLink = firstLikedCard.find('a');
  I.click(cardLikedLink);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');
  I.wait(2);
  I.see('', '.restaurants');
});

Scenario('sorting restaurants by name', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(3);
  I.selectOption('#sortSelect', 'name');
  I.wait(3);
  const firstResto = await I.grabTextFrom(locate('.restaurant-item__content h3 a').first());
  const secondResto = await I.grabTextFrom(locate('.restaurant-item__content h3 a').at(2));
  assert(firstResto < secondResto);
});

Scenario('sorting restaurants by rating', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(3);
  I.selectOption('#sortSelect', 'rating');
  I.wait(3);
  const firstRestoRating = parseFloat(await I.grabTextFrom(locate('.restaurant-item__header__rating__score').first()));
  const secondRestoRating = parseFloat(await I.grabTextFrom(locate('.restaurant-item__header__rating__score').at(2)));
  assert(firstRestoRating >= secondRestoRating);
});

Scenario('accessing dark mode', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(3);
  I.click('#darkModeToggle');
  I.wait(3);
  I.seeElement('body.dark-mode');
});
